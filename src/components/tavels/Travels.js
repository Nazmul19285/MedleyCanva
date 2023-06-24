import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import icon from '../../e1.png';

const Travels = () => {

    return (
        <div>
            <div className="p-16 bg-gray-500">
                <iframe
                    src="https://player.gotipath.com/stream/a699eb89-6100-4a23-bdb6-1049905eeb61/default/1e9e73bd-16a3-4ee8-88da-506321ebc6f4?autoplay=true&preload=true&loop=true&muted=true"
                    loading="lazy"
                    className="w-full h-full"
                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                    allowfullscreen="true">
                </iframe>
            </div>


            <div className='flex'>
                <div className="carousel-item">
                    <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Burger" />
                </div>
            </div>
        </div>
    );
};

export default Travels;