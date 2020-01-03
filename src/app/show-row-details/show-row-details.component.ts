import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-row-details',
  templateUrl: './show-row-details.component.html',
  styleUrls: ['./show-row-details.component.css']
})
export class ShowRowDetailsComponent implements OnInit {

  @Input() selectedDetailsIs: string; 

  constructor() { }

  ngOnInit() {
  }

}
