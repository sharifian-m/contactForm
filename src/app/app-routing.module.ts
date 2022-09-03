import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './account/sign-up/sign-up.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full' },
  {path:'home',component:HomeComponent},
  // {path:'signup',component:SignUpComponent}
//   path: 'guard', canActivate: [AuthGuard],
//   loadChildren: () => import('./pages/guard/guard.module').then(m => m.GuardModule)
// },
{path: 'signup',
  loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
