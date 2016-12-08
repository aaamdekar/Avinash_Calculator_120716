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
var CalculatorComponent = (function () {
    function CalculatorComponent() {
        this.value = '';
        this.input1;
        this.input2;
        this.name = '';
        this.value = '';
    }
    CalculatorComponent.prototype.selectedOperation = function (operator) {
        this.value = operator;
    };
    CalculatorComponent.prototype.computeResult = function () {
        this.name = '';
        this.leftHandNumber = parseFloat(this.input1);
        this.rightHandNumber = parseFloat(this.input2);
        switch (this.value) {
            case '+':
                this.resultValue = this.leftHandNumber + this.rightHandNumber;
                break;
            case '-':
                this.resultValue = this.leftHandNumber - this.rightHandNumber;
                break;
            case 'x':
                this.resultValue = this.leftHandNumber * this.rightHandNumber;
                break;
            case '/':
                this.resultValue = this.leftHandNumber / this.rightHandNumber;
                break;
            case 'sqrt':
                this.resultValue = Math.sqrt(this.leftHandNumber);
                break;
            case 'sq':
                this.resultValue = this.leftHandNumber * this.leftHandNumber;
                break;
            case 'F2C':
                this.resultValue = (this.leftHandNumber - 32) * (5 / 9);
                this.name = 'Celcius';
                break;
            case 'C2F':
                this.resultValue = (this.leftHandNumber + 32) * (9 / 5);
                this.name = 'Farenheit';
                break;
        }
    };
    CalculatorComponent = __decorate([
        core_1.Component({
            selector: 'calculator',
            //   templateUrl: './components/Calculator.html'
            template: "\n           <div>\n           <h5>Enter values to calculate </h5>\n            <input type=\"text\" [(ngModel)]=\"input1\"> \n           <span [innerHtml]=\"value\"></span>    \n           <input type=\"text\" [(ngModel)]=\"input2\">\n           <button (click)=\"computeResult()\">=</button>\n           {{resultValue}}\n           {{name}}\n           </div>\n           <br><br>\n            <button (click)=\"selectedOperation('+')\">+</button>\n            <button (click)=\"selectedOperation('-')\">-</button>\n            <button (click)=\"selectedOperation('x')\">x</button>\n            <button (click)=\"selectedOperation('/')\">/</button>\n           <br><br>\n             <button (click)=\"selectedOperation('sqrt')\">\u221Ax</button>\n            <button (click)=\"selectedOperation('sq')\">x^2</button>\n            <button (click)=\"selectedOperation('F2C')\">\u00B0F \u2192 \u00B0C</button>\n            <button (click)=\"selectedOperation('C2F')\">\u00B0C \u2192 \u00B0F</button>\n                    \n    ",
        }), 
        __metadata('design:paramtypes', [])
    ], CalculatorComponent);
    return CalculatorComponent;
}());
exports.CalculatorComponent = CalculatorComponent;
//# sourceMappingURL=Calculator.Component.js.map