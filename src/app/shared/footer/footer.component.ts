import { Component, OnInit } from '@angular/core';
import { GlobalConfig } from 'src/app/config/config';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  color: string;
  icon: string;
 
  

  constructor(private globalconfig: GlobalConfig) { 
  }

  ngOnInit() {
    this.color = this.globalconfig.getColorMenu();
    this.icon = this.globalconfig.getIcono();
    console.log(this.color);
    
  }

}
