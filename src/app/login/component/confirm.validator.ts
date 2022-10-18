import { FormGroup } from '@angular/forms';

export function confirmValidator(password:string,confirmPwd:string){
    return(formGroup:FormGroup)=>{
        const newPwd = formGroup.controls[password];
        const confirmNewpwd = formGroup.controls[confirmPwd];
        if(confirmNewpwd.errors && !confirmNewpwd.errors['confirmValidator']){
            return
        }
        if(newPwd.value !== confirmNewpwd.value){
            confirmNewpwd.setErrors({confirmValidator:true});
        }
        else{
            confirmNewpwd.setErrors(null)
        }
    }
}