import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  bmi:number=0;
  resultado='';
  inter='';
  constructor(private route:ActivatedRoute) {
    this.bmi=+route.snapshot.paramMap.get('valor')!;
   }

  ngOnInit(): void {
    this.getResultado();
  }

  getResultado():void{
    if (this.bmi>=25) {
      this.resultado='Exceso de peso'
      this.inter='Tienes un peso corporal superior al normal. Intente hacer mas ejercicio.';
    }else if (this.bmi>=18.5) {
      this.resultado='Normal'
      this.inter='Tienes un peso corporal normal. Buen trabajo!.';
    }else{
      this.resultado='Bajo Peso'
      this.inter='Tienes un peso corporal mas bajo al normal. Puedes comer un poco mas.';
    }
  }
}
