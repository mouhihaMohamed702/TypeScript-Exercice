"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personne = void 0;
var Personne = /** @class */ (function () {
    function Personne(_num, _nom, _prenom, _adresse) {
        this._num = _num;
        this._nom = _nom;
        this._prenom = _prenom;
        this._adresse = _adresse;
    }
    Object.defineProperty(Personne.prototype, "num", {
        get: function () {
            return this._num;
        },
        set: function (_num) {
            this._num = (_num >= 0 ? _num : 0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personne.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        set: function (_nom) {
            this._nom = _nom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personne.prototype, "prenom", {
        get: function () {
            return this._prenom;
        },
        set: function (_prenom) {
            this._prenom = _prenom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personne.prototype, "adresse", {
        get: function () {
            return this._adresse;
        },
        set: function (_adresse) {
            this._adresse = _adresse;
        },
        enumerable: false,
        configurable: true
    });
    return Personne;
}());
exports.Personne = Personne;
