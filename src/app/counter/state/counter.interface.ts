type Type = 'INCREMENT' | 'DECREMENT' | 'RESET';
export interface Action {
    type: Type;
}
export interface Counter {
    counter: number;
}