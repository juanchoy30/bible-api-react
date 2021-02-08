import { getData } from "../../helpers/getData";
import { baseURL } from "../../shared/baseURL";

describe('getBibiles tests', () => {

    const url = `${baseURL}/v1/bibles`;
    
    test('data should be type expected', async() => {
        
        const data = await getData( url );

        expect( typeof data ).toBe('object');

    });

    test('data objects should be type expected', async() => {
        
        const [ firstObject ] = await getData( url );

        const { id, name, nameLocal } = firstObject

        expect( typeof id ).toBe('string');
        expect( typeof name ).toBe('string');
        expect( typeof nameLocal ).toBe('string');

    });
    

})
