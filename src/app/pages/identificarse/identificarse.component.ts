import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-identificarse',
  templateUrl: './identificarse.component.html',
  styleUrls: ['./identificarse.component.css']
})
export class IdentificarseComponent implements OnInit {

  passInvalid: boolean = false;

  login = {
    email: '',
    password:'',
  }

  singup = {
    nombre: '',
    email:'',
    password: '',
    confPassword: '',
  }

  constructor() { }

  ngOnInit() {
  }

  onLogin(form: NgForm){
    console.log(form);
    if(form.invalid){
      Object.values(form.controls).forEach( controll => controll.markAsTouched());
      return;
    }
  }

  onSingup(form: NgForm){
    console.log(form)
    if(form.controls.passwordSingup.value != form.controls.confPasswordSingup.value){
      this.passInvalid = true;
      return;
    }
    if(form.invalid){
      Object.values(form.controls).forEach( controll => controll.markAsTouched());
      return;
    }else{
      this.passInvalid = false;
    }
  }

}
