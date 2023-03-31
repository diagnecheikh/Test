import { getfizzBuzzle } from "./ex1/FizzBuzzle";

test('les multiples de 3 sont remplacés par Fizz', () => {
    expect(getfizzBuzzle(9)).toBe('Fizz');
});

test('Les multiples de 5 sont remplacés par Buzzle', () => {
    expect(getfizzBuzzle(10)).toBe('Buzzle');
});

test('Les multiples de 3 & 5 sont remplacés par FizzBuzzle', () => { 
    expect (getfizzBuzzle(15)).toBe('FizzBuzzle');});

test('Les mutiples de 4 sont remplacés par Spoutnik', () => {
    expect(getfizzBuzzle(16)).toBe('Spoutnik');
});