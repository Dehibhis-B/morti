export const paginationLogic = (currentPage, residents) => {

    if(!residents){
        return {
            pages: [1],
            residentsInPage: []
        }
    }
    //Cantida de Residentes por pagina
    const RESIDENT_PER_PAGE =20

    //cantdad de paginas
    const totalPages = Math.ceil(residents.lenght / RESIDENT_PER_PAGE)

    //Residente s amostar por pagina
    const sliceStart = (currentPage - 1) * RESIDENT_PER_PAGE
    const sliceEnd = sliceStart + RESIDENT_PER_PAGE
    const residentsInPage = residents.slice(sliceStart, sliceEnd)

    //generar el array de las paginas a mostra
    const pages = []
    for (let i=1; i < totalPages; i++){
        pages.push(i)
    }
    return {
        residentsInPage, pages
    }

}