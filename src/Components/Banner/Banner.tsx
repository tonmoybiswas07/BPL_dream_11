import React from 'react';
import "../../index.css"
import bannerImg from "../../assets/banner-main.png"

const Banner = () => {
    return (
        <div className='min-h-[500px] container mx-auto mt-20 rounded-2xl bg-image space-y-5 p-20'>
<div className='flex justify-center items-center'>
    <img src={bannerImg} alt="" />

</div>
<h1 className='font-bold text-4xl text-center text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
<p className='text-center text-base text-white'>Beyond Boundaries Beyond Limits</p>
<div className="btn bg-[#E7FE29] border-2 border-[#E7FE29] rounded-md flex justify-center items-center w-45 mx-auto">
    <button className=' '>Claim Free Credit</button>
</div>
        </div>
    );
};

export default Banner;