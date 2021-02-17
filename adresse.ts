export class Adresse{
    public constructor(private _rue?: string,
        private _codePostal?: string,
        private _ville?: string){}
        public get rue():string{
            return this._rue;
        }
        public set rue(_rue:string){
            this._rue=_rue;
        }
        public get codePostal():string{
            return this._codePostal;
        }
        public set codePostal(_codePostal:string){
            this._codePostal=_codePostal;
        }
        public get ville():string{
            return this.ville;
        }
        public set ville(_ville:string){
            this._ville=_ville;
        }
}