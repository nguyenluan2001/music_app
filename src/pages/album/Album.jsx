import React, { useState, useEffect,useContext } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"
import { AlbumContainer, AlbumInfo, Playlist } from './AlbumStyle'
import SongItem from './SongItem'
import Loading from '../loading/Loading'
import {AppContext} from "../../App"
function Album() {
    const { id } = useParams()
    const [album, setAlbum] = useState({})
    const [loading, setLoading] = useState(true)
    const {theme}=useContext(AppContext)
    const style={
        color:theme=='dark'?'white':'black'
    }
    useEffect(() => {
        axios.get(`https://api.allorigins.win/raw?url=https://api.deezer.com/album/${id}`)
            .then(res => {
                setAlbum(res.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    console.log(album.genres?.data[0].name)
    console.log(album)
    return (
        <>
            {loading ? <Loading></Loading> : <AlbumContainer>
                <AlbumInfo theme={theme}>
                    <img src={album?.cover_medium} alt="" />
                    <div className="info" style={style}>
                        <p className="name">{album.title}</p>
                        <p className="genres">{album.genres?.data[0].name}</p>
                        <p className="num_songs">{album.tracks?.data.length} Songs . </p>
                        <p className="fans">{album.fans} Fans</p>
                    </div>
                </AlbumInfo>
                <Playlist>
                    <thead className="bg-danger">
                        <th>#</th>
                        <th>Title</th>
                        <th>Duration</th>
                        <th></th>
                    </thead>
                    <tbody>
                        {
                            album.tracks?.data.map((item, index) => {
                                return <SongItem theme={theme} song={item} index={index}></SongItem>
                            })
                        }
                    </tbody>
                </Playlist>
            </AlbumContainer>}
        </>
    )
}

export default Album
