import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { NotfoundComponent } from './componentes/notfound/notfound.component';
import { ProfileComponent } from './componentes/profile/profile.component';
import { FormbasicComponent } from './componentes/formbasic/formbasic.component';
import { BlankpageComponent } from './componentes/blankpage/blankpage.component';
import { IconmenuComponent } from './componentes/iconmenu/iconmenu.component';
import { TableComponent } from './componentes/table/table.component';

const routes: Routes = [
  {path: 'formbasic', component: FormbasicComponent},
  {path: 'blankpage', component: BlankpageComponent},
  {path: 'iconmenu', component: IconmenuComponent},
  {path: 'tablemenu', component: TableComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '', component: DashboardComponent},
  {path: '**', component: NotfoundComponent},
  {path: 'notfound', component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
