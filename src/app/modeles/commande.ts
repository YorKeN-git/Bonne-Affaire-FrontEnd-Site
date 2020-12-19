import { Produit } from "./produits";
import { User } from "./user";

export class Commande {
    _id: string;
    userId: string;
    user: User;
    adresseLivraison: string;
    codePostalLivraison: string;
    villeLivraison: string;
    produit: Produit[];
    total: number; 
    dateCommande: Date;
    dateCommandeValide: Date;
    dateCommandeExpedie: Date;
    isEnAttenteValidation: boolean;
    isValide: boolean;
    isExpedie: boolean;
}
