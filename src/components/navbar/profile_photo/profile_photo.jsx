import { useEffect, useState } from 'react';
import { useSigninCheck, useUser } from 'reactfire';

import photo from './../../../assets/user (1).svg'

import './profile_photo.css'

export function ProfilePhoto(){
    const {status, data: user} = useSigninCheck();
    const {user_status, data:user_data} = useUser();
    const [photo_url, set_photo_url] = useState();
useEffect(()=>{
    if (status !== 'loading' && user_status !== 'loading'){
        if (user.signedIn){
            set_photo_url(user_data.photoURL)

        }
    }
},[
    status, user, user_data, user_status
])

return <img src={photo_url} alt="" className="profile_photo_signed_in" />
}