import React from 'react'
import { useState } from 'react'
import arrowListLogo from '../../icons/arrowlist.png'

export default function ExpentedText({header, text}) {

    const [isExpanded, setExpanded] = useState(false)


  return (
    <>
    <div className='faq_list_box' onClick={() => setExpanded(!isExpanded)}>
     <div className='info_title'>{header}</div>
                    <div className='info_img'><img src={arrowListLogo} /></div>
                    </div> 
                    
                    { isExpanded ?  <div className='faq_text_betweenline'>{text}</div> : <></> }
    </> 
  )
  }
