import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  function: string;
  responsibility: string;
  challenge: string

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'User Name', function: 'Customer Facing', responsibility: 'N/A', challenge: 'N/A'},
  {position: 2, name: 'User Name 1', function: 'Customer Facing', responsibility: 'N/A',  challenge: 'N/A'},
  {position: 3, name: 'User Name 2', function: 'Customer Facing', responsibility: 'N/A', challenge: 'N/A'},
  {position: 4, name: 'User Name 3', function: 'Customer Facing', responsibility: 'N/A',  challenge: 'N/A'},
  {position: 5, name: 'User Name 4', function: 'Customer Facing', responsibility: 'N/A',  challenge: 'N/A'},
  {position: 6, name: 'User Name 5', function:'Customer Facing', responsibility: 'N/A'  ,challenge: 'N/A'},
];

@Component({
  selector: 'app-sidecontent-page',
  templateUrl: './sidecontent-page.component.html',
  styleUrls: ['./sidecontent-page.component.css']
})
export class SidecontentPageComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'function', 'responsibility', 'challenge'];
  dataSource = ELEMENT_DATA;


  constructor() { }

  ngOnInit(): void {
  }

}
