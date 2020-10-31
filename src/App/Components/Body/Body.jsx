import React from 'react'
import './StyleBody.css'
import Header from '../../Layout/Header/Header'
import BodyInfo from '../BodyInfo/BodyInfo'
export default function Body({spotify}) {
    return (
        <div className='body'>
            <Header spotify={spotify}/>
            <BodyInfo />
        </div>
    )
}
