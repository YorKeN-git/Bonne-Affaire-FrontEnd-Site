import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Commande } from 'src/app/modeles/commande';
import { Produit } from 'src/app/modeles/produits';
import { User } from 'src/app/modeles/user';
import { AuthService } from 'src/app/services/auth.service';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-creation-commande',
  templateUrl: './creation-commande.component.html',
  styleUrls: ['./creation-commande.component.css']
})
export class CreationCommandeComponent implements OnInit {

  coordonneeFacturationForm: FormGroup;
  coordonneeLivraisonForm: FormGroup;
  user: User; 
  isAuthSub: any;
  isAuth: boolean;
  userId: string;
  isUtilAdresseFacturation: boolean = false; 
  panierClient: Produit[];
  totalAPayer: number;
  isAccepteFacturation: boolean = false; 
  messageCreationCommandeOK: string; 
  creationCommandeOK: boolean; 
  loading: boolean; 
  creationCommandeNOK: boolean;
  messageCreationCommandeNOK: string; 

  constructor(private formbuilder: FormBuilder,
              private auth: AuthService,
              private commandeService: CommandeService,
              ) { }

  ngOnInit() {
    //Initialisation du form : coordonneeFacturationForm
    this.coordonneeFacturationForm = this.formbuilder.group({
      prenomFacturation: [null, Validators.required],
      nomFacturation: [null, Validators.required],
      adresseFacturation: [null, Validators.required],
      CPFacturation: [null, Validators.required], 
      villeFacturation: [null, Validators.required]

    });
    //Remplissage auto du form : coordonneeFacturationForm
    this.isAuthSub = this.auth.isAuth$.subscribe(
      (auth) => {
        //Vérifie si l'utilisateur est connecté 
        if(auth == true){
          this.isAuth = auth;
          this.userId = this.auth.userId;
        this.auth.getUserById(this.userId).then(
          (user: User) => {
            this.user = user;
            this.coordonneeFacturationForm = this.formbuilder.group({
              prenomFacturation: [this.user.prenom, Validators.required],
              nomFacturation: [this.user.nom, Validators.required],
              adresseFacturation: [this.user.adresse, Validators.required],
              CPFacturation: [this.user.codePostal, Validators.required], 
              villeFacturation: [this.user.ville, Validators.required]
            });
          }
        );
        }
      }
    );
    //Initialisation du form : coordonneeLivraisonForm
    this.coordonneeLivraisonForm = this.formbuilder.group({
      prenomLivraison: [null, Validators.required],
      nomLivraison: [null, Validators.required],
      adresseLivraison: [null, Validators.required],
      CPLivraison: [null, Validators.required], 
      villeLivraison: [null, Validators.required]
    });
    this.panierClient = this.commandeService.panierClient;
    this.totalAPayer = this.commandeService.total;

  }

  utiliserAdresseFacturation(event:MatCheckboxChange){
    if(event.checked == true){
      this.coordonneeLivraisonForm.controls['prenomLivraison'].setValue(this.user.prenom);
      this.coordonneeLivraisonForm.controls['nomLivraison'].setValue(this.user.nom);
      this.coordonneeLivraisonForm.controls['adresseLivraison'].setValue(this.user.adresse);
      this.coordonneeLivraisonForm.controls['CPLivraison'].setValue(this.user.codePostal);
      this.coordonneeLivraisonForm.controls['villeLivraison'].setValue(this.user.ville);
    }else{
      this.coordonneeLivraisonForm.reset();
    }
  }

  validerCommande(){
    this.loading = true; 
    const commande = new Commande();
    commande.user = this.user;
    commande.userId = this.user._id;
    var prenomLivraison = this.coordonneeLivraisonForm.get('prenomLivraison').value;
    var nomLivraison = this.coordonneeLivraisonForm.get('nomLivraison').value;
    var adresseLivraison = this.coordonneeLivraisonForm.get('prenomLivraison').value;
    var codePostalLivraison = this.coordonneeLivraisonForm.get('CPLivraison').value;
    var villeLivraison = this.coordonneeLivraisonForm.get('villeLivraison').value; 
    //produit = this.panierClient; 
    //commande.total = this.totalAPayer; 
    var dateCommande = this.getCurrentDate();
    this.commandeService.creerCommande(this.userId, this.user, prenomLivraison, nomLivraison, adresseLivraison, codePostalLivraison,
      villeLivraison, this.panierClient, this.totalAPayer, dateCommande  ).then(
      () => {
        this.loading = false;
        this.messageCreationCommandeOK = this.commandeService.messageCreationOK;
        this.creationCommandeOK = true;
        this.creationCommandeNOK = false; 
        this.commandeService.resetPanier();
      }
    
    ).catch(
      (error) => {
        this.loading = false;
        this.creationCommandeNOK = true; 
        this.creationCommandeOK = false;
        this.messageCreationCommandeNOK = error.message; 
      }
    );

  }

  getCurrentDate(){
    var today = new Date();
    var current_JJ = today.getDate();
    var current_MM = today.getMonth()+1;
    var current_YYYY = today.getFullYear();
    var current_hh = today.getHours();
    var current_mm = today.getMinutes();
    var dateToday = current_JJ + '/' + current_MM 
          + '/' + current_YYYY + ' ' + current_hh 
          + ':' + current_mm ; 
    console.log(dateToday);
    return dateToday; 

  }

  accepteFacturation(event:MatCheckboxChange){
    if(event.checked == true){
      this.isAccepteFacturation = true;
    }else{
      this.isAccepteFacturation = false; 
    }
  }

}
