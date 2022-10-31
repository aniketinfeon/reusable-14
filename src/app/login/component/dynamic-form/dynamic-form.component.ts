import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
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
      firstname:[''],
      emailid:[''],
      address:this.fb.array([this.addressGroup()])
    })
  }

  private addressGroup():FormGroup {
    return this.fb.group({
      country:[''],
      state:[''],
      city:[''],
      contacts:this.fb.array([this.contactsGroup()])
    })
  }
  private contactsGroup(): FormGroup {
    return this.fb.group({
      personName: [''],
      personContact: [''], 
    });
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
