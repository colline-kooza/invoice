"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export default function Register() {
  const baseUrl=process.env.NEXT_PUBLIC_LOCALHOST;

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); 
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function onSubmit(data) {
    try {
      setLoading(true);
      const response = await fetch(`${baseUrl}/api/user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        router.push('/login');
        toast.success('Account created successfully');
        reset();
        setLoading(false);
      } else if (response.status === 409) {
        toast.error('Account already exists');
      }
    } catch (error) {
      reset();
      console.error(error);
      setLoading(false);
      toast.error('Failed to create an account');
    }
  }

  return (
    <section className="flex flex-col items-center pt-6">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-[#020617] dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Create an account
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
            <div>
              <label
                htmlFor="Fullname"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your full name
              </label>
              <input
                {...register('Fullname', {
                  required: 'This field is required',
                  minLength: { value: 5, message: 'Maximum length must be over 5 characters' },
                })}
                type="text"
                name="Fullname"
                id="name"
                className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                  errors.Fullname ? 'border-red-500' : ''
                }`}
                placeholder="Emelia Erickson"
                required
              />
              {errors.Fullname && (
                <span className="text-sm text-red-500">{errors.Fullname.message}</span>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                {...register('email', { required: 'This field is required' })}
                type="email"
                name="email"
                id="email"
                className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                  errors.email ? 'border-red-500' : ''
                }`}
                placeholder="emelia_erickson24@gmail.com"
                required
              />
              {errors.email && (
                <span className="text-sm text-red-500">{errors.email.message}</span>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <div className="relative">
                <input
                  {...register('password', {
                    required: 'This field is required',
                    minLength: { value: 5, message: 'Password must be over 5 characters' },
                  })}
                  type={showPassword ? 'text' : 'password'} 
                  name="password"
                  id="password"
                  placeholder="•••••••"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                    errors.password ? 'border-red-500' : ''
                  }`}
                  required
                />
                <div
                  className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-4 w-4 text-gray-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2 4a2 2 0 012-2h16a2 2 0 012 2"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 10a3 3 0 00.88 2.12M21 10a3 3 0 00-2.12-2.12M3 10l4 4m14-4l-4 4"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-4 w-4 text-gray-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2 4a2 2 0 012-2h16a2 2 0 012 2"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 6L9 17l-5-5"
                      />
                    </svg>
                  )}
                </div>
              </div>
              {errors.password && (
                <span className="text-sm text-red-500">{errors.password.message}</span>
              )}
            </div>
            <div className="flex items-center justify-center">
              {loading ? (
                <button
                  disabled
                  type="button"
                  className="flex items-center justify-center w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="inline w-4 h-4 me-3 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                  Creating...
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Create an account
                </button>
              )}
            </div>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?{' '}
              <a className="font-medium text-blue-600 hover:underline dark:text-blue-500" href="/login">
                Sign in here
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
