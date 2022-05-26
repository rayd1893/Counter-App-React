describe('Pruebas en archivo demo.test.js', () => { 

    test('Deben ser iguales', () => {
        const mensaje = 'Hola Mundo';
        const mensaje2 = `Hola Mundo`;
    
        expect(mensaje).toBe(mensaje2);
    })

 });

