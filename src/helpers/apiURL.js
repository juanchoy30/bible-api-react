
export const apiURL = (url, bibleId, bookId, chapterId) => {
    return   ( bibleId && chapterId) ? `${ url }/v1/bibles/${ bibleId }/chapters/${ chapterId }?content-type=json&include-verse-numbers=true`
                : ( bibleId && bookId) ? `${ url }/v1/bibles/${ bibleId }/books/${ bookId }/chapters`
                : ( bibleId ) ? `${ url }/v1/bibles/${ bibleId }/books`
                : `${ url }/v1/bibles`;
}
