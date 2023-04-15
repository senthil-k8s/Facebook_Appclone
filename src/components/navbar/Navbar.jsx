import {useContext} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import "./navbar.scss"
import { DarkModeContext } from '../../context/darkModeContext';

export default function Navbar() {
  const {dispatch} = useContext(DarkModeContext);
  return (
    <div className="navbar">

      <div className="wrapper">

        <div className="search">
          <input type="text" placeholder="Search...."/>
          <SearchIcon />
        </div>

        <div className="items">

          <div className="item">
            <LanguageIcon className="icon" />
            English
          </div>

          <div className="item">
            <DarkModeOutlinedIcon className="icon"  onClick={()=> dispatch({type:"TOGGLE"})}/>
          </div>

          <div className="item">
            <FullscreenExitIcon className="icon" />
          </div>
          
          <div className="item">
            <NotificationsOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>

          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>

          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img src="https://play-lh.googleusercontent.com/7Ac5TgaL15Ra4bvFVHJKCdJp4qvnL4djZj5bKc6RN-MZjzrvkeHbJytek0NPTSdZcp8" className='avatar' />
          </div>
        </div>
      </div>
    </div>
  )

}
