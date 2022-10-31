import internetLogo from '../icons/internet.png'
import phoneLogo from '../icons/phonemini.png'
import vkLogo from '../icons/vk.png'
import ytLogo from '../icons/yt.png'

function Footer() {
    return (
        <div className="footer_container">
            <div className="footer_margin">
                <div className="footer_block">
                    <div className="footer_title">Мы всегда на связи</div>
                    <div className="footer_flex">
                        <div className="footer_box">
                            <div> <img src={internetLogo}/> </div>
                            <div className='footer_text'>
                                <div> Наша почта </div>
                                <div className='footer_img' >
                                    <a className='footer_url' href="mailto:mkb-corporate@ugsk.ru" > mkb-corporate@ugsk.ru </a>
                                </div>
                            </div>
                        </div>
                        <div className="footer_box">
                            <div> <img src={phoneLogo}/> </div>
                            <div className='footer_text'>
                                <div>Бесплатно по России</div>
                                <div className='footer_img'> 8-800-100-82-00 </div>
                            </div>
                        </div>
                        <div className="footer_box">
                            <div> <img src={phoneLogo}/> </div>
                            <div className='footer_text'>
                                <div>По Москве</div>
                                <div className='footer_img'> 8 (495) 970-10-70 </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer_border'></div>
                <div className='footer_border_bot'></div>
            </div>
        </div>
    );
  }
  
  export default Footer;