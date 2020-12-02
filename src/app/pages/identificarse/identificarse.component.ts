import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identificarse',
  templateUrl: './identificarse.component.html',
  styleUrls: ['./identificarse.component.css']
})
export class IdentificarseComponent implements OnInit {

  passInvalid: boolean = false;
  formSignup: FormGroup;

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

  constructor(private router: Router, private fb: FormBuilder) { 
    this.crearFormularioSingup();
  }

  ngOnInit() {
  }

  get emailNoValido(){
    return this.formSignup.get('email').invalid && this.formSignup.get('email').touched;
  }

  get passwordNoValida(){
    return this.formSignup.get('password').invalid && this.formSignup.get('password').touched;
  }

  crearFormularioSingup(){
    this.formSignup = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{6,}')]],
      pass: ['', Validators.required],
    });
  }

  onLogin(form: NgForm){
    console.log(form);
    if(form.invalid){
      Object.values(form.controls).forEach( controll => controll.markAsTouched());
      return;
    }

    this.router.navigate(['/pago']);
  }

  onSingup(){
    console.log(this.formSignup);
    if(this.formSignup.get('password').value != this.formSignup.get('pass').value){
      this.passInvalid = true;
      return;
    }
    if(this.formSignup.invalid){
      Object.values(this.formSignup.controls).forEach( controll => controll.markAsTouched());
      return;
    }else{
      alert('formulario correcto');
      this.passInvalid = false;
    }
  }

}
