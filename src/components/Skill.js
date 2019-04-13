import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Skill() {
    
//    const icon = this.props.icon;

  return (
    <span className='circle'>
    <FontAwesomeIcon className='skill' icon={["fab", "python"]} size='10x'></FontAwesomeIcon>
    </span>
  )
}
