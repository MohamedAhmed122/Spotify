const SET_PlayList ='SET_PlayList';

const initialState={
    playList:[],
    isPlaying: false
}

export const setPlayList = song =>({
    type: SET_PlayList,
    payload: song
})

const PlayReducer = (state= initialState, {type, payload}) =>{
    switch(type){
        case SET_PlayList:
            return{
                ...state,
                playList: payload
            }
        default: return state
    }
}
export default PlayReducer;