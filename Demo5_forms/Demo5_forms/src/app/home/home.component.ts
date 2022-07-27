import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  user: string = "";
  pwd: string = "";

  // profileForm = new FormGroup({
  //   firstname: new FormControl(''),
  //   lastname: new FormControl(''),    
  // });

  profileForm = this.fb.group({
    firstname: ['', [Validators.minLength(3), Validators.required]],
    lastname: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.user + " : " + this.pwd);
  }

  onReactiveSubmit() {
    console.log(this.profileForm.value);
  }
}
