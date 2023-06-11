import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import {User} from "../../User";


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  // userForm = new FormGroup({
  //   name: new FormControl(null, [
  //     Validators.required,
  //     Validators.minLength(4),
  //     Validators.maxLength(100),
  //     Validators.pattern("^[a-zA-Z ]{3,}$")
  //   ]),
  // })

  // userform = new FormGroup({
  //   email: new FormControl(null, [
  //     Validators.required,
  //     Validators.minLength(4),
  //     Validators.maxLength(100),
  //     Validators.pattern("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$")
  //   ])
  // })

  // get nameField(): FormControl {
  //   return this.userForm.controls.name as FormControl;
  // }





  ngOnInit(): void {

  }

//   async submit() : Promise<void> {
//     if (!this.userForm.invalid) {
//       try {
//         let user = new User();
//         user.name = this.nameField.value;
//       }catch (e) {
//       // @ts-ignore
//       alert(e.error.text);
//     }
//   }
// }

constructor(private service: AppService, private router: Router) { }

data: any




  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required,]),
    pNo: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required])
  })

  // ngOnInit(): void {
  // }


  submit(){
    this.data = this.form.value
    console.log(this.data)

    this.service.adduser(this.data).subscribe(data => {
      console.log(data)
    })



    this.router.navigate(['/all']);
  }



}
