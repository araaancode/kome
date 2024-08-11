import React, { useState, useEffect } from 'react';
import { RiEyeLine, RiEyeOffLine, RiLoader2Fill } from '@remixicon/react';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Spinner from "../components/Spinner"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LoginPage = () => {

  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [code, setCode] = useState('');

  const navigate = useNavigate()

  // arrow functions
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const login = (e) => {
    e.preventDefault()

    if (phone && password) {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      axios.post('/api/users/auth/login', { phone, password }, config).then((data) => {
        console.log(data.data.user);
        axios.post('/api/users/auth/send-otp', { phone }, config).then((otpData) => {

          toast.info('!کد یکبار مصرف ارسال شده را در زیر وارد کنید', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })

          setIsLogin(true)
        })
      }).catch((errMsg) => {
        toast.error(errMsg, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })


    } else {
      toast.error('!!لطفا همه فیلدها را وارد کنید', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  const verify = (e) => {
    e.preventDefault()
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    if (code) {
      axios.post('/api/users/auth/verify-otp', { phone, code }, config).then((data) => {
        const token = data.data.token
        localStorage.setItem("userToken", token)
        navigate('/')
      }).catch((errMsg) => {
        toast.error(errMsg, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
    } else {
      toast.error('!!لطفا کد تایید را وارد کنید', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }


  return (
    <div dir="rtl" className="flex justify-center items-center h-screen">
      {isLogin ? (
        <div className="w-full max-w-md p-8 space-y-4 bg-white rounded border">
          <h2 className="text-xl font-bold text-gray-700">تایید کد</h2>
          <p className='text-gray-500 mt-1 mb-4'>کد ارسال شده را در زیر وارد کنید. </p>
          <form className="space-y-4" onSubmit={verify}>
            <div>
              <label className="block mb-2 mt-6 text-sm font-medium text-gray-700">
                کد تایید
              </label>
              <input style={{ borderRadius: '6px' }}
                type="text"
                name='code'
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded-sm p-2 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded mb-10 p-2 text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {loading ? <Spinner /> : 'تایید کد'}
            </button>
          </form>
        </div>
      ) : (<div className="w-full max-w-md p-8 space-y-4 bg-white rounded border">
        <h2 className="text-center text-xl font-bold text-gray-700">ورود</h2>
        <p className='text-center text-gray-500 mt-1 mb-4'>برای ورود شماره موبایل خود را وارد کنید. </p>
        <form className="space-y-4" onSubmit={login}>
          <div>
            <label className="block mb-2 mt-6 text-sm font-medium text-gray-700">
              شماره تلفن
            </label>
            <input style={{ borderRadius: '6px' }}
              type="text"
              name='phone'
              onChange={(e) => setPhone(e.target.value)}
              className="w-full text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded-sm p-2 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="password">
              رمز عبور
            </label>
            <div className="relative mb-4">
              <input style={{ borderRadius: '6px' }}
                type={showPassword ? 'text' : 'password'}
                id="password"
                name='phone'
                onChange={(e) => setPassword(e.target.value)}
                className="w-full focus text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded-sm p-2 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                placeholder="رمز عبور"
              />
              <div
                className="absolute inset-y-0 left-0 pl-3 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <RiEyeOffLine className="h-5 w-5 text-gray-500" />
                ) : (
                  <RiEyeLine className="h-5 w-5 text-gray-500" />
                )}
              </div>


            </div>
          </div>
          <button
            type="submit"
            className="w-full rounded mb-10 p-2 text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2"
          >
            {loading ? <RiLoader2Fill /> : 'ورود'}
          </button>
          <p className='text-sm text-gray-800'>حساب ندارید؟ <a href='/register' className='hover:text-blue-800 hover:cursor-pointer'>ثبت نام</a></p>
        </form>
      </div >)}



      <ToastContainer />
    </div >
  );
};

export default LoginPage;