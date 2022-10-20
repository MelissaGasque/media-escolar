function calcular(){
    let nome = window.document.getElementById("nome")
    let num1 = window.document.getElementById("num1")
    let num2 = window.document.getElementById("num2")
    let num3 = window.document.getElementById("num3")
    let res = document.getElementById("res")

    let n1 = Number(num1.value)
    let n2 = Number(num2.value)
    let n3 = Number(num3.value)
    media = (((2*n1)+ (3*n2) +(5*n3))/10).toFixed(2)

    if(media<6){
    res.innerHTML +=`<p> ${nome}; Media: ${media}; <strong> Reprovado </strong> </p>`
    } else
    if(media=>6){
    res.innerHTML +=`<p> ${nome}; Media: ${media}; <strong> Aprovado </strong></p>`
    }
}