import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './account/sign-up/sign-up.component';
import { HomeComponent } from './pages/home/home.component';
import { MoreComponent } from './pages/more/more.component';
import { AuthGuardService } from './shared/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  
  { path: 'more',  canActivate: [AuthGuardService], component: MoreComponent },

  {
    path: 'signup',
    loadChildren: () =>
      import('./account/account.module').then((m) => m.AccountModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
