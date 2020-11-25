import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalConfig } from 'src/app/config/config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  colorHeader: string;
  passwordForm: string= "";
  emailForm: string = "";

  @Input('width') width: string;

  @ViewChild('modal', {static: false}) modal: ElementRef;
  @ViewChild('modalContent', {static: false}) modalContent: ElementRef

  constructor(private router:Router, private globalconfig: GlobalConfig) { 
  }

  ngOnInit() {
    this.colorHeader = this.globalconfig.getcolorHeader();
  }

  mostrarModal(){
    console.log(this.modal);
    this.modalContent.nativeElement.style.width = this.width + "%";
    this.modal.nativeElement.style.display = 'block';
  }

  cerrarModal(){
    this.modal.nativeElement.style.display = 'none';
  }

  onLogin(form: NgForm){
    console.log(form);
    if(form.invalid){
      Object.values(form.controls).forEach( control => control.markAsTouched());
      return;
    }
    this.emailForm = form.controls.email.value;
    this.passwordForm = form.controls.password.value;

    this.modal.nativeElement.style.display = 'none';
  }

  signup(){
    this.modal.nativeElement.style.display = 'none';
    this.router.navigate(['/signup']);
  }


}
