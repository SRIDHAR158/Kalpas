import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  addUserForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      'firstname': new FormControl('', [Validators.required, Validators.minLength(4)]),
      'lastname': new FormControl('', [Validators.required, Validators.minLength(4)]),
      'address' : new FormControl('', [Validators.required, Validators.maxLength(15)]),
      'country': new FormControl('', [Validators.required, Validators.maxLength(10)]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'phone': new FormControl('', [Validators.required, Validators.maxLength(20)]) 
    })
  }

  createUser(){

      
      // this.userService.filterdata = this.addUserForm.value;
      console.log(this.addUserForm.value);
      // console.log(this.userService.filterdata);
        console.log(this.addUserForm.value.firstname);
       const firstname = this.addUserForm.value.firstname;
       const lastname = this.addUserForm.value.lastname;
       const address = this.addUserForm.value.address;
       const country = this.addUserForm.value.country;
       const email = this.addUserForm.value.email;
       const phone = this.addUserForm.value.phone;
       
       this.router.navigate(['/side', firstname, lastname, address, country, email, phone]);
      
    };

}
