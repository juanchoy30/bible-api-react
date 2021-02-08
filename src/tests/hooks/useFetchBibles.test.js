import { renderHook } from '@testing-library/react-hooks';
import { useFetchBibles } from '../../hooks/useFetchBibles';
import { baseURL } from '../../shared/baseURL';

describe('useFetchBibles tests', () => {
    
    test('should return default info', () => {
        
        const { result } = renderHook( () => useFetchBibles( baseURL ) );
        const { data, loading, error } = result.current;

        expect( data ).toEqual( [] );
        expect( loading ).toBe( true );
        expect( error ).toBe( null );


    });

    test('should return the wanted info, loading to be false and error null', async() => {
        
        const { result, waitForNextUpdate  } = renderHook( () => useFetchBibles( baseURL ) );
        await waitForNextUpdate();
        
        const { data, loading, error } = result.current;

        expect( typeof data ).toBe(null);
        expect( loading ).toBe( false );
        expect( error ).toBe( null );
////Continuee

    });
    

})
