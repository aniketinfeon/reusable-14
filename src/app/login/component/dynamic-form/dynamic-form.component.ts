import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
 public dynamicForm: FormGroup;
  constructor(private fb:FormBuilder) { 
    this.dynamicForm = fb.group({
      firstname:['', Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$')])],
      emailid:['', Validators.compose([Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])],
      address:this.fb.array([this.addressGroup()])
    })
  }
  addressGroup():FormGroup {
    return this.fb.group({
      country:[''],
      state:[''],
      city:[''],
      contacts:this.fb.array([this.contactsGroup()])
    })
  }
  contactsGroup(): FormGroup {
    return this.fb.group({
      personName: [''],
      personContact: [''], 
    });
  }
  get dynamicValue(){
    return this.dynamicForm.controls
  }
  get addressArray(): FormArray{
    return <FormArray>this.dynamicForm.get('address');
  }

  
  addAddress(): void {
    this.addressArray.push(this.addressGroup());
  }
  removeAddress(index:any){
    this.addressArray.removeAt(index)
  }


  ngOnInit(): void {
  }
  postDyanmicForm(){
    console.log("Nested form = ", this.dynamicForm.value)
  }

}
