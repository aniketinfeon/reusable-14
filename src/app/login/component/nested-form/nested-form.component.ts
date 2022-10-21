import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.scss']
})
export class NestedFormComponent implements OnInit {
  nestedForm:any;
  eduForm:any
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.nestedForm = this.formBuilder.group({
      firstName:['', Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$')])],
      lastName: ['', Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$')])],
      education: this.formBuilder.array([
        new FormControl(''),
        
      ])
    })
   
  }

  get nestVal(){
    return this.nestedForm.controls
  }
  
  postNestedData(data:any){
    console.log("Nested form = ", data.value)
    this.nestedForm.reset();
  }
  addEducationField(){
    this.nestedForm.get('education').push(new FormControl(''))
  }
}
