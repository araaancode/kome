import moment from "moment"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../../components/Cards/TitleCard"
import { showNotification } from '../../common/headerSlice'
import InputText from '../../../components/Input/InputText'
import TextAreaInput from '../../../components/Input/TextAreaInput'
import ToogleInput from '../../../components/Input/ToogleInput'

function OwnersSettings(){


    const dispatch = useDispatch()

    // Call API to update profile settings changes
    const updateProfile = () => {
        dispatch(showNotification({message : "اطلاعات ملک دار ویرایش شد", status : 1}))    
    }

    const updateFormValue = ({updateType, value}) => {
        console.log(updateType)
    }

    return(
        <>
            
            <TitleCard title="ثبت اطلاعات ملک دار" topMargin="mt-2">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputText labelTitle="نام ملک" placeholder="نام ملک" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="استان" placeholder="استان" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="شهر" placeholder="شهر" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="تلفن" placeholder="تلفن" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="نام صاحب ملک" placeholder="نام صاحب ملک" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="شماره همراه" placeholder="شماره همراه" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="متراژ ملک" placeholder="متراژ ملک" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="درباره ملک" placeholder="درباره ملک" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="سال ساخت ملک" placeholder="سال ساخت ملک" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="قوانین ثبت ویلا" placeholder="قوانین ثبت ویلا" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="ظرفیت ملک" placeholder="ظرفیت ملک" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="تاریخ اجاره(تاریخ های آزاد)" placeholder="تاریخ اجاره(تاریخ های آزاد)" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="تصاویر ملک" placeholder="تصاویر ملک" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="محدویت ساعت ورود و خروج ملک" placeholder="محدویت ساعت ورود و خروج ملک" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="ملک(ویلا-آپارتمان-باغ)" placeholder="ملک(ویلا-آپارتمان-باغ)" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="نوع کف ملک(فرش-سرامیک-سنگ و ...)" placeholder="نوع کف ملک(فرش-سرامیک-سنگ و ...)" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="نوع ملک(نوساز-قدیمی یا بازسازی شده)" placeholder="نوع ملک(نوساز-قدیمی یا بازسازی شده)" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="امکانات ملک(آسانسور-نمازخانه-سرویس بهداشتی فرنگی- اینترنت و ...)" placeholder="امکانات ملک(آسانسور-نمازخانه-سرویس بهداشتی فرنگی- اینترنت و ...)" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="سیستم سرمایش(کولر آبی-کولر گازی-اسپیلت- پنکه سقفی-پنکه معمولی)" placeholder="سیستم سرمایش(کولر آبی-کولر گازی-اسپیلت- پنکه سقفی-پنکه معمولی)" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="تعداد پارکینگ" placeholder="تعداد پارکینگ" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="طبقه" placeholder="طبقه" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="افزودن ملک" placeholder="افزودن ملک" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="بارگذاری عکس(قبض تلفن یا برق یا گاز)" placeholder="بارگذاری عکس(قبض تلفن یا برق یا گاز)" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="انتخاب سانس(فروش اقامت شروع شده-در حال فروش)" placeholder="انتخاب سانس(فروش اقامت شروع شده-در حال فروش)" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="قیمت اجاره-مبلغ ایام عادی-پیک" placeholder="قیمت اجاره-مبلغ ایام عادی-پیک" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="شماره ملک" placeholder="شماره ملک" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="روزهای آزاد برای رزرو" placeholder="روزهای آزاد برای رزرو" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="حساب بانکی" placeholder="حساب بانکی" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="شماره ملک" placeholder="شماره ملک" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="بارگزاری مدارک ملک(کارت ملی یا شناسنامه)" placeholder="بارگزاری مدارک ملک(کارت ملی یا شناسنامه)" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="تخفیف" placeholder="تخفیف" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="قوانین اقامت" placeholder="قوانین اقامت" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="بحث مالی" placeholder="بحث مالی" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="تجهیزات آشپزخانه" placeholder="تجهیزات آشپزخانه" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="امکانات سرگرمی" placeholder="امکانات سرگرمی" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="قوانین رزرو" placeholder="قوانین رزرو" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="امکانات رفاهی" placeholder="امکانات رفاهی" updateFormValue={updateFormValue}/>

                </div>

                <div className="mt-16"><button className="btn btn-primary float-right" onClick={() => updateProfile()}>ثبت اطلاعات ملک دار</button></div>
            </TitleCard>
        </>
    )
}


export default OwnersSettings