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
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
var monster_1 = require('./monster');
var MonsterService = (function () {
    function MonsterService(http) {
        this.http = http;
        this.monsters = [];
    }
    MonsterService.prototype.getMonsters = function () {
        var _this = this;
        if (this.monsters.length > 0) {
            return Rx_1.Observable.fromPromise(Promise.resolve(this.monsters));
        }
        else {
            return this.http.get('/app/monsters.xml')
                .map(function (response) { return _this.extractData(response); })
                .catch(this.handleError);
        }
    };
    MonsterService.prototype.extractData = function (res) {
        console.log(res);
        var doc = JSON.parse(xml2json(res.text(), "  "));
        var monsters = doc.compendium.monster;
        for (var i = monsters.length - 1; i >= 0; i--) {
            console.log(monsters[i]);
            var monster = new monster_1.Monster();
            monster.Name = monsters[i].name;
            monster.Size = monsters[i].size;
            monster.Type = monsters[i].type.replace(", monster manual", "");
            monster.Align = monsters[i].alignment;
            if (monsters[i].cr.indexOf("/") != -1) {
                monster.CR = eval(monsters[i].cr);
            }
            else {
                monster.CR = parseInt(monsters[i].cr);
            }
            monster.AC = monsters[i].ac;
            monster.HP = monsters[i].hp;
            monster.Speed = monsters[i].speed;
            if (monsters[i].hasOwnProperty("skill")) {
                monster.Bonuses = monsters[i].skill.split(',');
            }
            monster.Perception = monsters[i].passive;
            monster.Strength = monsters[i].str;
            monster.Dexterity = monsters[i].dex;
            monster.Wisdom = monsters[i].wis;
            monster.Intelligence = monsters[i].int;
            monster.Charisma = monsters[i].cha;
            monster.Constitution = monsters[i].con;
            this.monsters.push(monster);
        }
        return this.monsters;
    };
    MonsterService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    MonsterService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MonsterService);
    return MonsterService;
}());
exports.MonsterService = MonsterService;
//# sourceMappingURL=monster.service.js.map