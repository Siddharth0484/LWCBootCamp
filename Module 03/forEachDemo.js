import { LightningElement } from 'lwc';

export default class ForEachDemo extends LightningElement {

    Contacts =[
        {Index: '0' ,id:'C1', Name:'Siddharth Chakraborty',Email:'sidd@gmail.com'},
        {Index: '1' ,id:'C2', Name:'James Bond',Email:'test@gmail.com'},
        {Index: '2' ,id:'C3', Name:'John Abraham',Email:'John@gmail.com'},
        {Index: '3' ,id:'C4', Name:'Steven Jones',Email:'Steven@gmail.com'},

    ];


    columns = [
        {

            label: 'Index',
            fieldName: 'Index',
            type: 'text',
            sortable: false
        },
        {

            label: 'Id',
            fieldName: 'id',
            type: 'text',
            sortable: false
        },
        
        
        {

        label: 'Name',
        fieldName: 'Name',
        type: 'text',
        sortable: false
    },
    {
        label: 'Email',
        fieldName: 'Email',
        type: 'text',
        sortable: false
    }
    
];

}