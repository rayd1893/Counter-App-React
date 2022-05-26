import { getImagen } from "../../base/11-async-await"

describe('Validando async-await', () => { 
    test('Debe retornar una url', async () => { 
        const url = await getImagen();
        console.log(url)
        expect(url.includes('https://')).toBe(true);
     })
 })