import React, { useState, useEffect, useRef, useContext } from 'react'
import { SongItemContainer, Info } from "./SongItemStyle"
import { FaPlay, FaHeart } from "react-icons/fa"
import converTime from '../../core/funtions/convertTime'
import axios from "axios"
import { PausePath, PlayPath } from "../../core/contants"
import { AppContext } from "../../App"
function SongItem({ song, theme, setRemoveFavorite }) {
    const [isPlay, setIsPlay] = useState(false)
    const playRefs = useRef(123)
    const favoriteRef = useRef()
    const style = {
        color: theme == 'dark' ? 'white' : 'black'
    }
    let audio = new Audio(song.preview)
    // console.log(song)
    const { setFavoriteSongs } = useContext(AppContext)
    function playSong() {
        let status = playRefs.current.dataset.status
        console.log(status)
        if (status == "play") {
            //    setIsPlay(false)
            playRefs.current.setAttribute("data-status", "stop")
            audio.pause()
            playRefs.current.children[0].children[0].setAttribute('d', PlayPath)

        }
        else {
            // setIsPlay(true)
            playRefs.current.setAttribute("data-status", "play")
            audio.play()
            playRefs.current.children[0].children[0].setAttribute('d', PausePath)

        }
    }
    useEffect(() => {
        return () => {
            audio.pause()
        }
    })
    function likeAction() {
        let favorites = JSON.parse(localStorage.getItem('favorites'))
        if (favorites == null) {
            favorites = {
                favoritesSongs: [{ ...song, isLiked: true }],
                followingArtists: []

            }
            localStorage.setItem('favorites', JSON.stringify(favorites))
        }
        else {
            let isExist = false
            favorites.favoritesSongs.forEach(item => {
                if (item.id == song.id) {
                    isExist = true
                }
            })
            if (!song.isLiked) {
                if (isExist) {
                    alert("This is is existed in favorites list songs")
                }
                else {

                    let newFavorites = {
                        favoritesSongs: [...favorites.favoritesSongs, { ...song, isLiked: true }],
                        followingArtists: favorites.followingArtists


                    }
                    localStorage.setItem('favorites', JSON.stringify(newFavorites))
                    favoriteRef.current.children[0].style.color="tomato"
                }
            }
            else {
                let fetchSongs = JSON.parse(localStorage.getItem('favorites'))
                let newSongs = fetchSongs.favoritesSongs.filter(item => {
                    return item.id != song.id
                })
                let newFavorites = {
                    favoritesSongs: newSongs,
                    followingArtists: favorites.followingArtists


                }
                localStorage.setItem('favorites', JSON.stringify(newFavorites))
                setRemoveFavorite(pre => !pre)
            }

        }
    }
    console.log()

    return (
        <SongItemContainer theme={theme}>
            <img src={song.album.cover_small} alt="" />
            <Info theme={theme}>
                <p>{song.title}</p>
                <p>{song.artist.name}</p>
            </Info>
            <span style={style} className="duration">{converTime(song.duration)}</span>
            <div onClick={() => playSong()} ref={playRefs} data-status="stop">
                <FaPlay style={style} ></FaPlay>
            </div>
            <div onClick={() => likeAction()} ref={favoriteRef}>
                <FaHeart style={style}  ></FaHeart>
            </div>
        </SongItemContainer>
    )
}

export default SongItem
