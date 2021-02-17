import {Personne} from './personne';
import {Adresse} from './adresse';
import { Enseignant } from './enseignant';
/*pour l'exercice 1
let adresse:Adresse =new Adresse("triqk eljadida","24000","chtouka");
let personne: Personne = new Personne(20,"mouhiha","mohamed",adresse);
console.log(personne);
 afffiche :
 Personne {
  _num: 20,
  _nom: 'mouhiha',
  _prenom: 'mohamed',
  _adresse: Adresse {
    _rue: 'triqk eljadida',
    _codePostal: '24000',
    _ville: 'chtouka'
  }
*/

let enseignant: Enseignant = new Enseignant();
enseignant.num = 3;
enseignant.nom = "green";
enseignant.prenom = "jonas";
enseignant.salaire = 1700;
console.log(enseignant);
