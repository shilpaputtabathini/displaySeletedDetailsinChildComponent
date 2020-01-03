import { Pipe, PipeTransform} from '@angular/core';

@Pipe( {
    name: 'searchWithText'
})

export class SearchEmpNamePipe implements PipeTransform{
    transform(dataList: any, searchText: any): any {
        if(!dataList) return [];

        if(!searchText) return dataList;
        

        let searchListItems = dataList.filter(item =>{
            return item.empName.toLowerCase().includes(searchText);
        
        })

        return searchListItems;
    }
}