import { Personne } from "./personne";
export class Enseignant extends Personne {
    constructor(_num?: number,
        _nom?: string,
        _prenom?: string,
        private _salaire?: number) {
        super(_num, _nom, _prenom);
        
        }
     set salaire(_salaire:number)   {
        this._salaire=_salaire;
     }
}
