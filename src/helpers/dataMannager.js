
export const dataMannager = ( data, bibleId, chapterId ) => {
    return (chapterId) 
        ? (
            data.content.map( array => {
                const text = array.items;
                // const text = array.items.map( item => {
                //     return item.text
                // })
                // const verse = array.items.verse.map( item => {
                //     return (item.items.verse.map( verse => {
                //         return verse.text
                //     } ))
                // })

                return {
                    text,
                    // verse
                }
            })
            
        )  
        :( !bibleId ) 
        ? (
            data.map( bible => {
                return {
                    id: bible.id,
                    title: bible.name,
                    localName: bible.nameLocal,
                    abbreviation: bible.abbreviation,
                    description: bible.description,
                    localDescription: bible.descriptionLocal,
                    language: bible.language.name,
                    languageLocal: bible.language.nameLocal
                }
            })
        )
        : data
}
