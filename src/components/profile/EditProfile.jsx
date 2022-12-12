import React from "react";

const EditProfile = () => {
  return (
    <div className=" px-5">
      <div className="py-10 border-b">
        <p className="uppercase">My account information</p>
        <p className="capitalize">Your personal details</p>
      </div>
      <form className=" space-y-2 my-10 flex flex-col ">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div className=" flex-col inline-flex space-y-3 ">
            <label htmlFor="firstName">First Name</label>
            <input className="cinput" type="text" id="firstName" />
          </div>
          <div className="inline-flex flex-col space-y-3 ">
            <label htmlFor="lastName">Last Name</label>
            <input className="cinput" type="text" id="lastName" />
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <label htmlFor="email">Email Address</label>
          <input className="cinput" type="email" id="email" />
        </div>
        <div className="flex flex-col space-y-3">
          <label htmlFor="telephone">Telephone</label>
          <input className="cinput" type="number" id="telephone" />
        </div>
        <div className="flex flex-col space-y-3 pb-5">
          <label htmlFor="fax">Fax</label>
          <input className="cinput" type="number" id="fax" />
        </div>
        <input
          type="button"
          className="btn self-end my-5 text-black bg-gray-200 hover:bg-primary hover:text-white"
          value="CONTINUE"
        />
      </form>
    </div>
  );
};

export default EditProfile;
