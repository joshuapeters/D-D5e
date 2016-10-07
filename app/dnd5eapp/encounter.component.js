"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var monster_service_1 = require('./monster.service');
var EncounterComponent = (function () {
    function EncounterComponent(monsterService) {
        this.monsterService = monsterService;
        this.players = [];
    }
    EncounterComponent.prototype.generateEncounter = function () {
    };
    EncounterComponent.prototype.addPlayer = function (number) {
        this.players.push(number);
    };
    EncounterComponent.prototype.removePlayer = function (index) {
        this.players.splice(index, 1);
    };
    EncounterComponent = __decorate([
        core_1.Component({
            selector: 'encounter',
            moduleId: module.id,
            template: "\n\t<div class=\"dropdown\">\n\t\t<button class=\"btn btn-primary dropdown-toogle\" type=\"button\" data-toggle=\"dropdown\">Add Player\n\t\t<span class=\"caret\"></span></button>\n\t\t<ul class=\"dropdown-menu\">\n\t\t\t<li><a (click)=\"addPlayer(1)\"> Level 01 </a></li>\n\t\t\t<li><a (click)=\"addPlayer(2)\"> Level 02 </a></li>\n\t\t\t<li><a (click)=\"addPlayer(3)\"> Level 03 </a></li>\n\t\t\t<li><a (click)=\"addPlayer(4)\"> Level 04 </a></li>\t\t\t\n\t\t\t<li><a (click)=\"addPlayer(5)\"> Level 05 </a></li>\t\t\t\n\t\t\t<li><a (click)=\"addPlayer(6)\"> Level 06 </a></li>\t\t\t\n\t\t\t<li><a (click)=\"addPlayer(7)\"> Level 07 </a></li>\t\t\t\n\t\t\t<li><a (click)=\"addPlayer(8)\"> Level 08 </a></li>\t\t\t\n\t\t\t<li><a (click)=\"addPlayer(9)\"> Level 09 </a></li>\t\t\t\n\t\t\t<li><a (click)=\"addPlayer(10)\"> Level 10 </a></li>\n\t\t\t<li><a (click)=\"addPlayer(11)\"> Level 11 </a></li>\n\t\t\t<li><a (click)=\"addPlayer(12)\"> Level 12 </a></li>\n\t\t\t<li><a (click)=\"addPlayer(13)\"> Level 13 </a></li>\n\t\t\t<li><a (click)=\"addPlayer(14)\"> Level 14 </a></li>\t\t\t\n\t\t\t<li><a (click)=\"addPlayer(15)\"> Level 15 </a></li>\t\t\t\n\t\t\t<li><a (click)=\"addPlayer(16)\"> Level 16 </a></li>\t\t\t\n\t\t\t<li><a (click)=\"addPlayer(17)\"> Level 17 </a></li>\t\t\t\n\t\t\t<li><a (click)=\"addPlayer(18)\"> Level 18 </a></li>\t\t\t\n\t\t\t<li><a (click)=\"addPlayer(19)\"> Level 19 </a></li>\t\t\t\n\t\t\t<li><a (click)=\"addPlayer(20)\"> Level 20 </a></li>\t\t\n\t\t</ul>\n\t</div>\n\n\t<div class=\"panel panel-info\" *ngIf=\"players.length > 0\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-2 bg-success\" style=\"margin: 10px; text-align: center\" *ngFor=\"let player of players\">\n\t\t\t\t\t<button class=\"close\" (click)=\"removePlayer(index-1)\">x</button>Level {{player}}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [monster_service_1.MonsterService])
    ], EncounterComponent);
    return EncounterComponent;
}());
exports.EncounterComponent = EncounterComponent;
//# sourceMappingURL=encounter.component.js.map