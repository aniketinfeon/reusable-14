import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { confirmValidator } from '../confirm.validator';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {

  signupForm: any;
  constructor( private formBuilder: FormBuilder,private http:HttpClient, private service:LoginService) { 
  }
 
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstName:['', Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$'),Validators.minLength(2)])],
      lastName: ['', Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$'),Validators.minLength(2)])],
      emailId: ['', Validators.compose([Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])],
      mNumber: ['', Validators.compose([Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')])],
      newPwd: ['',Validators.required],
      confirmPwd: ['',Validators.required]
    },
    {
      validator:confirmValidator('newPwd','confirmPwd')
    })
  }
  get signUpVal() { return this.signupForm.controls}

  postSignup(data:any){
    if(data.valid){
      this.service.postRegister(data.value).subscribe((res:any) =>{
        this.signupForm.reset();
        alert('Data added successfully')
      })
    console.log("signup = " ,data.value); 
    
    }else{
      alert('Fill all the field')
    }
  }
}
