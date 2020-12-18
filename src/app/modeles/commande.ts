import { Produit } from "./produits";

export class Commande {
    _id: string;
    userId: string;
    produit: Produit[];
    total: number; 
}
