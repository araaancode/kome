import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import LandingIntro from './LandingIntro'
import ErrorText from '../../components/Typography/ErrorText'
import InputText from '../../components/Input/InputText'

function Login() {

    const INITIAL_LOGIN_OBJ = {
        password: "",
        emailId: ""
    }

    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [loginObj, setLoginObj] = useState(INITIAL_LOGIN_OBJ)

    const submitForm = (e) => {
        e.preventDefault()
        setErrorMessage("")

        if (loginObj.emailId.trim() === "") return setErrorMessage("شماره همراه ضروری است")
        if (loginObj.password.trim() === "") return setErrorMessage("پسورد ضروری است")
        else {
            setLoading(true)
            // Call API to check user credentials and save token in localstorage
            localStorage.setItem("token", "DumyTokenHere")
            setLoading(false)
            window.location.href = '/owners/welcome'
        }
    }

    const updateFormValue = ({ updateType, value }) => {
        setErrorMessage("")
        setLoginObj({ ...loginObj, [updateType]: value })
    }

    return (
        <div className="min-h-screen bg-base-200 flex items-center text-right">
            <div className="card mx-auto w-full max-w-5xl shadow-xl">
                <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
                <div className=''>
                        <div className="hero min-h-full rounded-l-xl bg-base-200">
                            <div className="hero-content py-12">
                                <div className="max-w-md">
                                    <h1 className="mb-6 text-center font-bold text-lg"> ورود به پنل ملک دارها</h1>
                                    <div className="text-center mt-0 mb-35"><img src="https://media.istockphoto.com/id/909613994/photo/camping.webp?b=1&s=170667a&w=0&k=20&c=QAOWQ_ywegq2PA4sZdLitz6ljL_kW-zw3DBOvvA_uXg=" alt="اقامتگاه" className="w-full rounded rounded-lg inline-block shadow-md"></img></div>
                                </div>
                            </div>
                        </div>
                    </div>                    <div className='py-24 px-10'>
                        <h2 className='text-2xl font-semibold mb-2 text-center'>ورود</h2>
                        <form onSubmit={(e) => submitForm(e)}>

                            <div className="mb-4">

                                <InputText type="emailId" defaultValue={loginObj.emailId} updateType="emailId" containerStyle="mt-4" labelTitle="شماره همراه" updateFormValue={updateFormValue} />

                                <InputText defaultValue={loginObj.password} type="password" updateType="password" containerStyle="mt-4" labelTitle="پسورد" updateFormValue={updateFormValue} />

                            </div>

                            <div className='text-right text-primary'><Link to="/owners/forgot-password"><span className="text-sm  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">پسورد را فراموش کردید؟</span></Link>
                            </div>

                            <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>
                            <button type="submit" className={"btn mt-2 w-full btn-primary" + (loading ? " در حال بازگزاری..." : "")}>ورود</button>

                            <div className='text-center mt-4'>
                            حساب ندارید؟
                                <Link to="/owners/register"><span className="inline-block hover:text-primary hover:underline hover:cursor-pointer transition duration-200 mr-2">  ثبت نام </span></Link>
                               
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login