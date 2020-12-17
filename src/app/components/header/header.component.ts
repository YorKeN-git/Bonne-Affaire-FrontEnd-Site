import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Produit } from 'src/app/modeles/produits';
import { User } from 'src/app/modeles/user';
import { AuthService } from 'src/app/services/auth.service';
import { ProduitService } from 'src/app/services/produit.service';
declare var $: any; // ADD THIS


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isAuth: boolean;
  private isAuthSub: Subscription;
  private userId: string; 
  private user: User; 
  public panier: Produit[] = []; 
  nbArticle: number = 0;
  panierSub: Subscription;

  constructor(private auth: AuthService,
              private router: Router,
              private produitService: ProduitService) { }

  ngOnInit() {
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
        }
      }
    );
    this.panierSub = this.produitService.changementPanier$.subscribe(
      (changementPanier) => {
        if(changementPanier == true){
          this.panier = this.produitService.panier;
          console.log(this.panier);
          this.nbArticle = this.produitService.nbArticle+1;
        }
      }
    )
    // this.nbArticle = this.produitService.nbArticle;
    // console.log(this.nbArticle);
    //this.panier = this.produitService.panier;
  }

}
