import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { MainModule } from '../main/main.module';
import { RedesComponent } from './redes/redes.component';
import { InternetComponent } from './internet/internet.component';
import { RecargasComponent } from './recargas/recargas.component';
import { CatalogoComponent } from './catalogo/catalogo.component';



@NgModule({
  declarations: [
    HomeComponent,
    RedesComponent,
    InternetComponent,
    RecargasComponent,
    CatalogoComponent
  ],
  imports: [
    CommonModule,    
    SharedModule,
    MainModule,
    AppRoutingModule    
  ],
  exports: [
    HomeComponent,
    RedesComponent,
    InternetComponent
  ]
})
export class HomeModule { }
