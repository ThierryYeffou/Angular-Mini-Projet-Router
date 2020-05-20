import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MasecondepageComponent } from './components/masecondepage/masecondepage.component';
import { NosboutiquesComponent } from './components/nosboutiques/nosboutiques.component';
import { NosliensrapideComponent } from './components/nosliensrapide/nosliensrapide.component';
import { VendrecheznousComponent } from './components/vendrecheznous/vendrecheznous.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomepageComponent,
    MasecondepageComponent,
    NosboutiquesComponent,
    NosliensrapideComponent,
    VendrecheznousComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
