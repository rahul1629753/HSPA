import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  constructor() { }

  properties: any[] = [
    {
  id:0,
  Name:"homeland",
  type:"building",
  price:12000,
    },
    {
      id:1,
      Name:"whitehouse",
      type:"building",
      price:12000,
    },
    {
      id:2,
      Name:"Erica",
      type:"villa",
      price:12000,
    },
    {
      id:3,
      Name:"homeland2",
      type:"building",
      price:12000,
    },
    {
      id:4,
      Name:"homeland3",
      type:"building",
      price:12000,
    },
    {
      id:5,
      Name:"homeland6",
      type:"building",
      price:12000,
    },
    {
      id:6,
      Name:"homeland7",
      type:"building",
      price:12000,
    },
    {
      id:7,
      Name:"homeland8",
      type:"building",
      price:12000,
    }
  ];

  ngOnInit(): void {
  }

}
