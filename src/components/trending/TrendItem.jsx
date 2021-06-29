import React,{useContext} from 'react'
import {TrendItemContainer} from "./TrendingStyle"
import {AppContext} from "../../App"
function TrendItem({album}) {
    const {theme}=useContext(AppContext)
    return (
        <TrendItemContainer to={`/album/${album.id}`} theme={theme}>
            <img src={album.cover_medium} alt="" />
            <p className="name">{album.title}</p>
        </TrendItemContainer>
    )
}

export default TrendItem
