import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const AddBooks = () => {
    const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN; // Make sure the token is provided through environment variables
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const { handleSubmit, register } = useForm();
    const { user } = useContext(AuthContext);

    const handleAddBook = async (data) => {
        const formData = new FormData();
        formData.append('image', data.image[0]);

        try {
            const response = await fetch(img_hosting_url, {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();
            const imageUrl = result.data.url;

            const newBook = {
                name: data.bookName,
                Image: imageUrl,
                author: user.displayName, // Use user's name as the author
                genre: data.genre,
                price: data.price,
                published_year: data.publishedDate,
                email: user.email,
                userImage: user.photoURL,
            };

            console.log(newBook);

            fetch('http://localhost:5000/books', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(newBook),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    // rcv from server
                    if (data.insertedId) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Book Added Successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool',
                        });
                    }
                });
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    // Genre options for the select field
    const genreOptions = [
        'Fiction',
        'Fantasy',
        'Mystery',
        'Thriller',
        'Romance',
        'Science Fiction',
        'Horror',
        'Non-fiction',
        'Biography',
        'History',
        // Add more genres as needed
    ];

    return (
        <div className="card flex-shrink-0 w-full max-w-4xl mx-auto my-8 shadow-2xl bg-base-100">
            <div className="card-body">
                <form onSubmit={handleSubmit(handleAddBook)}>
                    <div className='flex gap-8'>
                        <div className="form-control mb-8">
                            <label className="label">
                                <span className="label-text">Book Name</span>
                            </label>
                            <input
                                type="text"
                                name="bookName"
                                placeholder="Book Name"
                                className="input input-bordered w-96"
                                {...register("bookName", { required: true })}
                            />
                        </div>
                        <div className="form-control mb-8">
                            <label className="label">
                                <span className="label-text">Author</span>
                            </label>
                            <input
                                type="text"
                                name="author"
                                placeholder="Author"
                                className="input input-bordered w-96"
                                value={user.displayName} // Use user's name as the value for "author"
                                readOnly // Make the input field read-only
                            />
                        </div>
                    </div>
                    <div className="form-control mb-8">
                        <label className="label">
                            <span className="label-text">Genre</span>
                        </label>
                        <select
                            name="genre"
                            className="input input-bordered w-full"
                            {...register("genre", { required: true })}
                        >
                            <option value="">Select Genre</option>
                            {genreOptions.map((genre) => (
                                <option key={genre} value={genre}>
                                    {genre}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-control mb-8">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input
                            type="number"
                            name="price"
                            placeholder="Price"
                            className="input input-bordered w-full"
                            {...register("price", { required: true })}
                        />
                    </div>
                    <div className="form-control mb-8">
                        <label className="label">
                            <span className="label-text">Published Date</span>
                        </label>
                        <input
                            type="date"
                            name="publishedDate"
                            className="input input-bordered w-full"
                            {...register("publishedDate", { required: true })}
                        />
                    </div>
                    <div className="form-control mb-8">
                        <label className="label">
                            <span className="label-text">Image*</span>
                        </label>
                        <input
                            {...register("image")}
                            type="file"
                            accept=".jpg, .jpeg, .png"
                            className="file-input file-input-bordered w-full"
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">
                            Add Book
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBooks;
