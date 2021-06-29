import React, { useState, useEffect,useContext } from 'react'
import axios from "axios"
import Trending from '../../components/trending/Trending'
import { MiddleContent } from './HomepageStyle'
import Popular from "../../components/popular/Popular"
import TopSong from '../../components/topSongs/TopSong'
import FeaturedArtist from '../../components/featuredArtist/FeaturedArtist'
import Loading from '../loading/Loading'
import {AppContext} from "../../App"
function Homepage() {
    const {theme}=useContext(AppContext)
    const [trendAlbums, setTrendAlbums] = useState([])
    const [topSongs, setTopSongs] = useState([])
    const [featuredArtist, setFeaturedArtist] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {

        axios.get(`https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/albums`)
            .then(res => {
                setTrendAlbums(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
        axios.get("https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/tracks")
            .then(res => {
                setTopSongs(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
        axios.get("https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/artists")
            .then(res => {
                setFeaturedArtist(res.data.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    // console.log(trendAlbums)
    return (
        <>
            {loading ? <Loading></Loading> : (
                <div>
                    <Trending trendAlbums={trendAlbums}></Trending>
                    <MiddleContent>
                        <Popular theme={theme}></Popular>
                        <TopSong topSongs={topSongs} theme={theme}></TopSong>
                    </MiddleContent>
                    <FeaturedArtist artists={featuredArtist}></FeaturedArtist>
                </div>

            )
        
        }
        </>
    )
}

export default Homepage
