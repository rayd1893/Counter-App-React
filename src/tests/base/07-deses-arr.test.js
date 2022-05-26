import { retornaArreglo } from "../../base/07-deses-arr"

describe('Prueba en 07-deses-arr', () => { 
    
    test('Debe retornar un arreglo', () => { 
        const [letra, numero] = retornaArreglo(); //['ABC', 123]

        expect(letra).toBe('ABC');
        expect(typeof letra).toBe('string');

        expect(numero).toBe(123);
        expect(typeof numero).toBe('number');
     })
 })