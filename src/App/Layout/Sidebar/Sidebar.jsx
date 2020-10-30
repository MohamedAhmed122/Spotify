import React from 'react'
import SidebarOption from './SidebarOption/SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

import './StyleSidebar.css';

export default function Sidebar() {
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
            <SidebarOption title='Home' />
            <SidebarOption  title='Search' />
            <SidebarOption title='Your Library' />
        </div>
    )
}
