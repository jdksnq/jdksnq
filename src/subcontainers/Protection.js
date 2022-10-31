import phonePng from '../icons/iphonefull.png'
import protectionFirst from '../icons/protect1.png'
import protectionSecond from '../icons/protect2.png'
import protectionThird from '../icons/protect3.png'
import protectionForth from '../icons/protect4.png'



function Protection() {
    return (
    <div className='protection_margin'>
    <div className='padding_protection'>
        <div className='grid_protection'>
            <div className='grid_protection_left'><img className='img_iphone' src={phonePng} /></div>
            <div className='grid_protection_right'>
                <div className='title_protection'>Комплексная защита грузоперевозок</div>
                <div className='subtitle_protection'>Стоимость cтрахования: 
                <br/> - 2 250 рублей при страховой сумме 500 000 рублей; 
                <br/> - 4 500 рублей при страховой сумме 1 000 000 рублей; 
                <br/> - индивидуальный расчет.
                </div>
                <button className='button_specialist'>Связаться с специалистом</button>
                <div className='protection_flex'> 
                    <div className='protection_flex_list'>
                        <div><img className='img_protection' src={protectionFirst}/></div>
                        <div className='text_protection'>Страхование действует 1 год</div>
                    </div>
                    <div className='protection_flex_list'>
                        <div><img className='img_protection' src={protectionSecond}/></div>
                        <div className='text_protection'>Страхование ответственности перед третьими
лицами на перевозку разнообразных новых грузов, упакованных в оригинальную упаковку производителя, и не запрещенных для транспортировки законодательством РФ</div>
                    </div>
                    <div className='protection_flex_list'>
                        <div><img className='img_protection' src={protectionThird}/></div>
                        <div className='text_protection'>Страхование действует на случаи утраты, гибели и/или повреждения груза, вследствие:
<br/> - дорожно-транспортных происшествий и опасностей при транспортировке;
<br/> - огня или взрыва;
<br/> - опрокидывания транспортных средств;
<br/> - провала мостов.
</div>
                    </div>
                    <div className='protection_flex_list'>
                        <div><img className='img_protection' src={protectionForth}/></div>
                        <div className='text_protection'>Страховая премия оплачивается единовременно в день подписания
настоящего Полиса страхования</div>
                    </div>
                </div>
                <button className='button_protection'> Оформить Полис </button>
            </div>
        </div>
    </div>
    </div>
    );
  }
  
  export default Protection;