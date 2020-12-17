import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/modeles/produits';
import { ProduitService } from 'src/app/services/produit.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-afficher-produit',
  templateUrl: './afficher-produit.component.html',
  styleUrls: ['./afficher-produit.component.css']
})
export class AfficherProduitComponent implements OnInit {
  public loading: boolean;
  public produit: Produit;

  constructor(private produitService: ProduitService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.loading = true;
    this.route.params.subscribe(
      (params) => {
        this.produitService.getProduitById(params.id).then(
          (produit: Produit) => {
            this.produit = produit;
            //console.log(this.produit);
            
            });
            // this.imagePreview = produit.photoPrincipal;
            this.loading = false;
          }
        );
  }
  
  ajouterPanier(produit: Produit){
    this.produitService.addProduitPanier(produit);
    
  }

}
