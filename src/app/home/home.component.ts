import { Component, OnInit } from '@angular/core';
import { InfoShowComponent } from '../info-show/info-show.component';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public MyArrayType : Array<{id: number, name: string, age: number, contact: number, designation: string, image:string}>;

  constructor(public dialog: MatDialog) { 

    this.MyArrayType = [
      {id:1,name: 'Rahul Shinde', age:25, contact:9975227706,designation:'CEO Spiter Tech',image:'../../assets/images/rahul.jpg' },
      {id:2,name: 'Ramdas Saykar', age:23, contact:7770079927,designation:'Owner Spiter Tech',image:'../../assets/images/ramdas.JPG' },
      {id:3,name: 'Pradip Kushare', age:22, contact:8055576553,designation:'Project Manager',image:'../../assets/images/pradip.jpg' },
      {id:4,name: 'Chetan Jeughale', age:26, contact:9767473800,designation:'Senior Developer',image:'../../assets/images/pranav.JPG' },
      {id:5,name: 'Krishna Kushare', age:28, contact:8308439120,designation:'Senior Developer',image:'../../assets/images/shivaji.JPG' },
    ];
    
  }
   pradip="anjhgj";

  dialogResult = "";

   getDimensionsByFind(id){
    return this.MyArrayType.find(x => x.id === id);
  }

  showForEdit(id){
    var test = this.getDimensionsByFind(id);
    console.dir(test);  
    localStorage.setItem('myData', JSON.stringify(test));

    let dialogRef = this.dialog.open(InfoShowComponent,{
      width:'500',
      data:{Sid:test.id,Sname: test.name,Sage:test.age,Scontact:test.contact,Sdesignation:test.designation,Simage:test.image } 
      
    });
  
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.dialogResult = result;
    });
  }

  ngOnInit() {
  }

}
