import React from 'react'
import {Link,useLocation} from 'react-router-dom'


const Breadcrumbs = ({link1,link1url,link2,link2url}) => {
    const {pathname} =useLocation()
    const isList = pathname.split('/').filter(x=>x)
   
  return (
    <div className='h-20 bg-gray-200 space-x-3 mb-10'>
        <ul className='flex fc h-full'>
            <li className='pr-2 text-gray-600 uppercase font-medium'><Link to="/">Home</Link></li>
            {isList.map((name,i)=>{
                const routeTo = `/${isList.slice(0,i -1).join('/')}`
                const isLast = i === isList.length - 1
                return isLast ?(<p key={i} className=' uppercase font-medium '>/ {name}</p>):(<Link key={i} className='text-gray-400' to={routeTo}>{name}</Link>)
            })}
        </ul>
    </div>
  )
}

export default Breadcrumbs