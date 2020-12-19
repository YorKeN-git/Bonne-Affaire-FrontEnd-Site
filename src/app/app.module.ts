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
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AfficherPanierComponent } from './components/afficher-panier/afficher-panier.component';
import { CreationCommandeComponent } from './components/creation-commande/creation-commande.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';


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
    AfficherPanierComponent,
    CreationCommandeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
