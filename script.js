class Calculator {
  constructor(num1, num2, operator) {
      this.num1 = num1;
      this.num2 = num2;
      this.operator = operator;
  }

  add() {
      return this.num1 + this.num2;
  }

  subtract() {
      return this.num1 - this.num2;
  }

  multiply() {
      return this.num1 * this.num2;
  }

  divide() {
      return this.num1 / this.num2;
  }

  calculate() {
      this.num1 = Number(document.getElementById('num1').value);
      this.num2 = Number(document.getElementById('num2').value);
      this.operator = document.getElementById('operator').value;

      if (typeof this.num1 !== 'number' || typeof this.num2 !== 'number') {
          document.getElementById('result').innerText = "Введите корректные числа";
          return;
      }

      let result;

      if (this.operator === '+') {
          result = this.add();
      } else if (this.operator === '-') {
          result = this.subtract();
      } else if (this.operator === '*') {
          result = this.multiply();
      } else if (this.operator === '/') {
          result = this.divide();
      } else {
          document.getElementById('result').innerText = "Некорректный оператор";
          return;
      }

      document.getElementById('result').innerText = `Результат: ${result}`;
  }

  clearInputs() {
      document.getElementById('num1').value = '';
      document.getElementById('num2').value = '';
      document.getElementById('operator').value = '';
      document.getElementById('result').innerText = '';
  }
}

const calculator = new Calculator();
