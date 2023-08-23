import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Rota padrão (home)
  { path: 'clientes', component: ClientesComponent }, // Rota para a lista de clientes
  { path: 'cadastro', component: CadastroClienteComponent }, // Rota para o formulário de cadastro
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
