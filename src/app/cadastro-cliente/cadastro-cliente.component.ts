import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent {
  
  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };
  
  constructor(private http:HttpClient){}
}
cadastro(form:any){
 
  this.http.post('http://localhost:3000/dados', form.value, this.httpOptions).subscribe();
  /* setTimeout(this.refresh, 2000); */
}