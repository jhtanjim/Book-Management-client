import React, { useState } from 'react';
import UseCarts from '../UseCarts/UseCarts';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Cart = () => {
    const carts = UseCarts();

    const [books, setBooks] = useState(carts)

    console.log(carts);
    const total = carts.reduce((sum, item) => item.price + sum, 0);

    const handleDelete = cart => {
        console.log(cart);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${cart._id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            // refetch() (assuming this function is defined elsewhere)
                            Swal.fire(
                                'Deleted!',
                                'Your Book has been deleted.',
                                'success'
                            )
                            const remaining = books.filter(book => console.log(book))
                            setBooks(remaining)
                        }
                    })
            }
        })
    }

    return (
        <div className='max-w-screen-xl mx-auto my-8'>
            <div className='uppercase lg:h-[60px] mb-4 align-items-center font-semibold flex justify-evenly'>
                <h3 className="lg:text-3xl">Total Items: {carts.length}</h3>
                <h3 className="lg:text-3xl">Total Price: ${total}</h3>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Book Name</th>
                            <th>Author</th>
                            <th>Genre</th>
                            <th>Published Year</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carts.map((cart, index) => (
                            <tr key={cart._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <img src={cart.Image} alt={cart.name} style={{ width: '50px', height: '50px' }} />
                                </td>
                                <td>{cart.name}</td>
                                <td>{cart.author}</td>
                                <td>{cart.genre}</td>
                                <td>{cart.published_year}</td>
                                <td>{cart.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(cart)} className="btn btn-ghost bg-red-600 text-white">
                                        <FaTrashAlt />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;
