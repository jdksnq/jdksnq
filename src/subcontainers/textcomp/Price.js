import React from 'react'
import { useState } from 'react'

export default function PriceText({header, text}) {

    const [isPrice, setPrice] = useState(false)


  return (
    <>
    <div className='price_list_box' onClick={() => setPrice(!isPrice)}>
     <div className='info_title'>{header}</div>
                    <div className='info_img'></div>
                    </div> 
                    
                    { isPrice ?  <div className='faq_text_betweenline'>{text}</div> : <></> }
    </> 
  )
  }