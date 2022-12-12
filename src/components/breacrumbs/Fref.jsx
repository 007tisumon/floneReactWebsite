import React from 'react'
import Fy from './Fy'

const Fref = () => {
    const inputRef = React.createRef()
    const handleClick=()=>{
        inputRef.current.focus()
    }
  return (
    <div>
    <Fy ref={inputRef} val='hello' />
    <button onClick={handleClick} className='border px-3 py-2'>Click focus</button>
    </div>
  )
}

export default Fref