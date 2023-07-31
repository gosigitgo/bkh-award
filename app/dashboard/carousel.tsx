'use client';

import {Carousel, IconButton} from "@material-tailwind/react";
import swal from 'sweetalert';

export default function InfoCarousel() {
    return (
        <Carousel className="rounded-xl" autoplay={true} loop={true}>
            <img
                src="/images/slides/slide1.png"
                alt="image 1"
                className="h-full w-full object-cover"/>
            <img
                src="/images/slides/slide2.png"
                alt="image 2"
                className="h-full w-full object-cover"/>
            <img
                src="/images/slides/slide3.png"
                alt="image 3"
                className="h-full w-full object-cover"/>
        </Carousel>

    )
}