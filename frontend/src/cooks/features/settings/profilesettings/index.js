import moment from "moment"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../../components/Cards/TitleCard"
import { showNotification } from '../../common/headerSlice'
import InputText from '../../../components/Input/InputText'
import TextAreaInput from '../../../components/Input/TextAreaInput'
import ToogleInput from '../../../components/Input/ToogleInput'

function ProfileSettings(){


    const dispatch = useDispatch()

    // Call API to update profile settings changes
    const updateProfile = () => {
        dispatch(showNotification({message : "پروفایل ویرایش شد", status : 1}))    
    }

    const updateFormValue = ({updateType, value}) => {
        console.log(updateType)
    }

    return(
        <>
            
            <TitleCard title="آپدیت پروفایل" topMargin="mt-2">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputText labelTitle="نام" defaultValue="کاربر یک" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="نام خانوادگی" defaultValue="ادمین" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="ایمیل" defaultValue="user@1.com" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="شماره همراه" defaultValue="093xxxxxxxxxx" updateFormValue={updateFormValue}/>
                    {/* <TextAreaInput labelTitle="About" defaultValue="Doing what I love, part time traveller" updateFormValue={updateFormValue}/> */}
                </div>

                <div className="mt-16"><button className="btn btn-primary float-right" onClick={() => updateProfile()}>ویرایش</button></div>
            </TitleCard>
        </>
    )
}


export default ProfileSettings