import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../components/Images/banner/Banner1.jpeg'
import Image from 'next/image';

export default function Banner() {


  return (
    <main className="text-white w-5/6 mx-auto py-10">
        <Image width={1600} src={banner1}  alt='banner-img' className='mt-[100px] lg:max-w-7xl mx-auto'/>
    </main>
  );
}