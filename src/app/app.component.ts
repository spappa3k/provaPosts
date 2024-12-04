import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validator } from '@angular/forms';
import { GeneralService } from './general.service';
import { dataModel } from './models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent /*implements OnInit*/{
  title = 'provaPosts';
  dataGeneral:dataModel[]=[]

constructor(private gs:GeneralService){}
/*
ngOnInit(): void {
  this.gs.getData().subscribe(
    (data) => {
this.dataGeneral=data;
console.log("DATA GENERALE:",this.dataGeneral);
    }
  )
}

  onSubmit(){
console.log("lool");
  }*/
}
