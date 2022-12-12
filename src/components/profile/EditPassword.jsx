import React from 'react'

const EditPassword = () => {
  return (
    <div className="px-5">
      <div className="p-10 border-b">
        <p className="uppercase">change password</p>
        <p className="capitalize">Your Password</p>
      </div>
      <form className=" space-y-2 my-5 flex flex-col">
        <div className="flex flex-col space-y-3">
          <label htmlFor="password">Password</label>
          <input className="cinput" type="password" id="password" />
        </div>
        <div className="flex flex-col space-y-3 pb-5">
          <label htmlFor="cpassword">Password Confirm</label>
          <input className="cinput" type="password" id="cpassword" />
        </div>
        <input
          type="button"
          className="btn self-end my-5 text-black bg-gray-200 hover:bg-primary hover:text-white"
          value="CONTINUE"
        />
      </form>
    </div>
  );
}

export default EditPassword