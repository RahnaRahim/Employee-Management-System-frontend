import React, { createContext, useState } from 'react'
export const registerContext=createContext()
function Contextshare({children}) {
    const[registerdata,setRegisterdata]=useState("")
  
  return (
    <>
      <registerContext.Provider value={{registerdata,setRegisterdata}}>
     
        {children}
       
      </registerContext.Provider>
     
     
    </>
  )
}

export default Contextshare
