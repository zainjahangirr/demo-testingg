import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stdin',
  templateUrl: './stdin.component.html',
  styleUrls: ['./stdin.component.css']
})
export class StdinComponent{

  StudentName="";
  StudentId="";
  StudentClass="";
  selectedStudent:any=null;
  StudentArray:any[]=[];

  AddStudent(){
    debugger
    var StudentId={name:this.StudentName,id:this.StudentId};
    this.StudentArray.push(StudentId);
    this.StudentName="";

   // alert("User added successful");
  }
  deleteStudent(i:any){
    //if(confirm("Are you sure you want to delete"))
    this.StudentArray.splice(i,1);
    // console.log("User delete request ="+a);
  }

  selectStudent(i:any){
    this.selectedStudent=i;
    this.StudentName=this.StudentArray[i].name;
  }
  updateStudent(){
    this.StudentArray[this.selectedStudent].name= this.StudentName;
  }
}
