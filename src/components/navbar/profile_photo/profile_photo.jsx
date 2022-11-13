import { useSigninCheck } from 'reactfire';

import profile_picture from './../../../assets/user (1).svg'

import './profile_photo.css'

export function ProfilePhoto(){
    const {status, data: user} = useSigninCheck();
    const default_tempelate = <img src={profile_picture} alt="" className="profile_photo" />
    if (status === 'loading') {
    return (
        default_tempelate
    )
    }
   return user.signedIn? <img src={user.user.photoURL} alt="" className="profile_photo_signed_in" /> : default_tempelate
}