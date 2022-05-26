import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string.test.js', () => { 
    test('Pruebas en getSaludo', () => { 
        const nombre = 'Rayd';
        const saludo = getSaludo( nombre );

        expect(saludo).toBe(`Hola ${nombre}`);
     });

     test('Pruebas en getSaludo() en parametros', () => { 
        const saludo = getSaludo();

        expect(saludo).toBe('Hola Carlos');
      })
 })