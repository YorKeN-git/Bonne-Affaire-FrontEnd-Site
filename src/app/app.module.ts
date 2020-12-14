import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProduitsAutresComponent } from './components/produits-autres/produits-autres.component';
import { HttpClientModule } from '@angular/common/http';
import { AfficherProduitComponent } from './components/afficher-produit/afficher-produit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProduitsJouetsComponent } from './components/produits-jouets/produits-jouets.component';
import { ProduitsHighTechComponent } from './components/produits-high-tech/produits-high-tech.component';
import { ProduitsGrosElectromenagerComponent } from './components/produits-gros-electromenager/produits-gros-electromenager.component';
import { CreationCompteComponent } from './components/creation-compte/creation-compte.component';
import { ConnexionUserComponent } from './components/connexion-user/connexion-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcceuilComponent,
    CarouselComponent,
    ProduitsAutresComponent,
    AfficherProduitComponent,
    ProduitsJouetsComponent,
    ProduitsHighTechComponent,
    ProduitsGrosElectromenagerComponent,
    CreationCompteComponent,
    ConnexionUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
