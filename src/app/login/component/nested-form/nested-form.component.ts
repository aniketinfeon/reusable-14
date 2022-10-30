import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.scss']
})
export class NestedFormComponent implements OnInit {
  nestedForm:any;
  eduForm:any;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.nestedForm = this.formBuilder.group({
      firstName:['', Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$')])],
      lastName: ['', Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$')])],
      education: this.formBuilder.array([
        this.formBuilder.group({
          itemId:[1],
          street:[''],
          city:[''],
          state:[''],
        })
        
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
  get items(){
    return this.nestedForm.get('education') as FormArray; //it will return entire items as form array
  }
  addNewRow(){
    const itemlen = this.items.length
    const newItem = this.formBuilder.group({
      itemId:[itemlen+1],
      street:[''],
      city:[''],
      state:['']
    })
    this.items.push(newItem)
  }
  deleteRow(delId:any){
    this.items.removeAt(delId)
  }
}
