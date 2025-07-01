import React from 'react' 
import {FaSave} from "react-icons/fa6"

const ActionLable = ({type}) => {
  const types = {
    save: <FaSave/>
  }
  return (
    <div>
       <span>{type}</span> 
       {
        types[types]
       }
    </div>
  )
}

export default ActionLable