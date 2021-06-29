import React, { useState, useEffect, useRef, useContext } from 'react'
import { TopActionContainer } from "./TopActionStyle"
import { InputGroup, FormControl, Form } from "react-bootstrap"
import { FaSearch } from "react-icons/fa"
import axios from 'axios'
import { useHistory } from "react-router-dom"
import { AppContext } from "../../App"
function TopAction({ theme, setTheme }) {
    const [artists, setArtists] = useState([])
    const [albums, setAlbums] = useState([])
    const [songs, setSongs] = useState([])
    const [keyword, setKeyWord] = useState("")
    const searchRef = useRef()
    let history = useHistory()
    const { showSidebar } = useContext(AppContext)
    useEffect(() => {
        axios.get(`https://api.allorigins.win/raw?url=https://api.deezer.com/search/artist?q=${keyword}`)
            .then(res => {
                setArtists(res.data.data)
                // console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [keyword])
    function switchTheme() {
        if (theme == 'dark') {
            setTheme('light')
        }
        else {
            setTheme('dark')
        }
    }
    function search(e) {
        // setKeyWord(e.target.value)
        e.preventDefault()
        // console.log(searchRef.current.value)
        // alert(111)
        history.push(`/search?q=${searchRef.current.value}`)
        // history.push('/')
    }
    return (
        <TopActionContainer theme={theme}>
            <InputGroup className="mb-3 w-25">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1" >
                        <FaSearch></FaSearch>
                    </InputGroup.Text>
                </InputGroup.Prepend>
                <Form onSubmit={(e) => search(e)}>
                    <FormControl
                        placeholder="Search"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        name="keyword"
                        ref={searchRef}
                    />
                </Form>
            </InputGroup>
            <InputGroup className="mb-3 search_responsive">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1" >
                        <FaSearch></FaSearch>
                    </InputGroup.Text>
                </InputGroup.Prepend>
                <Form onSubmit={(e) => search(e)}>
                    <FormControl
                        placeholder="Search"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        name="keyword"
                        ref={searchRef}
                    />
                </Form>
            </InputGroup>
            <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" id="customSwitch1" onChange={() => switchTheme()} />
                <label class="custom-control-label" for="customSwitch1"></label>
            </div>
        </TopActionContainer>
    )
}

export default TopAction
