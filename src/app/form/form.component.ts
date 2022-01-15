import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  addUserForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    // this.dialog.open(ContactComponent);
    this.addUserForm = this.formBuilder.group({
      'firstname': new FormControl('', [Validators.required, Validators.minLength(4)]),
      'lastname': new FormControl('', [Validators.required, Validators.minLength(4)]),
      'address' : new FormControl('', [Validators.required, Validators.maxLength(15)]),
      'country': new FormControl('', [Validators.required, Validators.maxLength(10)]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'phone': new FormControl('', [Validators.required, Validators.maxLength(20)]) 
    })
  }

  createUser(){}

}
