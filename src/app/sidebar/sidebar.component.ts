import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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

  constructor(private dialog: MatDialog, private userService: UserService) { }

  ngOnInit(): void {
    this.userDetails = this.userService.data;
    console.log(this.userDetails);
  }

  openDialog(){
    this.dialog.open(ContactComponent);
  }

  openLogin(){
    this.dialog.open(LoginComponent);
  }

}
