import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import './StyleHeader.css'
import { useSelector } from 'react-redux';

export default function Header() {
    const { currentUser } = useSelector(state => state.auth)
    return (
        <div className='header'>
            <div className='header_left'>
                <SearchIcon />
                <input placeholder='Search for Artists, Songs or Podcast' type='text' />
            </div>
            <div className='header_right'>
                <Avatar src={currentUser?.photoURL || null}/>
                <h3>{currentUser?.displayName}</h3>
            </div>
        </div>
    )
}
