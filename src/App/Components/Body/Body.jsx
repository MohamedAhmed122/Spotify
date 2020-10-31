import React from 'react'
import './StyleBody.css'
import Header from '../../Layout/Header/Header'
export default function Body({spotify}) {
    return (
        <div className='body'>
            <Header spotify={spotify}/>
        </div>
    )
}
