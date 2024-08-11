import moment from "moment"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../../components/Cards/TitleCard"
import { showNotification } from '../../common/headerSlice'
import InputText from '../../../components/Input/InputText'
import TextAreaInput from '../../../components/Input/TextAreaInput'
import ToogleInput from '../../../components/Input/ToogleInput'

function DriverSettings(){


    const dispatch = useDispatch()

    // Call API to update profile settings changes
    const updateProfile = () => {
        dispatch(showNotification({message : "اطلاعات راننده ویرایش شد", status : 1}))    
    }

    const updateFormValue = ({updateType, value}) => {
        console.log(updateType)
    }

    return(
        <>
            
            <TitleCard title="ثبت اطلاعات راننده" topMargin="mt-2">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputText labelTitle="رنگ وسیله" placeholder="رنگ وسیله" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="نوع وسیله" placeholder="نوع وسیله" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="پلاک" placeholder="پلاک" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="نام صاحب خودرو" placeholder="نام صاحب خودرو" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="تعداد ظرفیت" placeholder="تعداد ظرفیت" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="مدل ماشین" placeholder="مدل ماشین" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="گرمایش" placeholder="گرمایش" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="سرمایش" placeholder="سرمایش" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="هزینه" placeholder="هزینه" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="تاریخ" placeholder="تاریخ" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="مشخص کردن مبدا و مقصد" placeholder="مشخص کردن مبدا و مقصد" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="تاریخ سرویس دادن" placeholder="تاریخ سرویس دادن" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="ساعت حرکت" placeholder="ساعت حرکت" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="ساعت رسیدن به مقصد" placeholder="ساعت رسیدن به مقصد" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="نام شرکت ارائه دهنده سرویس" placeholder="نام شرکت ارائه دهنده سرویس" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="برای بحث مالی" placeholder="برای بحث مالی" updateFormValue={updateFormValue}/>

                </div>

                <div className="mt-16"><button className="btn btn-primary float-right" onClick={() => updateProfile()}>ثبت اطلاعات راننده</button></div>
            </TitleCard>
        </>
    )
}


export default DriverSettings