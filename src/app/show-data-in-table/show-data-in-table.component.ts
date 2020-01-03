import { Component, OnInit } from '@angular/core';
import { GetDetailsServices } from 'src/services/getDataFromUrl';

@Component({
  selector: 'app-show-data-in-table',
  templateUrl: './show-data-in-table.component.html',
  styleUrls: ['./show-data-in-table.component.css']
})
export class ShowDataInTableComponent implements OnInit {

  getdataIs : any;
  private selectedDetailsIs: any;
  dataService: any;
  constructor(private getDetailsServices: GetDetailsServices) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.getDetailsServices.getDetails().subscribe(res => {
      this.getdataIs = res;
      console.log(JSON.stringify(res));
    })
  }

  //getRowData
  discoverClicked(data){
    // do the thing
        this.selectedDetailsIs = data;
}
}
