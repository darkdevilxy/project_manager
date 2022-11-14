import { useSigninCheck } from 'reactfire';
import { useState, useEffect } from 'react';

import photo from './../../../assets/user (1).svg'

import './profile_photo.css'

export function ProfilePhoto(){
    const {status, data: user} = useSigninCheck();
<<<<<<< HEAD
    const [photoURL, setPhotoURL] = useState(photo);

    useEffect(() => {
        if(status === 'success'){
            if(user.signedIn){
                setPhotoURL(user.user.photoURL);
            }
        }
    }, [status, user])


    return <img src={photoURL} alt="" className="profile_photo_signed_in" />
=======
    const default_tempelate = <img src={profile_picture} alt="" className="profile_photo" />
    if (status === 'loading') {
    return (
        default_tempelate
    )
    }
   return user.signedIn? <img src={user.user.photoURL} alt="" className="profile_photo_signed_in" /> : default_tempelate
>>>>>>> refs/remotes/origin/master
}