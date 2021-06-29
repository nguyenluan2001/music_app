import React from 'react'
import { FeaturedItemContainer } from "./FeaturedArtistStyle"
function FeaturedItem({ artist }) {
    // console.log(artist)
    return (
        <FeaturedItemContainer to={`/artist/${artist.id}`} background_img={artist.picture_medium}>
            <div className="name">
                {artist.name}
            </div>
        </FeaturedItemContainer>
    )
}

export default FeaturedItem
