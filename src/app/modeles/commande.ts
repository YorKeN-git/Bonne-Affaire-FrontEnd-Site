import { Produit } from "./produits";
import { User } from "./user";

export class Commande {
    _id: string;
    userId: string;
    user: User;
    nomLivraison: string;
    prenomLivraison: string;
    adresseLivraison: string;
    codePostalLivraison: string;
    villeLivraison: string;
    produit: Produit[];
    total: number; 
    dateCommande: string;
    dateCommandeValide: string;
    dateCommandeExpedie: string;
    isEnAttenteValidation: boolean;
    isValide: boolean;
    isExpedie: boolean;
}
