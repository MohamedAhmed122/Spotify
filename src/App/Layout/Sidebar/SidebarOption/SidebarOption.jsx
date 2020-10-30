import React from 'react'
import './StyleSidebarOption.css'

export default function SidebarOption({title, Icon}) {
    return (
        <div className='SidebarOption'>
            {Icon && <Icon  className='sidebar_icon'/>}
           {Icon? <p style={{fontSize: 19}}>{title}</p> : <p className='title'>{title}</p>}
        </div>
    )
}
