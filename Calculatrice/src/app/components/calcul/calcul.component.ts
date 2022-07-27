import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CalculService } from '../../services/calcul.service';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.scss']
})
export class CalculComponent implements OnInit {

  res!: number;

  calculForm = this.fb.group({
    a: [0, [Validators.required]],
    b: [0, [Validators.required]],
    calcul: ["", [Validators.required]]
  })

  constructor(private calculServ: CalculService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    switch (this.calculForm.value.calcul) {
      case "+":
        this.res = this.calculServ.addition(Number(this.calculForm.value.a!), Number(this.calculForm.value.b!));
        break;
      case "-":
        this.res = this.calculServ.soustraction(Number(this.calculForm.value.a!), Number(this.calculForm.value.b!));
        break;
      case "*":
        this.res = this.calculServ.multiplication(Number(this.calculForm.value.a!), Number(this.calculForm.value.b!));
        break;
      case "/":
        this.res = this.calculServ.division(Number(this.calculForm.value.a!), Number(this.calculForm.value.b!));
        break;
      case "%":
        this.res = this.calculServ.modulo(Number(this.calculForm.value.a!), Number(this.calculForm.value.b!));
        break;
    }
  }

}
