import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LatestBooks = () => {
    const [books, setBooks] = useState([]); // Initialize as an empty array

    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => {
                setBooks(data);
            });
    }, []);

    // Sort the books array by published_date in descending order
    const sortedBooks = [...books].sort((a, b) => {
        const dateA = new Date(a.published_year);
        const dateB = new Date(b.published_year);
        return dateB - dateA;
    });

    // Get the latest 6 books
    const latestBooks = sortedBooks.slice(0, 6);

    return (
        <div>
            <div className='max-w-screen-xl mx-auto'>
                <div className='mx-auto text-center md:w-3/12 my-16'>
                    <h3 className='text-4xl font-bold uppercase'>Latest Books</h3>
                    <div className="divider"></div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {latestBooks.map((book) => (
                        <div key={book._id} className="card card-side bg-base-100 shadow-2xl">
                            <figure>
                                <img src={book.Image} alt={book.name} className='h-40 mx-4' />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{book.name}</h2>
                                <p>Author: {book.author}</p>
                                <p>Genre: {book.genre}</p>
                                <p>Published Year: {book.published_year}</p>
                                <p>Price: ${book.price}</p>
                                <div className="card-actions justify-end">
                                    <Link to='/books'>
                                        <button className="btn btn-primary">Wanna Buy?</button></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LatestBooks;
