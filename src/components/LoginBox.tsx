"use client";
import React from "react";
export default function LoginBox() {
  function submitForm() {
    return (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      let loginId = data.get("loginId")?.toString();
      const password = data.get("password")?.toString();
      const expectedLoginId =
        process.env.NEXT_PUBLIC_MAIN_USERNAME?.toLowerCase();
      const expectedPassword =
        process.env.NEXT_PUBLIC_MAIN_PASSWORD?.toLowerCase();

      if (loginId !== expectedLoginId || password !== expectedPassword) {
        alert("Login Information is incorrect!! Please try again.");
        return;
      }
      window.location.href = "/dashboard";
    };
  }
  return (
    // The login box on https://ri-cumberland.myfollett.com/aspen/logon.do
    <div className='bg-aspen-gray opacity-95 rounded-md shadow-md w-80 mx-auto mt-20 text-black'>
      <div className='flex justify-center'>
        <h1 className='text-md p-4 font-bold'>Cumberland School Department</h1>
      </div>
      <div className='flex justify-center'>
        {/* Small line that fades out on the ends */}
        <div className='w-1/2 h-1 bg-gray-400 rounded-full'></div>
      </div>
      <div className='flex justify-center'>
        <form
          name='form1'
          onSubmit={submitForm()}
          className='flex flex-col p-2'
        >
          <label className='text-md font-bold'>Login ID</label>
          <input
            className='border-2 border-gray-400'
            type='text'
            name='loginId'
          />
          <label className='text-lg'>Password</label>
          <input
            className='border-2 border-gray-400 rounded-md'
            type='password'
            name='password'
          />
          <div className='flex justify-center'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
