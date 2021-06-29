import React, { useRef } from 'react'
import { FaPlay, FaHeart } from "react-icons/fa"
import converTime from '../../core/funtions/convertTime'
import {PausePath,PlayPath} from "../../core/contants"
function SongItem({ song, index ,theme}) {
    const playRef = useRef()
    const iconRef=useRef()
    let audio = new Audio(song.preview)
    const style={
        color:theme=='dark'?'white':'black'
    }
    function playSong() {
        let status = playRef.current.dataset.status
        if (status == "stop") {
            audio.play()
            playRef.current.setAttribute("data-status", "play")
            playRef.current.children[0].children[0].setAttribute('d',PausePath)
        }
        else {
            audio.pause()
            playRef.current.setAttribute("data-status", "stop")
            playRef.current.children[0].children[0].setAttribute('d',PlayPath)

        }
    }
    return (
        <tr style={style}>
            <td>{index + 1}</td>
            <td>{song.title}</td>
            <td>{converTime(song.duration)}</td>
            <td>
                <span ref={playRef} onClick={() => playSong()} data-status="stop">
                    <FaPlay className="mr-3" ></FaPlay>
                </span>
                <span>
                    <FaHeart></FaHeart>
                </span>
            </td>
        </tr>
    )
}

export default SongItem
