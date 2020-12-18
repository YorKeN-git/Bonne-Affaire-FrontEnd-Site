export class Produit {
    _id: string;
    nom: string;
    description: string;
    categorie: string;
    photoPrincipal: string;
    prix: number;
    quantity: number;
    quantiteProduitCmd: number = 1;
    totalProduitCmd: number;
}

