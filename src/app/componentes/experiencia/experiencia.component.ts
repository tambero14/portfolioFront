import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
    experienciaList:any;
    faEdit = faEdit;
    constructor(private datosPorfolio:PorfolioService) {}

    ngOnInit(): void {
      this.datosPorfolio.obtenerDatos().subscribe(data => {
        this.experienciaList=data.experience;
      })
    }
}
