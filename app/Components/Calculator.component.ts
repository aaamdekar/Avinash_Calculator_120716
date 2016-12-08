import { Component } from '@angular/core';


@Component({
  selector: 'calculator',
//   templateUrl: './components/Calculator.html'
 template: `
           <div>
           <h5>Enter values to calculate </h5>
            <input type="text" [(ngModel)]="input1"> 
           <span [innerHtml]="value"></span>    
           <input type="text" [(ngModel)]="input2">
           <button (click)="computeResult()">=</button>
           {{resultValue}}
           {{name}}
           </div>
           <br><br>
            <button (click)="selectedOperation('+')">+</button>
            <button (click)="selectedOperation('-')">-</button>
            <button (click)="selectedOperation('x')">x</button>
            <button (click)="selectedOperation('/')">/</button>
           <br><br>
             <button (click)="selectedOperation('sqrt')">√x</button>
            <button (click)="selectedOperation('sq')">x^2</button>
            <button (click)="selectedOperation('F2C')">°F → °C</button>
            <button (click)="selectedOperation('C2F')">°C → °F</button>
                    
    `,
})
export class CalculatorComponent  { 
     value : string = '';
     private input1;
     private input2;
     name: string;
     leftHandNumber: number;
     rightHandNumber: number;
     resultValue : number;
     tempString : string;

    constructor() {
        this.input1;
        this.input2;
        this.name = '';
        this.value =  ''; 
    }
    
    selectedOperation(operator: string){
       this.value = operator;
    }    

    computeResult(){
        this.name = '';
        this.leftHandNumber = parseFloat(this.input1);
        this.rightHandNumber = parseFloat(this.input2);
           switch(this.value){
             case '+': 
                this.resultValue = this.leftHandNumber + this.rightHandNumber;
                break;
             case '-':           
                this.resultValue = this.leftHandNumber - this.rightHandNumber;
                break;
            case 'x' :          
                this.resultValue = this.leftHandNumber * this.rightHandNumber;
                break;
            case '/' :
                this.resultValue = this.leftHandNumber / this.rightHandNumber;
                break;
            case 'sqrt': 
                this.resultValue = Math.sqrt(this.leftHandNumber);
                break;
             case 'sq':           
                this.resultValue = this.leftHandNumber * this.leftHandNumber;                
                break;
            case 'F2C' :          
                this.resultValue = (this.leftHandNumber -32) * (5/9);
                this.name = 'Celcius';
                break;
            case 'C2F' :
                this.resultValue = (this.leftHandNumber +32) * (9/5);
                this.name = 'Farenheit';
                break;
           }

        }

    }
    
  
