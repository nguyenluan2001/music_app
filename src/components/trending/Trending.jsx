import React, { useContext } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TrendItem from './TrendItem';
import fetchSingleAlbum from '../../api/fetchSingleAlbum';
import { AppContext } from "../../App"
function Trending({ trendAlbums }) {
    const { theme } = useContext(AppContext)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                },
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
               
            }
        ],
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"

    };
    const style = {
        color: theme == 'dark' ? 'white' : 'black'
    }
    return (
        <div className="mb-5">
            <h1 style={style}>Trending Albums</h1>
            <Slider {...settings}>
                {
                    trendAlbums.map(item => {
                        return <TrendItem album={item}></TrendItem>
                    })
                }


            </Slider>
        </div>
    )
}

export default Trending
