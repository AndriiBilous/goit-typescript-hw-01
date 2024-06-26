//Void
type Message = string;
function showMessage(message: Message): void {
    console.log(message);
}
showMessage('Hello, to much information');

//Return
function calc(num1: number, num2: number): number {
    return num1 + num2;
}
console.log(calc(5, 10));

//Never
function customError(): never {
    throw new Error('Error');
}

export {};
