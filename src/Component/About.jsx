import React from 'react';
import aboutImage from "../assets/about.png"

const About = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className='mx-auto text-center md:w-3/12 my-16'>
                <h3 className='	 text-4xl font-bold uppercase  '>About Us</h3>
                <div className="divider"></div>
            </div>

            {/* About image and title */}
            <div className='grid lg:grid-cols-2'>
                <img src={aboutImage} alt="" />
                <div className='my-auto ms-16 '>
                    <h2 className='lg:text-5xl mt-4 font-bold '>About Boi er Dokan</h2>
                    <p className='lg:text-lg lg:my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt recusandae alias dolores quaerat hic adipisci tenetur obcaecati inventore itaque libero sint, voluptate, exercitationem officiis possimus facilis reiciendis mollitia consectetur est.</p>



                    <button className="btn btn-active btn-primary">Know More</button>

                </div>
            </div>

        </div>
    );
};

export default About;