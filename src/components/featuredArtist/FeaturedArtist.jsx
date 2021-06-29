import React,{useContext} from 'react'
import { FeaturedContainer, ListFeatureds } from "./FeaturedArtistStyle"
import FeaturedItem from './FeaturedItem'
import {AppContext} from "../../App"
function FeaturedArtist({ artists }) {
    console.log(artists)
    const {theme}=useContext(AppContext)
    const style={
        color:theme=='dark'?'white':'black'
    }
    return (
        <FeaturedContainer>
            <h1 style={style}>Featured Artists</h1>
            <ListFeatureds>
                {
                    artists.map(item => {
                        return <FeaturedItem artist={item}></FeaturedItem>
                    })
                }

            </ListFeatureds>
        </FeaturedContainer>
    )
}

export default FeaturedArtist
