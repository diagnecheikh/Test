
export function getfizzBuzzle(n: number): string {
    let resultat = '';
       if (n % 5 === 0 && n % 3 === 0) {
            return 'FizzBuzzle'; 
        }
        else if (n % 3 === 0) {
            return 'Fizz';
        }
        else if (n % 5 === 0) {
            return'Buzzle';
        }
        
      return resultat;  
    }
    
