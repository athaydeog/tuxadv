import { Component, OnInit } from '@angular/core';
import { TextoEmNegritoComponent } from '../texto-negrito/texto-negrito.component';
import { HttpClient } from '@angular/common/http';
import { cadastro } from '..model/cadastro.model.ts';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent implements OnInit {
  
  texto = "Usuário";

  meusDados: cadastro[] = [];
  constructor(private http:HttpClient){

  }
  
  ngOnInit(): void {
    this.http.get<cadastro[]>('http://localhost:3000/dados').subscribe(result => this.meusDados = result);
  }
  
}