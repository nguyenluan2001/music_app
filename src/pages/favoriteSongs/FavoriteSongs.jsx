import React, { useState, useEffect,useContext } from 'react'
import TopSong from '../../components/topSongs/TopSong'
import SongItem from '../../components/topSongs/SongItem'
import {AppContext} from "../../App"
function FavoriteSongs() {
    const [songs, setSongs] = useState([])
    const [removeFavorite,setRemoveFavorite]=useState(false)
    const {theme}=useContext(AppContext)
    const style={
        color:theme=="dark"?"white":"black"
    }

    useEffect(() => {
        let fetchSongs = JSON.parse(localStorage.getItem('favorites'))??{}
        setSongs(fetchSongs.favoritesSongs)
    }, [removeFavorite])
    return (
        <div>
            <h1 style={style}>Your Songs</h1>
            {
            songs.length!=0? songs.map(item=>{
                return <SongItem song={item} theme={theme} setRemoveFavorite={setRemoveFavorite}></SongItem>
            }):<p style={style}>Not Songs Yet</p>
               
            }
            
        </div>
    )
}

export default FavoriteSongs
