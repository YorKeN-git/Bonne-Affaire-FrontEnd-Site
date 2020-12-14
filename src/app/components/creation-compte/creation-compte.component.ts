import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { concordanceMdp } from './concordanceMdp';

@Component({
  selector: 'app-creation-compte',
  templateUrl: './creation-compte.component.html',
  styleUrls: ['./creation-compte.component.css']
})
export class CreationCompteComponent implements OnInit {

  creationCompteForm: FormGroup;
  loading: boolean = false;
  error: boolean = false;
  errorMessage: string;
  creationCompteOK: boolean = false; 
  message: string; 

  constructor(private formBuilder: FormBuilder,
    private auth: AuthService) { }

  ngOnInit() {
    this.creationCompteForm = this.formBuilder.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mdp: ['', Validators.required, Validators.minLength(6)],
      mdpConfirmer: ['', Validators.required],
      adresse: ['', Validators.required],
      CP: [0, Validators.required],
      ville: ['', Validators.required]
    // }, {
      // validator: concordanceMdp('mdp', 'mdpConfirmer')
    });
  
  }

  //get f() { return this.creationCompteForm.controls; }

  creerCompte(){
    this.loading = true; 
    this.error = false;
    const prenom = this.creationCompteForm.get('prenom').value;
    const nom = this.creationCompteForm.get('nom').value; 
    const email = this.creationCompteForm.get('email').value;
    const mdp = this.creationCompteForm.get('mdp').value; 
    //const mdpConfirmer = this.creationCompteForm.get('mdpConfirmer').value; 
    const adresse = this.creationCompteForm.get('adresse').value;
    const codePostal = this.creationCompteForm.get('CP').value;
    const ville = this.creationCompteForm.get('ville').value;
    this.auth.creerUser(prenom, nom, email, mdp, adresse, codePostal, ville).then(
        () => {
          this.loading = false;
          this.creationCompteOK = true; 
          this.message = this.auth.messageCreationOK ;
          this.creationCompteForm.reset();
        }
      ).catch(
        (error) => {
          this.loading = false;
          this.error = true; 
          this.errorMessage = error.message; 
        }
      );
  }
}
