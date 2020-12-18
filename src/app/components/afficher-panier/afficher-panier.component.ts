import { Component, OnInit } from '@angular/core';
import { Commande } from 'src/app/modeles/commande';
import { Produit } from 'src/app/modeles/produits';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-afficher-panier',
  templateUrl: './afficher-panier.component.html',
  styleUrls: ['./afficher-panier.component.css']
})
export class AfficherPanierComponent implements OnInit {
  public panier: Produit[];
  isPanierVide: boolean; 
  loading: boolean;
  quantiteProduit: number = 1;
  prixProduitCommande: number; 
  commande: Commande; 
  total: number = 0; 
  constructor(private produitService: ProduitService) { }

  ngOnInit() {
    this.loading = true; 
    if(this.produitService.nbArticle == 0){
      this.isPanierVide = true; 
      this.loading = false;
    }else{
      this.loading = false;
      //Recuperd le panier
      this.panier = this.produitService.panier
      this.calculerTotal();
    }
      
  }

  onChangeInput(event: any, produit: Produit){
    this.quantiteProduit = event.target.value;
    produit.quantiteProduitCmd = this.quantiteProduit ; 
    produit.totalProduitCmd = produit.quantiteProduitCmd * produit.prix; 
    this.calculerTotal(); 
  }

  calculerTotal(){
    this.total = 0; 
    for (let index = 0; index < this.panier.length; index++) {
      if(this.panier.length == 1){
        this.total = this.panier[index].totalProduitCmd ;
      }else{
        this.total += this.panier[index].totalProduitCmd;
      }
      
    }
    console.log(this.total);
  }

}
