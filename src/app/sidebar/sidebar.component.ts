import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
import { LoginComponent } from '../login/login.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  userDetails: any;
  firstname: any;
  lastname: any;
  address: any;
  country: any;
  email: any;
  phone: any;

  constructor(private dialog: MatDialog, private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.userDetails = this.userService.user();
    // console.log(this.userDetails);
    // this.dialog.open(ContactComponent);
    this.route.params.subscribe(params=>{
      this.firstname = params['firstname'];
      this.lastname = params['lastname'];
      this.address = params['address'];
      this.country = params['country'];
      this.email = params['email'];
      this.phone = params['phone'];
    })
     
  }

  openDialog(){
    this.dialog.open(ContactComponent);
  }

  openLogin(){
    this.dialog.open(LoginComponent);
  }

}
