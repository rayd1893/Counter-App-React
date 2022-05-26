import { getUser, getUsuarioActivo } from "../../base/05-funciones"

describe('Pruebas en 05-funciones', () => { 
    
    test('Debe retornar un objeto', () => {  
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user =  getUser();

        expect(user).toEqual(userTest);
    });

    test('Debe retornar un objeto', () => { 
        const userActivoTest = {
            uid: 'ABC567',
            username: 'rayd1893'
        };

        const userActivo = getUsuarioActivo('rayd1893');
        expect(userActivoTest).toEqual(userActivo)
     })
 })