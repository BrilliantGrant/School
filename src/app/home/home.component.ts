import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher'
import { RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 
  powers = ['50,000Ksh'];
 
  model = new Teacher(42, '');
 
  submitted = false;
 
  onSubmit() { this.submitted = true; }
 
  newHome() {
    this.model = new Home(42, '', '');
  }
}
