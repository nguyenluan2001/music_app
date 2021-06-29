import React from 'react'
import { MenuContainer, MenuItem } from './MenuStyle'
import { Link,NavLink } from "react-router-dom"
function Menu({ theme }) {
  return (
    <MenuContainer>
      <MenuItem theme={theme}>
        <NavLink exact to="/" activeStyle={{color:'yellow'}}>Home</NavLink>
      </MenuItem>
      <MenuItem theme={theme}>
        <NavLink to="/discover" activeStyle={{color:'yellow'}}>Discover</NavLink>
      </MenuItem>
      <MenuItem theme={theme}>
        <NavLink to="/radio" activeStyle={{color:'yellow'}}>Radio</NavLink>
      </MenuItem>
      <MenuItem theme={theme}>
        <NavLink to="/foryou" activeStyle={{color:'yellow'}}>For you</NavLink>
      </MenuItem>
      <MenuItem >
        <h4 className="text-secondary">Library</h4>
      </MenuItem>
      <MenuItem theme={theme}>
        <NavLink to="/songs" activeStyle={{color:'yellow'}}>Songs</NavLink>
      </MenuItem>
      <MenuItem theme={theme}>
        <NavLink to="/artists" activeStyle={{color:'yellow'}}>Artists</NavLink>
      </MenuItem>
    </MenuContainer>
  )
}

export default Menu
