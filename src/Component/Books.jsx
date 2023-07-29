import React, { useContext, useEffect, useState } from 'react';
import bannerImg from '../assets/banner.jpg'
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Books = () => {
    const [books, setBooks] = useState([]);
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => {
                setBooks(data);
            })
    }, []);

    const handleAddToCart = book => {

        if (user && user.email) {
            const cartItem = {
                id: book._id,
                name: book.name,
                Image: book.Image,
                author: book.author,
                genre: book.genre,
                price: book.price,
                published_year: book.published_year,
                email: user.email,
                userImage: user.photoURL
            }
            console.log(cartItem);
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {

                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Books added on the cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login to Order the Books',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <div>
            <div className='lg:max-w-screen-xl mx-auto'>
                <div className='mx-auto text-center md:w-3/12 my-16'>
                    <h3 className='lg:text-4xl font-bold uppercase'>All Books</h3>
                    <div className="divider"></div>
                </div>

                <div className='grid sm:grid-cols-1 lg:grid-cols-4 gap-8'>
                    {books.map((book) => (
                        <div key={book.id} className="card  bg-base-100 shadow-xl">
                            <figure style={{ height: '400px', width: '100%', overflow: 'hidden' }}><img src={book.Image} /></figure>
                            <div className="mx-auto">
                                <h2 className="card-title  text-lg font-bold">{book.name}</h2>
                                <h2>Author: {book.author}</h2>
                                <h2>Genre: {book.genre}</h2>
                                <div className=''>
                                    <p>Price: {book.price}</p>
                                    <p>Published Year: {book.
                                        published_year}</p>

                                </div>
                                <div className="card-actions justify-end">
                                    <button onClick={() => handleAddToCart(book)} className="btn btn-sm my-4  btn-primary">  Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
};

export default Books;
