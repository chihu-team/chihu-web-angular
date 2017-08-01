import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateService } from './can-activate.service';

const appRoutes: Routes = [
  // { path: 'text', component: Test1Component }
  {
    path: 'login',
    loadChildren: 'app/home/login/login.module#LoginModule'
  },
  {
    path: 'index',
    loadChildren: 'app/home/index/index.module#IndexModule',
    canActivate: [CanActivateService]
  },
  {
    path: '',
    loadChildren: 'app/home/index/index.module#IndexModule',
    canActivate: [CanActivateService]
  },
  {
    path: 'people/:id',
    loadChildren: 'app/home/people/people.module#PeopleModule',
    canActivate: [CanActivateService]
  },
  {
    path: '404', loadChildren: 'app/home/nofound/nofound.module#NofoundModule'
  },
  {
    path: '**', redirectTo: '/404'
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutesModule { }
