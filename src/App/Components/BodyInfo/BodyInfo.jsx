import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './StyleBodyInfo.css'
import Loader from '../Loader/Loader'
export default function BodyInfo() {
    const { discovers } = useSelector(state => state.discover)
    const { currentUser } = useSelector(state => state.auth)
  console.log(discovers);
   const delay = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time));
};
const fetchData = () => {
    return delay(4000).then(() => {
      return <Loader />
    });
  };
  fetchData();
    return (
        <div className='body_info'>
            <img src={discovers?.images[0].url|| currentUser?.photoURL || img} alt='' />
            <div className='info_text'>
                 <strong>Discover Weekly</strong> 
                 <h2>Playlist</h2>
                 <p>{discovers?.description}</p>
            </div>
        </div>
    )
}
























const img ='https://newjams-images.scdn.co/v2/discover-weekly/p-BoW1yo01L2kINSn5_rz8gLGP5sfNlp6xEfgNiWNztYnHQy7m0pqVUz9Js3QPyhheZIiqRMgTpcYvXSZcFER16ROrr-vEnmu_E7hcBmyQJ3Xume0cqQ2Go1J0wAyXkWDGB7DMf9IjHFpv62y3k5Aeb-O-JzM4VQLk2ZXTEUmb7kRwu2DgJY_GvuCPyE12C7Wc4xIF3oWuFjzDK6njDFEaI7susIU5jBp73_IBL93P__BGLZsbKuvS2QIeCLya3LYFIQw7EgLEABdA791DbH-2JAfCDMncYNAjZt-plBWvrC5VR50D4FP0QxPOXHXczy7-qXDby78PDRoEH_sF7g3z4r86VCHf5aX-lDbrIIo-c=/NjU6NTQ6OTFUMjAtNjAtMA==/default' 