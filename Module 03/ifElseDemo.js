import { LightningElement, track } from 'lwc';
import TOM_LOGO from '@salesforce/resourceUrl/Tom';
import JERRY_LOGO from '@salesforce/resourceUrl/Jerry';

export default class IfElseDemo extends LightningElement {
     show= true;
    tomLogo = TOM_LOGO;
    jerryLogo =JERRY_LOGO;

    showTomHandler(){
        this.show = false;
    
    }

    showJerryHandler(){
        this.show= true;
       
    }

}