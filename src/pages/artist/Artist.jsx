import React, { useState, useEffect, useContext, useRef } from 'react'
import { useParams, useRouteMatch } from "react-router-dom"
import {
    TransitionGroup,
    CSSTransition
} from "react-transition-group";
import axios from "axios"
import { ArtistInfo, Info, RelatedItem } from './ArtistStyle'
import { FaHeart } from "react-icons/fa"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TrendItem from '../../components/trending/TrendItem'
import SongItem from '../album/SongItem'
import { Playlist } from '../album/AlbumStyle'
import Loading from '../loading/Loading';
import { AppContext } from "../../App"
function Artist() {
    const { id } = useParams()
    const [artist, setArtist] = useState({})
    const [albumOfArtist, setAlbumOfArtist] = useState([])
    const [topTracks, setTopTracks] = useState([])
    const [relatedArtist, setRelatedArtist] = useState([])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,

    };
    const [loading, setLoading] = useState(true)
    const followingBtnRef = useRef()
    const [isFollow, setIsFollow] = useState(false)
    const { theme } = useContext(AppContext)
    let { path, url } = useRouteMatch();
    // console.log(path)
    // console.log(url)
    useEffect(() => {
        axios.get(`https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${id}`)
            .then(res => {
                setArtist(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        axios.get(`https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${id}/albums`)
            .then(res => {
                setAlbumOfArtist(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
        axios.get(`https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${id}/top`)
            .then(res => {
                setTopTracks(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
        axios.get(`https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${id}/related`)
            .then(res => {
                setRelatedArtist(res.data.data)
                console.log(res.data.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
            })

    }, [id])
    // console.log(relatedArtist)
    useEffect(() => {

        let fetchLocal = JSON.parse(localStorage.getItem('favorites'))
        if(fetchLocal!=null)
        {

            fetchLocal.followingArtists.forEach(item => {
                if (artist.id == item.id) {
                    setIsFollow(true)
                    // followingBtnRef.current.style.color="tomato"
                    // followingBtnRef.current.children[1].innerText="Unfollow"
                }
            })
        }

    }, [artist])
    const style = {
        color: theme == 'dark' ? "white" : "black"
    }
   console.log(artist)
    function followingAction() {
        let favorites = JSON.parse(localStorage.getItem('favorites'))
        if (favorites == null) {
            favorites = {
                favoritesSongs: [],
                followingArtists: [{ ...artist, isFollowing: true }]

            }
            localStorage.setItem('favorites', JSON.stringify(favorites))
        }
        else {
            let isExist = false
            favorites.followingArtists.forEach(item => {
                if (item.id == artist.id) {
                    isExist = true
                }
            })
            if (!artist.isFollowing) {
                if (isExist) {
                    // alert("This is is existed in favorites list artists")
                    let newArtists=favorites.followingArtists.filter(item=>{
                        return item.id!=artist.id
                    })
                    favorites={
                        favoritesSongs:favorites.favoritesSongs,
                        followingArtists:newArtists
                    }
                    localStorage.setItem('favorites',JSON.stringify(favorites))
                    followingBtnRef.current.style.color = "black"
                    followingBtnRef.current.children[1].innerText = "Follow"
                }
                else {

                    let newFavorites = {
                        favoritesSongs: favorites.favoritesSongs,
                        followingArtists: [...favorites.followingArtists, { ...artist, isLiked: true }]


                    }
                    localStorage.setItem('favorites', JSON.stringify(newFavorites))
                    followingBtnRef.current.style.color = "tomato"
                    followingBtnRef.current.children[1].innerText = "Unfollow"
                }
            }
            // else {
            //     let fetchArtists = JSON.parse(localStorage.getItem('favorites'))
            //     let newArtists = fetchArtists.followingArtists.filter(item => {
            //         return item.id != song.id
            //     })
            //     let newFavorites = {
            //         favoritesSongs: newSongs,
            //         followingArtists: []


            //     }
            //     localStorage.setItem('favorites', JSON.stringify(newFavorites))
            //     setRemoveFavorite(pre => !pre)
            // }

        }
    }
    return (
        <>

            {loading ? <Loading></Loading> : <>
                <ArtistInfo>
                    <img src={artist?.picture_medium} alt="" />
                    <Info style={style}>
                        <p className="name">{artist.name}</p>
                        <div className="fans">{artist.nb_fan} Fans</div>
                        {isFollow ?
                            (<button style={{ color: 'tomato' }} ref={followingBtnRef} className="follow_btn" onClick={() => followingAction()}>
                                <FaHeart></FaHeart>
                                <span>Unfollow</span>
                            </button>) :
                            (<button ref={followingBtnRef} className="follow_btn" onClick={() => followingAction()}>
                                <FaHeart></FaHeart>
                                <span>Follow</span>
                            </button>)}
                    </Info>
                </ArtistInfo>
                <h1 style={style}>Albums</h1>
                <Slider {...settings}>
                    {
                        albumOfArtist.map(item => {
                            return <TrendItem album={item}></TrendItem>
                        })
                    }


                </Slider>
                <h1 style={style}>Popular</h1>
                <Playlist>

                    {
                        topTracks.map((item, index) => {
                            return <SongItem song={item} index={index} theme={theme}></SongItem>
                        })
                    }
                </Playlist>
                <h1 style={style}>Fans Also Like</h1>
                <Slider {...settings}>
                    {
                        relatedArtist.map(item => {
                            return <RelatedItem to={`/artist/${item.id}`}>
                                <img src={item.picture_medium} alt="" />
                                <p className="name">{item.name}</p>
                            </RelatedItem>
                        })
                    }
                </Slider>

            </>}


        </>
    )
}

export default Artist
