import React,{useState,useEffect} from 'react'
import FeaturedArtist from '../../components/featuredArtist/FeaturedArtist'

function FollowingArtists() {
    const [artists,setArtists]=useState([])
    useEffect(() => {
        let fetchLocal=JSON.parse(localStorage.getItem('favorites'))
       setArtists(fetchLocal.followingArtists)
    }, [])
    return (
        <div>
            <FeaturedArtist artists={artists}></FeaturedArtist>
            
        </div>
    )
}

export default FollowingArtists
