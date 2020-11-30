import { LightningElement,api,track } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CONTACT_FIRSTNAME from '@salesforce/schema/Contact.FirstName';
import CONTACT_LASTNAME from '@salesforce/schema/Contact.LastName'; 

import CONTACT_TITLE from '@salesforce/schema/Contact.Salutation';



export default class QuickCreateContact extends LightningElement {
   
    @api objectApiName = CONTACT_OBJECT;
    @api recordId;
    @track showData =true;

    detailFields = [CONTACT_FIRSTNAME, CONTACT_LASTNAME,CONTACT_TITLE];
    contactFName = CONTACT_FIRSTNAME;
    contactLName = CONTACT_LASTNAME;
    contactSalutation = CONTACT_TITLE;

       
    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: "Contact created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.showData = false;
        this.dispatchEvent(evt);
     
    }
}