import React from 'react'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { IconButton } from '@material-ui/core';
import './StyleBodyMain.css'

export default function BodyMain() {
    return (
        <div className='body_main'> 
            <div className='body_icon'>
                <IconButton><PlayCircleFilledIcon className='play_icon' /></IconButton>
                <IconButton><FavoriteIcon fontSize='large'/></IconButton>
                <IconButton><MoreHorizIcon /></IconButton>
            </div>
        </div>
    )
}
