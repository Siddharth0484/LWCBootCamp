
import { LightningElement,api,track, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import ACCOUNT_NUMBER from '@salesforce/schema/Account.AccountNumber';
import PHONE from '@salesforce/schema/Account.Phone';
import TYPE from '@salesforce/schema/Account.Type';
import WEBSITE from '@salesforce/schema/Account.Website';


export default class QuickAccountCreate extends LightningElement {

    @api objectApiName = ACCOUNT_OBJECT;
    @api recordId;
    @track showData =true;

        detailFields =[NAME_FIELD];
    
        fields = [NAME_FIELD,ACCOUNT_NUMBER,PHONE,TYPE,WEBSITE];

        
    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: "Account created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.showData = false;
        this.dispatchEvent(evt);
     
    }
    
   
 
}