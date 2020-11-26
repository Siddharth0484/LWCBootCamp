import { LightningElement,track,api } from 'lwc';

export default class Child extends LightningElement {

    @api childTitle;
    @track
    buttonName = 'Select';
    buttonVariant = 'success';

    handleOnClick(event)
    {
        this.buttonName = event.target.label == 'Select' ? 'Deselect' : 'Select';
        this.buttonVariant = event.target.label == 'Select' ? 'destructive' : 'success';
              let childEvnt = new CustomEvent('notifyevent', {
            bubbles: true,
            composed: true,
            detail : {childTitle: this.childTitle, status: event.target.label}
            
        });

        this.dispatchEvent(childEvnt);
    }
    @api
    parentReset(event){
        alert('inside child reset')
        this.buttonName = 'Select';
        this.buttonVariant = 'success';
        }
        
    
}