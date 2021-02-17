import { Personne } from "./personne";
export class Etudiant extends Personne {
    constructor(_num?: number,
        _nom?: string,
        _prenom?: string,
        private _niveau ?: number) {
        super(_num, _nom, _prenom);
        
        }
     set niveau (_niveau :number)   {
        this._niveau =_niveau ;
     }
}
