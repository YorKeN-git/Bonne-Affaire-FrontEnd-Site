import { Injectable } from '@angular/core';
import { Produit } from '../modeles/produits';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  panierClient : Produit[]; 
  total: number; 

  constructor() { }

  majPanier(panier: Produit[], total: number){
    this.panierClient = panier;
    this.total = total;
  }
}
