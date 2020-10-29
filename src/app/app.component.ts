import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConfig } from './config/config';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(){
    GlobalConfig.getInstance();
  }
  
  
  ngOnInit() {
  }
  
  title = 'tienda';





}
