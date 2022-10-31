import arrowLogo from '../icons/arrow.png'
import galkaLogo from '../icons/galka.png'

function OneMinute() {
    return (
    <div className="oneminute_container">
      <div className="oneminute_margin">
            <div className="oneminute_title">Получить полис за 1 минуту</div>
            <div className="oneminute_grid">
                <div className="oneminute_grid_box">
                    <div className="oneminute_grid_top">
                        <div className="oneminute_numbers">1<span>/4</span></div>
                        <div><img src={arrowLogo} /></div>
                    </div>
                    <div className="oneminute_grid_bot">Введите название организации или ИНН, телефон, email</div>
                </div>
                <div className="oneminute_grid_box">
                    <div className="oneminute_grid_top">
                        <div className="oneminute_numbers">2<span>/4</span></div>
                        <div><img src={arrowLogo} /></div>
                    </div>
                    <div className="oneminute_grid_bot">Выберите вариант оплаты договора</div>
                </div>
                <div className="oneminute_grid_box">
                    <div className="oneminute_grid_top">
                        <div className="oneminute_numbers">3<span>/4</span></div>
                        <div><img src={arrowLogo} /></div>
                    </div>
                    <div className="oneminute_grid_bot">Оплатите договор онлайн на сайте</div>
                </div>
                <div className="oneminute_grid_box">
                    <div className="oneminute_grid_top_last">
                        <div className="oneminute_numbers_last">4</div>
                        <div><img src={galkaLogo} /></div>
                    </div>
                    <div className="oneminute_grid_bot">Получите полис, правила и памятку по email</div>
                </div>
            </div>
            <div className="text_align">
            <button className='button_oneminute'> Оформить Полис</button>
            </div>
        </div>
      </div>
    );
  }
  
  export default OneMinute;