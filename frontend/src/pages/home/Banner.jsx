

import React from 'react'
import book_banner from "../../assets/book_banner.jpg"


function Banner() {
    return (
        <div className='flex flex-col md:flex-row py-16 px-12 justify-between items-center gap-12'>
            <div className='md:w-1/2 w-full'>



                <h1 className='md:text-5xl text-2xl font-medium mb-7'>Welcome to Middle Book Store</h1>

                <p className='mb-10'>Your go-to destination for discovering and buying books you love. Whether you're searching for the latest bestsellers, timeless classics, or hidden literary gems, we've got something for every reader. Dive into a world of stories and knowledge with ease and convenience.</p>
                <button className='btn-primary'>Subscribe</button>
            </div>

            <div className='md:w-1/3 w-full flex items-center md:justify-end'>

                <img src={book_banner} alt="" />

            </div>



        </div>

    )
}

export default Banner