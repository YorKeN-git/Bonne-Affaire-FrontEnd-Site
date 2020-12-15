import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-connexion-user',
  templateUrl: './connexion-user.component.html',
  styleUrls: ['./connexion-user.component.css']
})
export class ConnexionUserComponent implements OnInit {

  connexionUser: FormGroup;
  isSubmit: boolean = false;
  loading: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.connexionUser = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      mdp: ['', Validators.required]
    });
  }

}
