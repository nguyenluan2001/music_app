import React from 'react'
import SongItem from './SongItem'
function TopSong({topSongs,theme}) {
    console.log(topSongs)
    const style={
        color:theme=='dark'?'white':'black'
    }
    return (
        <div>
            <h1 style={style}>Top Songs</h1>
            {
                topSongs.slice(0,6).map(item=>{
                    return <SongItem theme={theme} song={item}></SongItem>
                })
                // topSongs.map(item=>{
                //     return <SongItem theme={theme} song={item}></SongItem>
                // })
            }
            
        </div>
    )
}

export default TopSong
