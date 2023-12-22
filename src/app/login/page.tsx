'use client'
import { loginUser } from "@/redux/features/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
type Inputs = {
    email: string
    password: string
  }

const Login = () => {

    const dispatch = useAppDispatch();
    const {user, isLoading} = useAppSelector(state => state.user)
    const router = useRouter();
      const {
          register,
          handleSubmit,
          formState: { errors },
        } = useForm<Inputs>()
  
      const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data)
          const {email, password} = data;
          await dispatch(loginUser({email, password}))
      }
  
      useEffect(() => {
        if(user.email && !isLoading){
          toast.success('Login Successful')
          setTimeout(() => {
            router.push('/')            
        }, 1000);
        }
      }, [user.email, isLoading])

  return (
    <section className=" font-poppins">
    <div className="max-w-6xl px-0 mx-auto lg:px-6">
        <div className="flex flex-col items-center h-full md:flex-row">
            <div
                className="flex items-center justify-center h-screen max-w-full px-0 md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 lg:px-16 xl:px-12">
                <div className="z-10 w-full p-10 bg-gray-100 h-100">
                    <h2 className="text-xl font-bold leading-tight mb-7 md:text-3xl text-black">
                        Login to your account</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                        <div>
                            <label htmlFor="" className="block text-black">Email:</label>
                            <input type="email" {...register("email", { required: true })}
                                className="w-full px-4 py-3 mt-2 bg-white rounded-lg  border border-gray-800"
                                name="email" placeholder="Enter your email"/>
                        </div>
                        {errors.email && <span className='text-red-600 mt-1'>This field is required</span>}
                        <div className="mt-5">
                            <div>
                                <label htmlFor="" className="text-black">Password:</label>
                                <div className="relative flex items-center mt-2">
                                    <input type="password" {...register("password", { required: true })}
                                        className="w-full px-4 py-3 bg-white rounded-lg border border-gray-800"
                                        name="password" placeholder="Enter password"/>
                                </div>
                            </div>
                        </div>
                        {errors.email && <span className='text-red-600 mt-1'>This field is required</span>}
                        <button
                            className="w-full px-4 py-3 mt-6 font-semibold text-gray-100 bg-blue-500 rounded-l hover:bg-blue-600 "
                            type="submit">LOGIN</button>
                        <p className="mt-6 text-black"> Need an account?
                            <Link href="/signup" className="font-semibold text-blue-500 hover:text-blue-700"> Create an account
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
</section>
  );
};

export default Login;