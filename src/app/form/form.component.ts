import { Component, OnInit } from '@angular/core';
import Child from 'src/models/Child';
import User from 'src/models/User';
import { ChildService } from 'src/service/child.service';
import { UserService } from 'src/service/user.service';
import * as Excel from 'exceljs/dist/exceljs.min.js'
import * as fs from 'file-saver';

import UserDTO from 'src/models/UserDTO';
 
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(public userService: UserService, public childservice: ChildService) { }
  // User:User=new User(null,null,null,new Date(),null,null,null)
  child: Child = new Child("", new Date(), 0, "");

  parentId: number = 0;

  is:boolean = false;
  save(form) {

    // this.userService.user.BirthDate=new Date();
    console.log('user before add:');
    console.log(this.userService.user)
    this.userService.adduser(this.userService.user).subscribe(succ => {
      console.log('user after add:');
      console.log(succ.id);
      this.parentId = succ.id;
      console.log(this.parentId)

      for (let i = 0; i < this.childservice.Mychildren.length; i++) {
        console.log(this.parentId)
        this.childservice.Mychildren[i].ParentId = this.parentId;
        this.childservice.addChildren(this.childservice.Mychildren[i]).subscribe(succ => { console.log(succ) })
      }
      this.downloading()
    });
      
  }
  downloading(){
    // const workbook = new Workbook();
    let workbook = new Excel.Workbook();
    const worksheet = workbook.addWorksheet('My Sheet');
    worksheet.addRow([ 'FirstName','LastName', 'Birthdate','Tz','Min','HMO','Child Name',  'Child Birthdate','Child  ParentId','ChildTz'])
    worksheet.addRow([ this.userService.user.FName,this.userService.user.LName,this.userService.user.BirthDate,this.userService.user.tz
      ,this.userService.user.min,this.userService.user.HMO,'','','','']);
    this.childservice.Mychildren.forEach((child) => {
      worksheet.addRow(['', '', '','','','', child.Name,  child.BirthDate,child.ParentId,child.ChildTz,]);
    });
    workbook.xlsx.writeBuffer().then((data) => {
      const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, 'data.xlsx');
    });
 
  }

  
 
 
  
 
  addChild() {
    this.is = true

  }
  updatechild() {
    this.childservice.Mychildren.push(this.childservice.child)
    console.log('child ');
    console.log(this.childservice.child)
    this.childservice.child = new Child('', null, null, '')


  }

  ngOnInit(): void {
    // this.userService.getAllUser().subscribe(suc => { console.log(suc) }, error => { alert(" mistake") });
    // this.childservice.getAllChild().subscribe(suc => { console.log(suc) }, error => { alert(" misss") });

  }

}

