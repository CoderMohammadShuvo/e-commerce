import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../components/Images/banner/Banner1.jpeg'
import Image from 'next/image';

export default function Banner() {


  return (
    <main className="text-white">
        <Image src={banner1}  alt='banner-img'/>
    </main>
  );
}