"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enseignant = void 0;
var personne_1 = require("./personne");
var Enseignant = /** @class */ (function (_super) {
    __extends(Enseignant, _super);
    function Enseignant(_num, _nom, _prenom, _salaire) {
        var _this = _super.call(this, _num, _nom, _prenom) || this;
        _this._salaire = _salaire;
        return _this;
    }
    Object.defineProperty(Enseignant.prototype, "salaire", {
        set: function (_salaire) {
            this._salaire = _salaire;
        },
        enumerable: false,
        configurable: true
    });
    return Enseignant;
}(personne_1.Personne));
exports.Enseignant = Enseignant;
