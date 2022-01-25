import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  isDisableSwap = false;

  loginForm1 = new FormGroup({
    name: new FormControl(''),
    pass: new FormControl(''),
    phNo: new FormControl('')
  });

  loginForm2 = new FormGroup({
    name: new FormControl(''),
    pass: new FormControl(''),
    phNo: new FormControl('')
  });
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.loginForm1);
    console.log(this.loginForm2);
  }
  onSwap() {
    if (this.loginForm1.status == "VALID") {
      this.loginForm2 = new FormGroup({
        name: new FormControl(this.loginForm1.value.name),
        pass: new FormControl(this.loginForm1.value.pass),
        phNo: new FormControl(this.loginForm1.value.phNo)
      })
      this.loginForm1 = new FormGroup({
        name: new FormControl(''),
        pass: new FormControl(''),
        phNo: new FormControl('')
      })
    }
    else{
      alert("Unable to swap");
      
    }
  }
}

