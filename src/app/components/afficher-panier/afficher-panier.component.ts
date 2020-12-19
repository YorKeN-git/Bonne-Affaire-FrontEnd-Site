import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Commande } from 'src/app/modeles/commande';
import { Produit } from 'src/app/modeles/produits';
import { User } from 'src/app/modeles/user';
import { AuthService } from 'src/app/services/auth.service';
import { CommandeService } from 'src/app/services/commande.service';
import { ProduitService } from 'src/app/services/produit.service';
import { ProduitsGrosElectromenagerComponent } from '../produits-gros-electromenager/produits-gros-electromenager.component';

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
  isAuth: boolean; 
  isAuthSub: any;
  userId: string;
  user: User;
  submitCmd: boolean;
  panierFinal: Produit[];

  constructor(private produitService: ProduitService,
              private auth: AuthService,
              private router: Router,
              private commandeService: CommandeService) { }

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
    //console.log(this.total);
  }

  commander(){
    this.submitCmd = true; 
    this.isAuthSub = this.auth.isAuth$.subscribe(
      (auth) => {
        //Vérifie si l'utilisateur est connecté 
        if(auth == true){
          this.isAuth = auth;
          this.userId = this.auth.userId;
        this.auth.getUserById(this.userId).then(
          (user: User) => {
            this.user = user;
          }
        );
        //Transmet le panier final a commandeService
        this.panierFinal = this.panier;
        this.commandeService.majPanier(this.panierFinal, this.total);
        this.router.navigate(['/Creation-Commande']);
        }
      }
    );
  }

}
