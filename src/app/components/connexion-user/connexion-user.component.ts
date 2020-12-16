import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-connexion-user',
  templateUrl: './connexion-user.component.html',
  styleUrls: ['./connexion-user.component.css']
})
export class ConnexionUserComponent implements OnInit {

  connexionUserForm: FormGroup;
  errorMessage: string;
  loading: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private auth: AuthService,
              private router: Router ) { }

  ngOnInit() {
    this.connexionUserForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      mdp: ['', Validators.required]
    });
  }

  connexionUser(){
    this.loading = true;
    const email = this.connexionUserForm.get('email').value;
    const mdp = this.connexionUserForm.get('mdp').value;
    this.auth.connnexionUser(email, mdp).then(
      () => {
        this.loading = false;
        this.router.navigate(['/acceuil']);
      }
    ).catch(
      (error) => {
        this.loading = false;
        this.errorMessage = error.message;
      }
    );
  }

}
