import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  addUserForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

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

      
      this.userService.data = this.addUserForm.value;
      console.log(this.addUserForm.value);

      
    };

}
