import moment from "moment"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../../components/Cards/TitleCard"
import { showNotification } from '../../common/headerSlice'
import InputText from '../../../components/Input/InputText'
import TextAreaInput from '../../../components/Input/TextAreaInput'
import ToogleInput from '../../../components/Input/ToogleInput'

function CookSettings(){


    const dispatch = useDispatch()

    // Call API to update profile settings changes
    const updateProfile = () => {
        dispatch(showNotification({message : "اطلاعات غذادار ویرایش شد", status : 1}))    
    }

    const updateFormValue = ({updateType, value}) => {
        console.log(updateType)
    }

    return(
        <>
            
            <TitleCard title="ثبت اطلاعات غذادار" topMargin="mt-2">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputText labelTitle="تلفن ثابت" placeholder="تلفن ثابت" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="استان-شهر" placeholder="استان-شهر" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="آدرس" placeholder="آدرس" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="توانایی پخت چند پرس غذا در روز" placeholder="توانایی پخت چند پرس غذا در روز" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="چه غذاهایی می توانید درست کنید" placeholder="چه غذاهایی می توانید درست کنید" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="تعداد" placeholder="تعداد" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="تاریخ روزهایی که می توانید غذا درست کنید" placeholder="تاریخ روزهایی که می توانید غذا درست کنید" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="ساعت هایی روزهایی که می توانید غذا درست کنید" placeholder="تاریخ روزهایی که می توانید غذا درست کنید" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="نام سرآشپز" placeholder="نام سرآشپز" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="نام آشپز" placeholder="نام سرآشپز" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="عکس غذا" placeholder="عکس غذا" updateFormValue={updateFormValue}/>

                </div>

                <div className="mt-16"><button className="btn btn-primary float-right" onClick={() => updateProfile()}>ثبت اطلاعات غذادار</button></div>
            </TitleCard>
        </>
    )
}


export default CookSettings