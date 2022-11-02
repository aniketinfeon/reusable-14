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
      country:['', Validators.pattern('^[a-zA-Z]+$')],
      state:['',Validators.pattern('^[a-zA-Z]+$')],
      city:['',Validators.pattern('^[a-zA-Z]+$')],
      contacts:this.fb.array([this.contactsGroup()])
    })
  }

  contactsGroup(): FormGroup {
    return this.fb.group({
      personName: ['',Validators.pattern('^[a-zA-Z]+$')],
      personContact: ['',Validators.pattern('^((\\+91-?)|0)?[7-9]{1}[0-9]{9}$')] 
    });
  }
  get dynamicValue(){
    return this.dynamicForm.controls
  }
  get addressValidation(){
    // return (this.dynamicForm.get('address.') as FormArray).controls
    return this.addressGroup().controls
  }
 
  addressArray(): FormArray{
    return this.dynamicForm.get('address') as FormArray;
  }

  // error handel of address field
  getAddressErrors(index:number): FormArray{
    return this.addressArray().at(index) as FormArray;
  }
  getContactsErrors(index:number): FormArray{
    return this.getContactsControls(index).at(index) as FormArray;
  }

  getContactsControls(index:number):FormArray {
    return this.addressArray().at(index).get('contacts') as FormArray;
  }

  
  addAddress(): void {
    (<FormArray>this.dynamicForm.get("address")).push(this.addressGroup());
  }
  removeAddress(index:any){
    this.addressArray().removeAt(index)
  }

  addContacts(index:any){
       this.getContactsControls(index).push(this.contactsGroup());
  }

  removeContacts(index:any){
    this.getContactsControls(index).removeAt(index)
  }

  ngOnInit(): void {
    console.log(this.addressValidation);  
    console.log(this.dynamicValue);
    
  }
  postDyanmicForm(){
    console.log("Nested form = ", this.dynamicForm.value)
    this.dynamicForm.reset();
  }

}
