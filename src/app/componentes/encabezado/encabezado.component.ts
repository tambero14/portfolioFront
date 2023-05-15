import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {
    miPorfolio:any;
    faEdit = faEdit;
    constructor(private datosPorfolio:PorfolioService) { }
    
    ngOnInit(): void {
      this.datosPorfolio.obtenerDatos().subscribe(data =>{
        console.log(data);
        this.miPorfolio=data;
      }); 
    }

}
