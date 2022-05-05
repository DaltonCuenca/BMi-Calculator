import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  edad=20;
  peso=60;
  altura=170;
  sexo='MASCULINO';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  cambiarAltura(event:any){
    this.altura=event.target.value;
  }
  masculino():void {
    this.sexo='MASCULINO';
  }
  femenino():void{
    this.sexo='FEMENINO';
  }

  calcularBMI():void{
    //calculos
    const bmi=this.peso/Math.pow(this.altura/100, 2);
    //
    this.router.navigate(['/resultado', bmi.toFixed(1)]);
  }

}
