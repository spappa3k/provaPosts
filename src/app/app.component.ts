import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup,Validator } from '@angular/forms';
import { GeneralService } from './general.service';
import { dataModel } from './models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'provaPosts';
  dataGeneral:dataModel[]=[]
  
  form:FormGroup;


constructor(private gs:GeneralService, private fb:FormBuilder){
  this.form = this.fb.group({
    title: [''],
    body: ['']
  });
}

ngOnInit(): void {
  this.gs.getData().subscribe(
    (data) => {
this.dataGeneral=data;
console.log("DATA GENERALE:",this.dataGeneral);
    }
  )
}

  onSubmit(){
    const title=this.form.get('title')?.value;
    const body=this.form.get('body')?.value;
    
    const objectToAdd = {
      userId: null,  
      id: null,      
      title: title,
      body: body
    };
    
this.gs.postData(objectToAdd).subscribe
  (res=>{
    console.log(res)
   }, err=>{
    console.log(err)
   } )

   this.gs.getData().subscribe(
    (data) => {
this.dataGeneral=data;
console.log("DATA GENERALE:",this.dataGeneral);
    }
  )
}


  }

