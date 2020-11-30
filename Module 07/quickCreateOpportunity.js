import { LightningElement,api,track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
import OPPORTUNITY_NAME from '@salesforce/schema/Opportunity.Name';
import OPP_CLOSEDATE from '@salesforce/schema/Opportunity.CloseDate';
import OPP_STAGE from '@salesforce/schema/Opportunity.StageName';


export default class QuickCreateOpportunity extends LightningElement {
   
   @api objectApiName = OPPORTUNITY_OBJECT;
    @api recordId;
    @track showData =true;

    
    detailFields = [OPPORTUNITY_NAME,OPP_CLOSEDATE,OPP_STAGE];
   
       
    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: "Opportunity created",
            message: "Record ID: " + event.detail.id,
            variant: "succes"
        });
        this.showData = false;
        this.dispatchEvent(evt);
     
    }
}