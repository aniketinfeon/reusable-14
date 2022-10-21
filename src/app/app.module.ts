import { SharedModule } from './shared/shared.module';
import { PrimengModule } from './primeng/primeng.module';
import { SidebarComponent } from './layout/component/sidebar/sidebar.component';
import { MainComponent } from './layout/component/main/main.component';
import { FooterComponent } from './layout/component/footer/footer.component';
import { HeaderComponent } from './layout/component/header/header.component';
import { LoginModule } from './login/login.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/component/dashboard/dashboard.component';
import { LayoutComponent } from './layout/component/layout/layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    PrimengModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
