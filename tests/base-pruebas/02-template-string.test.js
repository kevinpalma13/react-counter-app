import { getSaludo } from "../../src/base-pruebas/02-template-string"

describe('Pruebas en 02-template-string', () => { 

    test('getSaludo retornna "Hola Kevin"', () => { 
    
        const name = "Kevin"
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`)
    })

})