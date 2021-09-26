import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoacaoCreateComponent } from './views/components/doacao/doacao-create/doacao-create.component';
import { DoacaoReadComponent } from './views/components/doacao/doacao-read/doacao-read.component';
import { HomeComponent } from './views/components/home/home.component';
import { LoginComponent } from './views/components/login/login.component';
import { UsuarioCreateComponent } from './views/components/usuario/usuario-create/usuario-create.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'doacoes',
    component: DoacaoReadComponent
  },
  {
    path: 'doacoes/create',
    component: DoacaoCreateComponent
  },
  {
    path: 'usuario/create',
    component: UsuarioCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
