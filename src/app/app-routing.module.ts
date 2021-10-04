import { UsuarioDonatarioComponent } from './views/components/usuario/usuario-donatario/usuario-donatario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoacaoCreateComponent } from './views/components/doacao/doacao-create/doacao-create.component';
import { DoacaoReadComponent } from './views/components/doacao/doacao-read/doacao-read.component';
import { HomeComponent } from './views/components/home/home.component';
import { LoginComponent } from './views/components/login/login.component';
import { UsuarioCreateComponent } from './views/components/usuario/usuario-create/usuario-create.component';
import { AuthGuard } from './auth.guard';
import { UsuarioUpdateComponent } from './views/components/usuario/usuario-update/usuario-update.component';
import { DoacaoDetalhesComponent } from './views/components/doacao/doacao-detalhes/doacao-detalhes.component';
import { UsuarioDoacoesComponent } from './views/components/usuario/usuario-doacoes/usuario-doacoes.component';
import { DoacaoEditComponent } from './views/components/doacao/doacao-edit/doacao-edit.component';

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
    component: DoacaoReadComponent, canActivate: [AuthGuard]
  },
  {
    path: 'doacoes/create',
    component: DoacaoCreateComponent, canActivate: [AuthGuard]
  },
  {
    path: 'doacoes/aceitar/:id',
    component: DoacaoDetalhesComponent, canActivate: [AuthGuard]
  },
  {
    path: 'usuario/create',
    component: UsuarioCreateComponent
  },
  {
    path: 'usuario/update',
    component: UsuarioUpdateComponent, canActivate: [AuthGuard]
  },
  {
    path: 'usuario/doacoes',
    component: UsuarioDoacoesComponent, canActivate: [AuthGuard]
  },
  {
    path: 'usuario/doacoes/donatario/:id',
    component: UsuarioDonatarioComponent, canActivate: [AuthGuard]
  },
  {
    path: 'usuario/doacoes/doacao/edit/:id',
    component: DoacaoEditComponent, canActivate: [AuthGuard]
  }
];

// canActivate: [AuthGuard]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
