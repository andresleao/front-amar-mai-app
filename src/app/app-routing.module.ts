import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoacaoCreateComponent } from './views/components/doacao/doacao-create/doacao-create.component';
import { DoacaoReadComponent } from './views/components/doacao/doacao-read/doacao-read.component';
import { HomeComponent } from './views/components/home/home.component';
import { LoginComponent } from './views/components/login/login.component';
import { UsuarioCreateComponent } from './views/components/usuario/usuario-create/usuario-create.component';
import { AuthGuard } from './auth.guard';
import { UsuarioUpdateComponent } from './views/components/usuario/usuario-update/usuario-update.component';

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
    component: DoacaoCreateComponent, 
  },
  {
    path: 'usuario/create',
    component: UsuarioCreateComponent
  },
  {
    path: 'usuario/update',
    component: UsuarioUpdateComponent
  }
];

canActivate: [AuthGuard]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
