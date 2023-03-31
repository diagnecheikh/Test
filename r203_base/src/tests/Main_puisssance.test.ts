import { puissanceMult } from "../metier/Main";

test("cas général", () => {
  expect(puissanceMult(3, 8)).toBe(6561);
});

test("puissance de 0", () => {
  expect(puissanceMult(0, 2)).toBe(0);
});

test("puissance d'un négatif", () => {
    expect (puissanceMult(-2,2)).toBe(4);
});