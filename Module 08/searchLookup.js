import { LightningElement, wire, track } from 'lwc';
import findAccounts from "@salesforce/apex/AccountController.findAccount";
import getContactList from '@salesforce/apex/AccountController.getContactList';

const columns = [
    { label: 'Id', fieldName: 'Id'},
    { label: 'Name', fieldName: 'Name'},
];
export default class SearchLookup extends LightningElement {

    searchKey = 'Search Account';
    @track contacts;   
    chosenAccount = '';
    @wire(findAccounts, { searchKey: '$searchKey' })
    accounts;
    selectedAccount = '';
    columns = columns;

    handleChange(event) {
        const searchKey = event.target.value;
        
    }
    getContactForAccounts(event) {
        this.chosenAccount = event.target.dataset.label;
        this.selectedAccount = event.target.dataset.name;
        this.handleLoad();
    }


    handleLoad() {
        getContactList({
            accountId: this.chosenAccount
        })
            .then(result => {
                this.contacts = result;
            })
            .catch(error => {
                this.error = error;
            });
    }
    resetSearch() {
        try {
            console.log('in')
            this.searchKey = '  ';
            this.chosenAccount = '';
            this.chosenAccountName = '';
            this.contacts = undefined;
            this.accounts = undefined;
            console.log('out')
        } catch (e) {
            console.log(e);
        }

    }
}