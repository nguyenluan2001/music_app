import './App.css';
import { AppContainer, MainContent } from "./AppStyle";
import Sidebar from './components/sidebar/Sidebar';
import TopAction from './components/topAction/TopAction';
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import Homepage from './pages/homepage/Homepage';
import Album from './pages/album/Album';
import Artist from './pages/artist/Artist';
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";
import React, { useState, useEffect } from "react"
import Search from "./pages/search/Search"
import Discover from './pages/discover/Discover';
import Genre from './pages/genre/Genre';
import FavoriteSongs from './pages/favoriteSongs/FavoriteSongs';
import FollowingArtists from './pages/followingArtists/FollowingArtists';
import { FaAlignJustify } from "react-icons/fa"
import ResponsiveSidebar from './components/responsiveSidebar/ResponsiveSidebar';
export const AppContext = React.createContext()
const themes = ['dark', 'light']
function App() {
  const [transition, setTransition] = useState(true)
  const [theme, setTheme] = useState(themes[0])
  const [favoriteSongs, setFavoriteSongs] = useState([])
  const [showSidebar,setShowSidebar]=useState(false)
  const style={
    color:theme=='dark'?'white':"black"
  }
  return (
    <AppContext.Provider
      value={{
        theme: theme,
        favoriteSongs: favoriteSongs,
        setFavoriteSongs: setFavoriteSongs,
        showSidebar:showSidebar,
        setShowSidebar:setShowSidebar
      }}>
      <AppContainer>
        <Router>
          <Sidebar theme={theme}></Sidebar>
          <ResponsiveSidebar></ResponsiveSidebar>
          <MainContent theme={theme}>
            <div className="text-white open_sidebar" >
            <FaAlignJustify style={style} onClick={()=>setShowSidebar(true)}></FaAlignJustify>

            </div>
            <TopAction theme={theme} setTheme={setTheme}></TopAction>
            <Route render={({ location }) => (
              <TransitionGroup>
                <CSSTransition key={location.key} classNames="fade" timeout={300}>
                  <Switch location={location}>
                    <Route path="/" exact>
                      <Homepage theme={theme}></Homepage>
                    </Route>
                    <Route path="/album/:id">
                      <Album></Album>
                    </Route>
                    <Route path="/artist/:id">
                      <Artist></Artist>
                    </Route>
                    <Route path="/search">
                      <Search></Search>
                    </Route>
                    <Route path="/discover">
                      <Discover></Discover>
                    </Route>
                    <Route path="/genre/:id">
                      <Genre></Genre>
                    </Route>
                    <Route path="/songs">
                      <FavoriteSongs></FavoriteSongs>
                    </Route>
                    <Route path="/artists">
                      <FollowingArtists></FollowingArtists>
                    </Route>
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}></Route>

          </MainContent>
        </Router>

      </AppContainer>
    </AppContext.Provider>

  );
}

export default App;
