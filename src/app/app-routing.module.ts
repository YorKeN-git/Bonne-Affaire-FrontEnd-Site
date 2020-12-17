import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AfficherPanierComponent } from './components/afficher-panier/afficher-panier.component';
import { AfficherProduitComponent } from './components/afficher-produit/afficher-produit.component';
import { ConnexionUserComponent } from './components/connexion-user/connexion-user.component';
import { CreationCompteComponent } from './components/creation-compte/creation-compte.component';
import { ProduitsAutresComponent } from './components/produits-autres/produits-autres.component';
import { ProduitsGrosElectromenagerComponent } from './components/produits-gros-electromenager/produits-gros-electromenager.component';
import { ProduitsHighTechComponent } from './components/produits-high-tech/produits-high-tech.component';
import { ProduitsJouetsComponent } from './components/produits-jouets/produits-jouets.component';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';


const routes: Routes = [
  {path: '', component: AcceuilComponent},
  {path: 'acceuil', component: AcceuilComponent},
  {path: 'creation-Compte', component: CreationCompteComponent},
  {path: 'connexion-User', component: ConnexionUserComponent},
  {path: 'autres', component: ProduitsAutresComponent},
  {path: 'jouets', component: ProduitsJouetsComponent},
  {path: 'High-Tech', component: ProduitsHighTechComponent},
  {path: 'Gros-Electromenager', component: ProduitsGrosElectromenagerComponent},
  {path: 'produit/:id', component: AfficherProduitComponent},
  {path: 'mon-Panier', component: AfficherPanierComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
