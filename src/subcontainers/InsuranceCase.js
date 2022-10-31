import doPhone from '../icons/do1.png'
import doMail from '../icons/do2.png'
import doWrite from '../icons/do3.png'
import doCoins from '../icons/do4.png'


function InsuranceCase() {
    return (
      <div className='case_container'>
        <div className="case_margin">
            <div className="case_block">
                <div className="case_title">Что делать при страховом случае</div>
                <div className="case_flex">
                    <div className="case_box">
                        <div className="case_icon"><img src={doPhone} /></div>
                        <div className="case_text">
                            <div>Позвонить по телефону</div>
                            <a href="tel:88003330901">8 800 333 09 01</a>
                        </div>
                    </div>
                    <div className="case_box">
                        <div className="case_icon"><img src={doMail} /></div>
                        <div className="case_text">
                            <div>Направить <br/> документы на</div>
                            <a href="mailto:uuusio@absolutins.ru">uuusio@absolutins.ru</a>
                        </div>
                    </div>
                    <div className="case_box">
                        <div className="case_icon"><img src={doWrite} /></div>
                        <div  className="case_text"> Указать реквизиты <br/> для получения выплаты</div>
                    </div>
                    <div className="case_box">
                        <div className="case_icon"><img src={doCoins} /></div>
                        <div className="case_text">Получить компенсацию <br/> от страховой компании</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
  
  export default InsuranceCase;