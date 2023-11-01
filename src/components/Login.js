import { useState } from "react";
import Header from "./Header";

const Login=()=>{

    const [isSignInForm,setIsSignInForm]=useState(true)

    const toggleForm=()=>{
        setIsSignInForm(!isSignInForm)
    }

    return(
        <div>
            <Header/>
            <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
             alt='' />
             </div>
             <div className="w-4/12 absolute p-12 my-36 mx-auto right-0 left-0 bg-black shadow-black text-white bg-opacity-90">
             <form className="relative">
                <h1 className="font-bold text-3xl py-4">{isSignInForm?'Sign In':'Sign Up'}</h1>
                {!isSignInForm && (<input className="border-black p-3 my-4 w-full rounded-md bg-gray-700" type='text' placeholder="Enter Full Name"/>)}
                <input className="border-black p-3 my-4 w-full rounded-md bg-gray-700" type='email' placeholder="Email or phone number"/>
                <input className="border-black p-3 my-4 w-full rounded-md  bg-gray-700" type='password' placeholder="Password"/>
                <button className="p-3 my-8 bg-red-700 w-full rounded-md cursor-pointer">{isSignInForm?'Sign In':'Sign Up'}</button>
                <p onClick={toggleForm} className="py-4 cursor-pointer">{isSignInForm?'New to Netflix? Sign Up Now':'Already registered, Sign In Now'}</p>
             </form>
             </div>
        </div>
    )
}

export default Login; 