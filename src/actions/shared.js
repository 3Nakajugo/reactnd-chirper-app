import { getInitialData } from "../utils/api";
import { receiveTweets } from "./tweets";
import { receiveUsers } from "./users";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID ='tylermcginnis'

export function handleGetInitialData(){
    return (dispatch)=>{
        dispatch(showLoading())
        return getInitialData()
        .then(({tweets, users})=>{ 
            dispatch(receiveTweets(tweets))
            dispatch(receiveUsers(users))
            dispatch(setAuthedUser(AUTHED_ID))
            dispatch(hideLoading())
        })

    }
}