import React from 'react'
import Sidebar from '../../Layout/Sidebar/Sidebar'
import Footer from '../../Layout/Footer/Footer'
import Body from '../../Components/Body/Body'
import './StylePlayerPage.css'
export default function PlayerPage( {spotify}) {
    return (
        <div className='player'>
            <div className='player_body'>
                <Sidebar />
                <Body />
            </div>
           <Footer />
        </div>
    )
}
