import { LightningElement,track,api } from 'lwc';

export default class ParentDisplay extends LightningElement {

    @track childs = [{childTitle:'Child One', status:'DeSelect'},
                 {childTitle:'Child Two', status:'DeSelect'}, 
                    {childTitle:'Child Three', status:'DeSelect'}];

    handleChildEvent(event)
    {
        let child = event.detail.childTitle;
        this.childs.forEach(element => {
            
            if(child == element.childTitle)
            {
                element.status = event.detail.status;
                
            }
        });
    }
   
}
