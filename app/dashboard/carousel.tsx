'use client';

import {Carousel} from 'flowbite-react';
import swal from 'sweetalert';

export default function InfoCarousel() {
    return (
        <Carousel>
            <img alt="..." src="https://ropeg.kemkes.go.id/slide/penghargaan/slide1.png" />
            <img alt="..." src="https://ropeg.kemkes.go.id/slide/penghargaan/slide2.png" />
            <img alt="..." src="https://ropeg.kemkes.go.id/slide/penghargaan/slide3.png" />
            <img alt="..." src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80https://flowbite.com/docs/images/carousel/carousel-4.svg"/>
            <img alt="..." src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"/>
        </Carousel>

    )
}