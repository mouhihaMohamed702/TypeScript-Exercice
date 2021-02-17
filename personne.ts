import {Adresse} from './adresse';
export class Personne {
    
    public constructor(private _num?: number,
        private _nom?: string,
        private _prenom?: string,
        private _adresse?:Adresse) {
        }

public set num(_num : number) {
    this._num = (_num >= 0 ? _num : 0);
    }
    public set nom(_nom: string) {
    this._nom = _nom;
    }
    public set prenom(_prenom: string) {
    this._prenom = _prenom;
    }

    public set adresse(_adresse:Adresse){
        this._adresse=_adresse;
    }
    public get num() : number {
        return this._num;
        }
        public get nom(): string {
        return this._nom;
        }
        public get prenom(): string {
        return this._prenom;
        }
        public get adresse(): Adresse {
            return this._adresse;
            }
        
    
}
