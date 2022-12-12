import React from 'react'

const EditAddress = () => {
  return (
    <div className="px-5 text-end">
      <div className="py-10 border-b text-start">
        <p className="uppercase">address book entries</p>
      </div>
      <div className=" border mt-5 p-5 text-center space-y-2 font-medium">
        <p>Jhon doe</p>
        <p>paul Park</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>NYC</p>
        <p>New York</p>
        <button className="py-2 px-3 bg-red uppercase text-white hover:bg-primary mr-2">
          Edit
        </button>
        <button className="py-2 px-3 uppercase text-white bg-black hover:bg-primary">
          Delete
        </button>
      </div>
      <button className='btn  my-5 text-black bg-gray-200 hover:bg-primary hover:text-white"'>
        Continue
      </button>
    </div>
  );
}

export default EditAddress