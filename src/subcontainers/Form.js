import warningLogo from '../icons/warning.png'
import galkaLogo from '../icons/whitegalka.png'

function Form() {
  return (
    <div className='form_container'>
        <div className="form_margin">
            <div className="form_aligh">
                <div className="form_title">Оформить полис</div>
                <div className="form_subtitle">Сумма страховой защиты 500 000 руб.</div>
                <form className='form_center'>
                    <div className="form_wrapper">
                        <input className="form_formtext" type='text' placeholder="Название компании или ИНН" />
                    </div>
                    <div className="form_wrapper">
                        <input className="form_formtext" type='num' placeholder="8 (___) ____-__-__"/>
                    </div>
                    <div className="form_wrapper">
                        <input className="form_formtext" type='text' placeholder='Ваш email' />
                    </div>
                    <div className="form_notice">
                        <div><img className='form_icons' src={warningLogo} /></div>
                        <div>Оплачивая страховую премию по договору, Вы соглашаетесь с правилами страхования и договором офертой
                        </div>
                    </div>
                    <div className="form_check">
                        <div><img className='form_icons' src={galkaLogo} /></div>
                        <div>Внимание! На указанную электронную почту будет выслан Ваш полис! Указывайте только тот адрес, которым вы пользуетесь. 
                        </div>
                    </div>
                    <div><input className="form_button" type='button' value={'оформить полис'} /></div>
                </form> 
            </div>
        </div>
    </div>
  );
}

export default Form;


