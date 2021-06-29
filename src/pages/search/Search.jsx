import axios from 'axios'
import React, { useState, useEffect,useContext } from 'react'
import { useLocation } from "react-router-dom"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArtistItem } from "./SearchStyle";
import TopSong from '../../components/topSongs/TopSong';
import { AppContext } from '../../App';
function Search() {
    let query = new URLSearchParams(useLocation().search)
    const [artists, setArtists] = useState([])
    const [albums, setAlbums] = useState([])
    const [songs, setSongs] = useState([])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,

    };
    const {theme}=useContext(AppContext)
    useEffect(() => {
        axios.get(`https://api.allorigins.win/raw?url=https://api.deezer.com/search/artist?q=${query.get('q')}`)
            .then(res => {
                let listArtists = res.data.data.filter(item => {
                    let arr = item.picture_big.split('/')[5]
                    // let a=11
                    return arr != ""
                    // return true;
                })
                setArtists(listArtists)
            })
            .catch(err => {
                console.log(err)
            })
        axios.get(`https://api.allorigins.win/raw?url=https://api.deezer.com/search/track?q=${query.get('q')}`)
            .then(res => {
               
                setSongs(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
        axios.get(`https://api.allorigins.win/raw?url=https://api.deezer.com/search/album?q=${query.get('q')}`)
            .then(res => {
               
                setAlbums(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    console.log(songs)
    return (
        <div className="text-white">
            <Slider {...settings}>
                {
                    artists.map(item => {
                        return <ArtistItem to={`artist/${item.id}`}>
                            <div className="wrap_img">
                                <img src={item.picture_medium} alt="" />
                            </div>
                            <p className="font-weight-bold">{item.name}</p>
                        </ArtistItem>
                    })
                }


            </Slider>
            <TopSong topSongs={songs} theme={theme}></TopSong>
            <Slider {...settings}>
                {
                    albums.map(item => {
                        return <ArtistItem to={`album/${item.id}`}>
                            <div className="wrap_img">
                                <img src={item.cover_medium} alt="" />
                            </div>
                            <p className="font-weight-bold">{item.title}</p>
                        </ArtistItem>
                    })
                }


            </Slider>
        </div>
    )
}

export default Search
