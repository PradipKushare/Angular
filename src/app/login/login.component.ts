import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SignupComponent } from '../signup/signup.component';


@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  dialogResult= "";
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(){
    let dialogRef = this.dialog.open(SignupComponent ,{
      width: '600',
      data:'this text'
    });
    dialogRef.afterClosed().subscribe(result =>{
      console.log('dialog closed: ${result}');
      this.dialogResult = result;
    })
  }

  
}
