import React, { useState } from 'react'
import './StyleFooter.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, IconButton, Slider } from '@material-ui/core';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
export default function Footer() {
    const [colorChange, setColorChange] = useState(false)
    return (
        <div className='footer'>
            <div className='footer_right'>
                <img src='https://upload.wikimedia.org/wikipedia/en/f/f4/Cardi_B_-_WAP_%28feat._Megan_Thee_Stallion%29.png' alt='' />
                <div footer_info>
                    <h3>WAP</h3>
                    <p>CardI B</p>
                </div>
               {!colorChange ?<FavoriteBorderIcon onClick={()=>setColorChange(true)}/>: <FavoriteIcon onClick={()=>setColorChange(false)}/>} 
            </div>
            <div className='footer_middle'>
                <IconButton><ShuffleIcon  className='green'/> </IconButton>
                <IconButton><SkipPreviousIcon /> </IconButton>
                <IconButton>
                    <PlayCircleOutlineIcon fontSize='large'/> 
                </IconButton>
                <IconButton><SkipNextIcon /> </IconButton>
                <IconButton><RepeatIcon  className='green'/> </IconButton>
            </div>
            <div className='footer_left'>
                <Grid container spacing={2} alignItems='center' justify='center'>
                    <Grid item>
                        <IconButton><PlaylistAddIcon /> </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton><VolumeDownIcon /></IconButton> 
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
            </Grid>
            </div>
        </div>
    )
}
