import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth$ = new BehaviorSubject<boolean>(false);
  token: string;
  userId: string;
  messageCreationOK: string;

  constructor(private http: HttpClient) { }

  creerUser(prenom: string, nom: string, email: string, mdp: string, adresse: string, codePostal: number, ville: string){
    return new Promise((resolve, reject) => {
      this.http.post(
        'http://localhost:3000/api/auth/signup',
        { prenom: prenom, nom: nom, email: email, mdp: mdp,
          adresse: adresse, codePostal: codePostal, ville: ville })
        .subscribe(
          () => {
            this.messageCreationOK = "Votre compte à bien été crée ! Bienvenue parmis-nous !";
            resolve();
            // this.connnexionUser(email, mdp).then(
            //   () => {
            //     resolve();
            //   }
            // ).catch(
            //   (error) => {
            //     reject(error);
            //   }
            // );
          },
          (error) => {
            reject(error);
          }
        );
    });

    }

    connnexionUser(email: string, mdp: string){
      return new Promise((resolve, reject) => {
        this.http.post(
          'http://localhost:3000/api/auth/login',
          { email: email, password: mdp })
          .subscribe(
            (authData: { token: string, userId: string }) => {
              this.token = authData.token;
              this.userId = authData.userId;
              this.isAuth$.next(true);
              resolve();
            },
            (error) => {
              reject(error);
              
            }
          );
      });
    }

    deconnexion(){
      this.isAuth$.next(false);
      this.userId = null;
      this.token = null;
    }
}