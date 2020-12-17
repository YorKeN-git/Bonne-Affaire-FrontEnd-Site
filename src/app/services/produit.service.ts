import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produit } from '../modeles/produits';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  
  public produit$ = new Subject<Produit[]>();
  private produits: Produit[] = [];
  public panier: Produit[] = []; 
  //public panier$ = new Subject<Produit[]>();
  public nbArticle: number = 0; 
  changementPanier$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  getProduitsByCategorie(categorie: string){
   
      this.http.get('http://localhost:3000/api/produit/categorie/' + categorie).subscribe(
        (produit: Produit[]) => {
          if(produit){
            this.produits = produit;
            this.emitProduit();
          }
        },
        (error) => {
          console.log(error);
        }
      );
  
    // return this.http.get('http://localhost:3000/api/produit/categorie/' + categorie);
  }


  emitProduit() {
    this.produit$.next(this.produits);
  }

  getProduitById(id: string){
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/api/produit/' + id).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  addProduitPanier(produit: Produit){
    this.changementPanier$.next(true);
    if(this.nbArticle == 0){
      this.panier[0] = produit;
      //console.log(this.panier$[0]);
      this.nbArticle++;
    }else{
      this.panier[this.nbArticle] = produit;
      //console.log(this.panier$);
      this.nbArticle++;
    }
  }

}
