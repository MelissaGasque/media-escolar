function calcular(){
    let nome = window.document.getElementById("nome").value
    let num1 = window.document.getElementById("num1")
    let num2 = window.document.getElementById("num2")
    let num3 = window.document.getElementById("num3")
    let peso1 = document.getElementById("peso1")
    let peso2 = document.getElementById("peso2")
    let pesot = document.getElementById("pesot")
    let res = document.getElementById("res")
    // Trazendo as informações que serão lançadas

    let n1 = Number(num1.value)
    let n2 = Number(num2.value)
    let n3 = Number(num3.value)
    let p1 = Number(peso1.value)
    let p2 = Number (peso2.value)
    let pt = Number(pesot.value) 
    // Transformando os dados em números

    media = (((p1*n1)+ (p2*n2) +(pt*n3))/(p1+p2+pt)).toFixed(2)

    if(media<6){
     res.innerHTML += `<li> ${nome}; Media ${media}; <strong> Reprovado </strong> </li>`
    } else
    if(media=>6){
        res.innerHTML += `<li> ${nome}; Media ${media}; <strong> Aprovado </strong> </li>`
    }
    document.getElementById("nome").value = null
    document.getElementById("num1").value = null
    document.getElementById("num2").value = null
    document.getElementById("num3").value = null

}