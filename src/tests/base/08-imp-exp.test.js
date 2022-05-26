import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp"
import heroes from "../../data/heroes";

describe('Pruebas en 08-imp-ext', () => { 
    test('Debe retornar un heroe', () => { 
        const id = 1
        const heroe = getHeroeById(id);
        
        const heroeData = heroes.find(h => h.id === id);
        expect(heroeData).toEqual(heroe);
     })

     test('Debe retornar undefined', () => {
        const id = 10
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined)
     })

     test('Debe retornar el arreglo de los heroes de DC', () => { 
         const owner = 'DC';
         const heroesFilter = getHeroesByOwner(owner);
         const heroesData = heroes.filter(h => h.owner === owner);
         expect(heroesFilter).toEqual(heroesData)
      })

      test('Debe retornar 2 como cantidad de heroes', () => { 
        const owner = 'Marvel';
        const heroesFilter = getHeroesByOwner(owner);
        const lenHeroes = heroesFilter.length;
        expect(lenHeroes).toBe(2);
       })
 })