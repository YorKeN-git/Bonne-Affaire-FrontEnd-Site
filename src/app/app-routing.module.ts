import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AfficherProduitComponent } from './components/afficher-produit/afficher-produit.component';
import { ProduitsAutresComponent } from './components/produits-autres/produits-autres.component';
import { ProduitsGrosElectromenagerComponent } from './components/produits-gros-electromenager/produits-gros-electromenager.component';
import { ProduitsHighTechComponent } from './components/produits-high-tech/produits-high-tech.component';
import { ProduitsJouetsComponent } from './components/produits-jouets/produits-jouets.component';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';


const routes: Routes = [
  {path: '', component: AcceuilComponent},
  {path: 'acceuil', component: AcceuilComponent},
  {path: 'autres', component: ProduitsAutresComponent},
  {path: 'jouets', component: ProduitsJouetsComponent},
  {path: 'High-Tech', component: ProduitsHighTechComponent},
  {path: 'Gros-Electromenager', component: ProduitsGrosElectromenagerComponent},
  {path: 'produit/:id', component: AfficherProduitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
