import {identity} from "../metier/identity";

test("cas général", () =>  {
    expect(identity("DUPONT", "Jean")).toBe("DJ");
});
test ("le prénom ne doit pas être vide", () => {
    expect(() => identity("DUPONT", "")).toThrow("Impossible de créer une initiale !");
});
test ("le nom ne doit pas être vide", () => {
    expect(() => identity("", "Jean")).toThrow("Impossible de créer une initiale !");
});
test ("les deux ne doivent pas être vide", () => {
    expect(() => identity("", "")).toThrow("Impossible de créer une initiale !");
});

test("cas prénom 1 caractère", () => {
    expect(identity("DUPONT", "J")).toBe("X DUPONT")});