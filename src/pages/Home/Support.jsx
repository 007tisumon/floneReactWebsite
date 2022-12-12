import React from 'react'
import s1 from '../../assets/support-1.png'
import s2 from '../../assets/support-2.png'
import s3 from '../../assets/support-3.png'
const Support = () => {
    const support =[
        {img:s1,title:'Free Shipping', des:'Lorem ipsum dolor sit amet consectetu adipisicing elit sed'},
        {img:s2,title:'Support 24/7', des:'Lorem ipsum dolor sit amet consectetu adipisicing elit sed'},
        {img:s3,title:'Money Return', des:'Lorem ipsum dolor sit amet consectetu adipisicing elit sed'},
    ]
  return (
    <div className='grid md:grid-cols-3 grid-cols-1 md:divide-x-2 divide-gray-900 '>
        {
            support.map(item=>(
                <div key={item.title} className="text-center fc  flex-col mx-10 md:my-20 my-10  pl-14 space-y-3 ">
                    <img src={item.img} alt={item.title} />
                    <p className='text-xl text-gray-700'>{item.title}</p>
                    <p className=' text-gray-500'>{item.des}</p>
                </div>
        
            ))
        }
    </div>
  )
}

export default Support