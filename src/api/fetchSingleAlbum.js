import axios from "axios"
export default function fetchSingleAlbum(id)
{
    let album="asdasdasds"
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`)
    .then(res=>{
        album=res.data
    })
    .catch(err=>{
        return err;
    })
    return album

}