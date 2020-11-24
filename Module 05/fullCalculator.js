import { api, LightningElement } from 'lwc';

export default class FullCalculator extends LightningElement {
    result  = 0;
    input   ='';
    inp     ='';
    tempvar ='';
    
    onClick(event){
        let tempvar = event.target.label;
        this.result=0;
        this.input = this.input + tempvar;   
        console.log('INPUT'+this.input);
        //alert(this.input);
        if(this.input.endsWith('=')) {        
            let tempvar = this.input.substr(0,this.input.length-1);
            try{
                this.result = eval(tempvar);
                this.input = tempvar;
               // alert(this.result);
                console.log('INPUT'+this.result);
            }catch(Exception){
                this.result = "Invalid Expression";
            }
        }
        else if(val == 'CLR'){
            this.result = 0; 
            this.input = '';
        }
    }
      onClickClear(event){
        this.result = 0; 
        this.input = '';

      }
    



    //
}