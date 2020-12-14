import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ProfileComponent } from './componentes/profile/profile.component';
import { NotfoundComponent } from './componentes/notfound/notfound.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { FormbasicComponent } from './componentes/formbasic/formbasic.component';
import { TableComponent } from './componentes/table/table.component';
import { IconmenuComponent } from './componentes/iconmenu/iconmenu.component';
import { BlankpageComponent } from './componentes/blankpage/blankpage.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,
    ProfileComponent,
    NotfoundComponent,
    BreadcrumbComponent,
    FormbasicComponent,
    TableComponent,
    IconmenuComponent,
    BlankpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
