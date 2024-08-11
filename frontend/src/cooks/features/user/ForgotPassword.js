import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import LandingIntro from './LandingIntro'
import ErrorText from '../../components/Typography/ErrorText'
import InputText from '../../components/Input/InputText'
import CheckCircleIcon from '@heroicons/react/24/solid/CheckCircleIcon'

function ForgotPassword() {

    const INITIAL_USER_OBJ = {
        emailId: ""
    }

    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [linkSent, setLinkSent] = useState(false)
    const [userObj, setUserObj] = useState(INITIAL_USER_OBJ)

    const submitForm = (e) => {
        e.preventDefault()
        setErrorMessage("")

        if (userObj.emailId.trim() === "") return setErrorMessage("Email Id is required! (use any value)")
        else {
            setLoading(true)
            // Call API to send password reset link
            setLoading(false)
            setLinkSent(true)
        }
    }

    const updateFormValue = ({ updateType, value }) => {
        setErrorMessage("")
        setUserObj({ ...userObj, [updateType]: value })
    }

    return (
        <div className="min-h-screen bg-base-200 flex items-center">
            <div className="card mx-auto w-full max-w-5xl  shadow-xl">
                <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
                    <div className=''>
                        <div className="hero min-h-full rounded-l-xl bg-base-200">
                            <div className="hero-content py-12">
                                <div className="max-w-md">
                                    <h1 className="mb-10 text-center font-bold text-lg">فراموشی پسورد</h1>
                                    <div className="text-center mt-0 mb-35"><img src="https://www.allrecipes.com/thmb/oIBbjuG9rjXDmr5IdFPLM97DOhs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/257499-ghormeh-sabzi-persian-herb-stew-DDMFS-beauty-4x3-BG-2923-0a3327d626ca4b848bd1d1ebd7ca331d.jpg" alt="اقامتگاه" className="w-full rounded rounded-lg inline-block shadow-md"></img></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='py-24 px-10'>
                        <h2 className='text-2xl font-semibold mb-2 text-center'>فراموشی پسورد</h2>

                        {
                            linkSent &&
                            <>
                                <div className='text-center mt-8'><CheckCircleIcon className='inline-block w-32 text-success' /></div>
                                <p className='my-4 text-xl font-bold text-center'>فرستادن لینک</p>
                                <p className='mt-4 mb-8 font-semibold text-center'>ایمیل خود را برای تغییر پسورد بررسی کنید</p>
                                <div className='text-center mt-4'><Link to="/admins/login"><button className="btn btn-block btn-primary ">ورود</button></Link></div>

                            </>
                        }

                        {
                            !linkSent &&
                            <>
                                <p className='my-8 font-semibold text-center'>لینک تغییر پسورد به ایمیل شما فرستاده خواهد شد</p>
                                <form onSubmit={(e) => submitForm(e)}>

                                    <div className="mb-4">

                                        <InputText type="emailId" defaultValue={userObj.emailId} updateType="emailId" containerStyle="mt-4" labelTitle="ایمیل" updateFormValue={updateFormValue} />


                                    </div>

                                    <ErrorText styleClass="mt-12">{errorMessage}</ErrorText>
                                    <button type="submit" className={"btn mt-2 w-full btn-primary" + (loading ? " loading" : "")}>فرستادن لینک تغییر</button>

                                    <div className='text-center mt-4'>حساب ندارید؟ <Link to="/cooks/register"><button className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200"> ثبت نام </button></Link></div>
                                </form>
                            </>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword