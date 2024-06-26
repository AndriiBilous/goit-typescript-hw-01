//Union Type
type Value = string | number | boolean;
let value: Value;
value = 'Hello';
value = 101;
value = true;

//Literal Type
type ButtonState = 'enable' | 'disable';
let button: ButtonState;
button = 'enable';
button = 'disable';

export {};
