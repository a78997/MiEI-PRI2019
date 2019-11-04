  
function removeAluno(ident){
    console.log("Remover aluno " + ident)
    axios.delete('/alunos/' + ident)
        .then(response => window.location.assign('/alunos'))
        .catch(error => console.log(error))
}

function removeNota(ident){
    var path = ident.spit(',')
    var id = path[0]
    var ind = path[1]
    console.log("Remover nota " + ind)
    axios.delete(`/alunos/${id}/notas/${ind}`)
        .then(response => window.location.assign(`/alunos/${id}`))
        .catch(error => console.log(error))
}