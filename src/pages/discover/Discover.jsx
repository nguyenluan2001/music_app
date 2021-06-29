import React, { useState, useEffect,useContext } from 'react'
import axios from "axios"
import { DiscoverContainer, GenreItem } from "./DiscoverStyle"
import {AppContext} from "../../App"
function Discover() {
    const [genres, setGenres] = useState([])
    const {theme}=useContext(AppContext)
    const style={
        color:theme=="dark"?"white":"black"
    }
    useEffect(() => {
        axios.get('https://api.allorigins.win/raw?url=https://maocmusic.netlify.app/api/genre')
            .then(res => {
                let newGenres = res.data.data.filter(item => {
                    let check_img = item.picture_big.split("/")[5]
                    return check_img != ""
                })
                setGenres(newGenres)
                console.log(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <>
        <h1 style={style}>Genres</h1>
            <DiscoverContainer>
                {
                    genres.map(item => {
                        return <GenreItem to={`/genre/${item.id}`} background={item.picture_medium}>
                            <span>{item.name}</span>
                        </GenreItem>
                    })
                }
            </DiscoverContainer>
        </>
    )
}

export default Discover
