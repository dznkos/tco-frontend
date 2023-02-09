import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CatalogoComponent } from './home/catalogo/catalogo.component';
import { HomeComponent } from './home/home.component';
import { InternetComponent } from './home/internet/internet.component';
import { RecargasComponent } from './home/recargas/recargas.component';
import { RedesComponent } from './home/redes/redes.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', component: LoginComponent   },
  { path: 'home', component: MainComponent  },
  { path: 'catalogo', component: CatalogoComponent  },
  { path: 'recargas', component: RecargasComponent  },
  { path: 'redessoc', component: RedesComponent  },
  { path: 'internet', component: InternetComponent },
  // { path: 'catalogo', component: CatalogoComponent  },
  { path: '**', component: PagenotfoundComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
