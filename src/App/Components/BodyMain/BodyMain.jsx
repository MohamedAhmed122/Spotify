import React from 'react'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { IconButton } from '@material-ui/core';
import './StyleBodyMain.css'
import { useSelector } from 'react-redux';
import SongRow from '../SongRow/SongRow';

export default function BodyMain() {
    const { discovers } = useSelector( state => state.discover) 
    console.log(discovers);
    return (
        <div className='body_main'> 
            <div className='body_icon'>
                <IconButton><PlayCircleFilledIcon className='play_icon' /></IconButton>
                <IconButton><FavoriteIcon fontSize='large'/></IconButton>
                <IconButton><MoreHorizIcon /></IconButton>
            </div>
            {
                discovers?.tracks.items.map((item) => (
                <SongRow  track={item.track} />
                ))
            }
            <div  style={{marginBottom:90}}/>
        </div>
    )
}
