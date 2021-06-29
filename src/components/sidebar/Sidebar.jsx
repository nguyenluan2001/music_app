import React,{useContext} from 'react'
import {SidebarContainer} from "./SidebarStyle"
import Menu from "./Menu"
import {AppContext} from "../../App"
function Sidebar() {
    const {theme,showSidebar}=useContext(AppContext)
    return (
        <SidebarContainer theme={theme} showSidebar={showSidebar}>
            <Menu theme={theme}></Menu>
        </SidebarContainer>
        
    )
}

export default Sidebar
