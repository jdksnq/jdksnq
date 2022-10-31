
import ugoriaLogo from '../img/ugorialogo.png'
import mkbLogo from '../img/mkblogo.png'

function Header() {
    return (
      <div className='header_container'>
      <div className='header_margin'>
        <div className='header'>
          <div className='header_left'>
          <div ><img className='header_img' src={ugoriaLogo} /></div>
          <div > <img className='header_img' src={mkbLogo}/> </div>
          </div>
          <div className='header_right'>
            <div className='main_text'>8 800 200 18 38 </div>
            <div className='submain_text'>Бесплатно по России</div>
          </div>
        </div>
        </div>
        </div>
    );
  }
  
  export default Header;