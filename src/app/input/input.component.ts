import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dialog.open(FormComponent);
  }

}
