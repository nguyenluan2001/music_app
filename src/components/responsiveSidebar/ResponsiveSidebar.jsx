import React, { useContext } from 'react'
import { ResponsiveSidebarContainer, Menu, MenuItem,WrapMenu } from "./ResponsiveSidebarStyle"
import { AppContext } from "../../App"
import { FaTimes } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import {useHistory} from "react-router-dom"
function ResponsiveSidebar() {
    const { showSidebar, setShowSidebar,theme } = useContext(AppContext)
    let history=useHistory()
    const style={
        color:theme=='dark'?'white':"black"
      }

    function redirectPage(e,path)
    {
        e.preventDefault()
        history.push(path)
        setShowSidebar(false)
      
    }
    return (
        <>
            <ResponsiveSidebarContainer showSidebar={showSidebar} theme={theme}>
                <div className="text-white close_menu" >
                    <FaTimes style={style} onClick={() => setShowSidebar(false)}></FaTimes>
                </div>
                <WrapMenu>
                    <Menu>
                        <MenuItem theme={theme} >
                            <NavLink exact to="/" activeStyle={{ color: 'yellow' }} onClick={(e)=>redirectPage(e,"/")}>Home</NavLink>
                        </MenuItem>
                        <MenuItem theme={theme}>
                            <NavLink to="/discover" activeStyle={{ color: 'yellow' }} onClick={(e)=>redirectPage(e,"/discover")}>Discover</NavLink>
                        </MenuItem>
                        <MenuItem theme={theme}>
                            <NavLink to="/radio" activeStyle={{ color: 'yellow' }} onClick={(e)=>redirectPage(e,"/radio")}>Radio</NavLink>
                        </MenuItem>
                        <MenuItem theme={theme}>
                            <NavLink to="/foryou" activeStyle={{ color: 'yellow' }} onClick={(e)=>redirectPage(e,"/foryou")}>For you</NavLink>
                        </MenuItem>
                        <MenuItem theme={theme}>
                            <h4 className="text-secondary">Library</h4>
                        </MenuItem>
                        <MenuItem theme={theme}>
                            <NavLink to="/songs" activeStyle={{ color: 'yellow' }} onClick={(e)=>redirectPage(e,"/songs")}>Songs</NavLink>
                        </MenuItem>
                        <MenuItem theme={theme}>
                            <NavLink to="/artists" activeStyle={{ color: 'yellow' }} onClick={(e)=>redirectPage(e,"/artists")}>Artists</NavLink>
                        </MenuItem>

                    </Menu>
                </WrapMenu>

            </ResponsiveSidebarContainer>
        </>

    )
}

export default ResponsiveSidebar
