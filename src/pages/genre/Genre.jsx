import axios from 'axios'
import React,{useState,useEffect} from 'react'
import {useParams} from "react-router-dom"
import FeaturedArtist from '../../components/featuredArtist/FeaturedArtist'
import Loading from '../loading/Loading'
function Genre() {
    const {id}=useParams()
    const [artists,setArtists]=useState([])
    useEffect(()=>{
        axios.get(`https://api.allorigins.win/raw?url=https://api.deezer.com/genre/${id}/artists`)
            .then(res=>{
                setArtists(res.data.data)
            })
    },[])
    console.log(id)
    return (
        <div>
           {
               artists.length!=0? <FeaturedArtist artists={artists}></FeaturedArtist>:<Loading></Loading>
           }
        </div>
    )
}

export default Genre
