import Perevozka from "../subcontainers/Perevozka";
import Protection from "../subcontainers/Protection";
import ProtectionInfo from '../subcontainers/ProtectionInfo'
import OneMinute from '../subcontainers/OneMinute'
import Form from '../subcontainers/Form'
import Docs from '../subcontainers/Docs'
import FAQ from '../subcontainers/FAQ'
import InsuranceCase from "../subcontainers/InsuranceCase";

function MainInfo() {
    return (
        <div>
        <Perevozka/>
        <Protection/>
        <ProtectionInfo/>
        <OneMinute/>
        <Form/>
        <Docs/>
        <FAQ/>
        <InsuranceCase/>
        </div>       
    );
  }
  
  export default MainInfo;