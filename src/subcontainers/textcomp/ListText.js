import React from 'react'
import { useState } from 'react'
import arrowListLogo from '../../icons/arrowlist.png'

export default function ListText({head, list, list2, list3, list4, list5, list6, list7, list8, list9, list10, list11, list12, list13, list14, list15, list16, list17, list18, list19, list20, list21, list22, list23}) {

    const [isList, setList] = useState(false)



  return (
    <>
    <div className='faq_list_box' onClick={ () => setList(!isList)}>
     <div className='info_title'>{head}</div>
                    <div className='info_img'><img src={arrowListLogo} /></div>
                    </div> 
                    
                    { isList ? <div className='faq_text_betweenline'>{list} 
                    <br/> {list2} 
                    <br/> {list3} 
                    <br/> {list4}
                    <br/> {list5}
                    <br/> {list6}
                    <br/> {list7}
                    <br/> {list8}
                    <br/> {list9}
                    <br/> {list10}
                    <br/> {list11}
                    <br/> {list12}
                    <br/> {list13}
                    <br/> {list14}
                    <br/> {list15}
                    <br/> {list16}
                    <br/> {list17}
                    <br/> {list18}
                    <br/> {list19}
                    <br/> {list20}
                    <br/> {list21}
                    <br/> {list22}
                    <br/> {list23}
                
                    </div> : <></> }
    </> 
  )
  }
