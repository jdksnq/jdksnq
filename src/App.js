import './App.css';
import './AppMobile.css'
import Header from './containers/Header';
import MainInfo from './containers/MainInfo';
import Footer from './containers/Footer';

function App() {
  return (
    <div className='page_container'>
      <Header/>
      <MainInfo/>
      <Footer/>
    </div>
  );
}

export default App;