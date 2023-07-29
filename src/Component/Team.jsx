import React from 'react';
import suraya from '../assets/Team/Suraiya Shabbir Niha.jpg'
import Aisha from '../assets/Team/Aisha Jannat Tiha .jpg'
import Meher from '../assets/Team/Meher Afroz Deeba .jpeg'
import Marzuda from '../assets/Team/Marzuda Binte Shafi Nafisa.jpg'
const Team = () => {
    return (
        <div className=' max-w-screen-xl mx-auto '>
            <div className='mx-auto text-center md:w-3/12 my-16'>
                <h3 className='text-4xl font-bold uppercase'>Our Team</h3>
                <div className="divider"></div>
            </div>
            <div className='grid lg:grid-cols-2 gap-8'>
                <div className="  card card-side bg-base-100 shadow-xl">
                    <figure><img className='w-40 h-60' src={Meher} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Meher Afroz Deeba</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Watch</button>
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img className='w-40 h-60' src={suraya} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Suraiya Shabbir Niha</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Watch</button>
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img className='w-40 h-60' src={Aisha} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Aisha Jannat Tiha </h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Watch</button>
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img className='w-40 h-60' src={Marzuda} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Marzuda Binte Shafi Nafisa</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Watch</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;