import { LightningElement } from 'lwc';

export default class GrandParentDisplay extends LightningElement {

    numberOfChild = 0;
    
    handleChildEvent(event)
    {
        //event.detail.status === "Select" ? this.numberOfChild += 1 : this.numberOfChild -= 1;

        if(event.detail.status == 'Select')
        {
            this.numberOfChild = this.numberOfChild + 1;
        }
        else{
            this.numberOfChild = this.numberOfChild - 1;
        }
    }

    handleReset(event){
        this.numberOfChild = 0;
        this.template.querySelector('c-child').parentReset();
    }
    
}