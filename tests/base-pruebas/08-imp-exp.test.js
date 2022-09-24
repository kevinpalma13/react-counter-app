import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";


describe('Pruebas con 08-imp-exp', () => { 

    test('getHeroeById debe retornar un heroe por Id', () => { 
    
        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })
    
    })

    test('getHeroeById retorna undefined si no existe', () => { 
    
        const id  = 100;
        const hero = getHeroeById(id);

        //expect(hero).toBe(undefined)
        expect(hero).toBeFalsy();
    
    })

    test('getheroesByOwner DC', () => { 
    
        const owner = "DC";
        const heros = getHeroesByOwner(owner);

        expect(heros.length).toBe(3);

        expect(heros).toEqual(heroes.filter( (heroe) => heroe.owner === owner ))
    
    })

    test('getheroesByOwner Marvel', () => { 
    
        const owner = "Marvel";
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);
    
    })

})