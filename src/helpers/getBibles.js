import { apiKey } from "../shared/apiKey"
import { baseURL } from "../shared/baseURL.js"

export const getBibles = async() => {

    const url = `${baseURL}/v1/bibles`;
    
    const resp = await fetch( url, {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'api-key': apiKey
        }
    })

    const { data } = await resp.json();

    const bibles = data.map( book => {
        return {
            id: book.id,
            title: book.name,
            localName: book.nameLocal,
            abbreviation: book.abbreviation,
            description: book.description,
            localDescription: book.descriptionLocal,
            language: book.language.name,
            languageLocal: book.language.nameLocal
        }
    });

    return bibles;
    
}