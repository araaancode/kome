import React, { useState, useEffect } from 'react';
import { RiEyeLine, RiEyeOffLine } from '@remixicon/react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useHistory, useNavigationType } from 'react-router-dom'
import { registerUser } from "../features/auth/authActions"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {
  const [customError, setCustomError] = useState(null)

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  )


  const dispatch = useDispatch()
  const navigate = useNavigate()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    // redirect authenticated user to profile screen
    if (userInfo) navigate('/profile')
    // redirect user to login page if registration was successful
    // if (success) {
    //   toast.success('!با موفقیت ثبت نام شدید', {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //   });
    //   navigate('/login')
    // }

    // if (error) {
    //   toast.error(`error`, {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //   });
    // }

  }, [navigate, userInfo, success])


  const register = (e) => {
    e.preventDefault()

    if (phone && password) {
      dispatch(registerUser({ phone, password })).then((result) => {
        if (result.type === 'auth/register/rejected') {
          toast.error(`${result.payload}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

        } else if (result.type === 'auth/register/fulfilled') {
          toast.success('!با موفقیت ثبت نام شدید', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })


          setTimeout(() => {
            navigate('/login')
          }, 5000);

        }
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


  return (


    <div dir="rtl" className="flex justify-center items-center h-screen" onSubmit={register}>

      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded border">
        <h2 className="text-2xl font-bold text-center text-gray-700">ثبت نام</h2>
        <p style={{ textAlign: 'center' }} className='text-center text-gray-500 mt-1 mb-4'>در زیر می توانید ثبت نام کنید</p>
        <form className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="phone">
              شماره تلفن
            </label>
            <input style={{ borderRadius: '6px' }}
              type="text"
              id="phone"
              name='phone'
              className="w-full px-3 py-2 rounded border border-gray-300 shadow-sm focus:outline-none focus:border-2 focus:border-blue-200"
              placeholder="شماره تلفن"
              onChange={(e) => setPhone(e.target.value)}
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
                name="password"
                className="w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:border-2 focus:border-blue-200"
                placeholder="رمز عبور"
                onChange={(e) => setPassword(e.target.value)}
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
            className="w-full rounded mb-10 px-4 py-2 font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            ثبت نام
          </button>
          <p className='text-sm text-gray-800'>حساب دارید؟ <a href='/login' className='hover:text-blue-800 hover:cursor-pointer'>ورود</a></p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RegisterPage;