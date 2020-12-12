import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Produit } from 'src/app/modeles/produits';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produits-jouets',
  templateUrl: './produits-jouets.component.html',
  styleUrls: ['./produits-jouets.component.css']
})
export class ProduitsJouetsComponent implements OnInit {

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
    this.categorie = 'jouet';
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
    this.produitService.getProduitsByCategorie("jouet");
    
  }

  afficherProduit(id: string){
    this.router.navigate(['produit/' + id]);
  }


}
