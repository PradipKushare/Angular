import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-show',
  templateUrl: './info-show.component.html',
  styleUrls: ['./info-show.component.css']
})
export class InfoShowComponent implements OnInit {
  t:any;
  constructor() { 
   
    var retrievedObject = localStorage.getItem('myData');

    console.log(retrievedObject);

    console.log('retrievedObject: ', JSON.parse(retrievedObject));
 this.t=JSON.parse(retrievedObject);
    

  }

  ngOnInit() {
   
  }

}
