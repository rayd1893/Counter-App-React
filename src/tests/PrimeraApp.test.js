import { render } from "@testing-library/react";
import '@testing-library/jest-dom'

import PrimeraApp from "../PrimeraApp";

describe('Pruebas en <PrimeraApp />', () => { 
    test('Hola, soy Goku', () => { 
        const saludo = 'Hola, soy Goku';
        const { getByText } = render( <PrimeraApp saludo={saludo} />);
        expect(getByText(saludo)).toBeInTheDocument()
     })
 })