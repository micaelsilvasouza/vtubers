/*
    retornos significados

        2 - url indefinida ou vazia
        3 - url não possui query

*/

function getQuery(url = "") {
    let array_query = []
    let object_query = {}
    if(url == undefined || url == ""){ // dividindo a query da url
        return 2
    }
    array_query = url.split("?")
    
    if(array_query.length < 2){ //dividindo os valores da query
        return 3
    }
    
    array_query = array_query[1].split("&")
    
    for (const query of array_query) {
        let data = query.split("=")
        object_query[data[0]] = data[1]
    }

    return object_query
}