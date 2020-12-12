import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Produit } from 'src/app/modeles/produits';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produits-gros-electromenager',
  templateUrl: './produits-gros-electromenager.component.html',
  styleUrls: ['./produits-gros-electromenager.component.css']
})
export class ProduitsGrosElectromenagerComponent implements OnInit {

  public loading: boolean;
  public pasdeProduit: boolean;
  public produits: Produit[] = [];
  private produitSub: Subscription;
  messageErreur: string; 
  nbProduit : number;
  categorie: string; 
  
  constructor(private produitService: ProduitService,
          private router: Router) { }

          ngOnInit() {
            this.loading = true;
            this.categorie = 'gros-electromenager';
            this.produitSub = this.produitService.produit$.subscribe(
              (produit) => {
                if(produit.length > 0){
                  this.produits = produit;
                  this.nbProduit = this.produits.length;
                  this.loading = false
                }else{
                  this.loading = false;
                  this.pasdeProduit = true;
                }
              }
            );
            this.produitService.getProduitsByCategorie("gros-electromenager");
            
          }
        
          afficherProduit(id: string){
            this.router.navigate(['produit/' + id]);
          }
        

}
