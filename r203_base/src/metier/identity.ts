export function identity(nom: string, prenom: string):string {
    if (nom.length === 0 || prenom.length === 0) {
        throw new Error("Impossible de créer une initiale !");
    }
    return nom[0].toUpperCase() + prenom[0].toUpperCase();
}