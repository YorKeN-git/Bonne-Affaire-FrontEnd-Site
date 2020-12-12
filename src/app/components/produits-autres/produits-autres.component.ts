import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Produit } from 'src/app/modeles/produits';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produits-autres',
  templateUrl: './produits-autres.component.html',
  styleUrls: ['./produits-autres.component.css']
})
export class ProduitsAutresComponent implements OnInit {

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
    this.categorie = 'autres';
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
    this.produitService.getProduitsByCategorie("autre");
    
  }

  afficherProduit(id: string){
    this.router.navigate(['produit/' + id]);
  }

}
