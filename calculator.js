class Calculator {

	constructor(num1, num2) {
		this.num1 = num1;
		this.num2 = num2
	}

	static add(num1, num2) {
		return num1 + num2
	}

	divide() {
		return this.num1 / this.num2
	}
}

const calculator = new Calculator(12,4)

// FOR NON-STATIC METHOD
console.log(`The result of the division is ${calculator.divide()}`)

// FOR STATIC METHOD
console.log(`The result of the summation is ${Calculator.add(45,8)}`)
