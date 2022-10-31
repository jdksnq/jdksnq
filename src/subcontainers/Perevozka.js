import perevozkaPng from '../img/perevozka.png'

function Perevozka() {
    return (
    <div className='perevozka_margin'>
    <div className="padding_perevozka">
       <div className="grid_container">
        <div className='perevozka_padding_left'>
            <div className='title'>Уникальное предложение для
частных грузоперевозчиков и небольших автопарков</div>
            <div className='subtitle'>Страхование гражданской ответственности грузоперевозчика</div>
            <div className='text'>Ответственность за повреждение груза в процессе осуществления им транспортно-экспедиционной деятельности лежит на перевозчике и/или экспедиторе.
Страхование позволяет избежать финансовых потерь, сохранить репутацию и не зависеть от внешних обстоятельств, всегда выполнять свои обязательства перед клиентами заказчиками перевозок и иметь конкурентное преимущество перед партнерами и клиентами, получить стабильные загрузки от крупных заказчиков как в России, так и за рубежом.</div>
            <button className='button'> Оформить Полис </button>
        </div>
        <div className='perevozka_png'><img src={perevozkaPng} /></div>
       </div>
    </div>
    </div>
    );
  }
  
  export default Perevozka;