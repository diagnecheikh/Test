export function multAdd(x: number, y: number): number {
  let val = 0;

  for (let i = 0; i < y; i++) {
    val += x;
  }
  return val;
}

export function puissanceMult(x: number, y: number): number {
  let val = 1;

  for (let i = 0; i < y; i++) {
    val = multAdd(val, x);
  }
  return val;
}