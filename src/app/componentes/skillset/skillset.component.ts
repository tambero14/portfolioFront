import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.css']
})
export class SkillsetComponent {
  programmingList:any;
  idiomasList:any;
  disenoList:any;
  traduccionLocList:any;
  softList:any;
  faEdit = faEdit;
  constructor(private datosPorfolio:PorfolioService) {}

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      this.programmingList=data.programacion;
      this.idiomasList=data.idiomas;
      this.disenoList=data.diseno;
      this.traduccionLocList=data.traduccionLoc;
      this.softList=data.soft;
    })
  }


}
