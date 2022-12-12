import React from 'react'

const Fy = React.forwardRef(({val},ref) => {
  return (
    <div>
        <p>{val}</p>
      <input ref={ref} placeholder="seacr...." />
    </div>
  );
});

export default Fy