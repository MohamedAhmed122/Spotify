import React from 'react'
import SidebarOption from './SidebarOption/SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

import './StyleSidebar.css';
import { useSelector } from 'react-redux';

export default function Sidebar() {
    const { playList } = useSelector(state => state.play)
    return (
        <div className='main_sidebar'>
           <img
            className="sidebar_logo"
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
            alt=""
            />
            <SidebarOption Icon={HomeIcon}  title='Home' />
            <SidebarOption Icon={SearchIcon} title='Search' />
            <SidebarOption Icon={LibraryMusicIcon} title='Your Library' />
            <br />
            <strong>PLAYLIST</strong>
            <hr />
            {
                playList?.items?.map(playList =>(
                    <SidebarOption title={playList.name} />
                ))
            }
           
        </div>
    )
}
