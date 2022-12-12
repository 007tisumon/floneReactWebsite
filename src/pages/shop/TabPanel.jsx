import React from 'react'

export function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabPanel = ({children,value,index,...other}) => {
  return (
    <div 
     role='tabpanel'
     hidden={value !== index}
     id={index}
     {...other}
    >
        {
            value=== index && (
                <div className="">
                    {children}
                </div>
            )
        }
    </div>
  )
}

export default TabPanel

