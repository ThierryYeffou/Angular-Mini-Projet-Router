import { VendrecheznousComponent } from './components/vendrecheznous/vendrecheznous.component';
import { NosliensrapideComponent } from './components/nosliensrapide/nosliensrapide.component';
import { NosboutiquesComponent } from './components/nosboutiques/nosboutiques.component';
import { MasecondepageComponent } from './components/masecondepage/masecondepage.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "homepage", component: HomepageComponent },
  { path: "masecondepage", component: MasecondepageComponent },
  { path: "nosboutiques", component: NosboutiquesComponent },
  { path: "nosliensrapide", component: NosliensrapideComponent },
  { path: "vendrecheznous", component: VendrecheznousComponent },
  { path : "", redirectTo:"/homepage", pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
