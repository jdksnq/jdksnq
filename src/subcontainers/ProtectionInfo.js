import galkaLogo from '../icons/galka.png'

function ProtectionInfo() {
    return (
       <div className="protectioninfo_container">
        <div className='protectioninfo_margin'>
        <div className='protectioninfo_title'>От чего защищает продукт</div>
        <div className="protectioninfo_grid">
            <div className="protectioninfo_box">
                <div className='protectioninfo_center'><img src={galkaLogo}/></div>
                <div className='protectioninfo_text'>Гибель груза в ходе
его перевозки</div>
            </div>
            <div className="protectioninfo_box">
                <div className='protectioninfo_center'><img src={galkaLogo}/></div>
                <div className='protectioninfo_text'>Повреждение груза
в результате столкновения
средств транспорта</div>
            </div>
            <div className="protectioninfo_box">
                <div className='protectioninfo_center'><img src={galkaLogo}/></div>
                <div className='protectioninfo_text'>Причинение вреда имуществу <br/>Третьих лиц</div>
            </div>
        </div>
       </div>
       </div>
    );
  }
  
  export default ProtectionInfo;