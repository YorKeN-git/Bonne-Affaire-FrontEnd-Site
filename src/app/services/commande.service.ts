import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commande } from '../modeles/commande';
import { Produit } from '../modeles/produits';
import { User } from '../modeles/user';
import { ProduitService } from './produit.service';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  panierClient : Produit[]; 
  total: number; 
  messageCreationOK: string;

  constructor(private http: HttpClient,
              private produitService: ProduitService) { }

  majPanier(panier: Produit[], total: number){
    this.panierClient = panier;
    this.total = total;
  }

  creerCommande(userId: string, user: User, prenomLivraison: string, nomLivraison: string, 
    adresseLivraison: string, codePostalLivraison: number, villeLivraison: string,
    produit: Produit[], totalAPayer: number, dateCommande: string ){
    // console.log(userId); 
    // console.log(user); 
    // console.log(prenomLivraison);
    // console.log(nomLivraison);
    // console.log(adresseLivraison);
    // console.log(codePostalLivraison);
    // console.log(villeLivraison);
    // console.log(produit);
    // console.log(totalAPayer);
    // console.log(dateCommande);
      return new Promise((resolve, reject) => {
      this.http.post(
        'http://localhost:3000/api/commande/creerCommande',
        { userId: userId, user: user, prenomLivraison: prenomLivraison, nomLivraison: nomLivraison,
          adresseLivraison: adresseLivraison, codePostalLivraison: codePostalLivraison, villeLivraison: villeLivraison,
          produit: produit, totalAPayer: totalAPayer, dateCommande: dateCommande })
        .subscribe(
          () => {
            this.messageCreationOK = "Votre commande à bien été prise en compte ! Merci pour votre achat";
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  resetPanier(){
    this.panierClient = null; 
    this.total = null; 
    this.produitService.panier = null;
  }
}
