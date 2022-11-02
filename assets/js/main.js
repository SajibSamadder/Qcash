let paying_taxes_form = document.querySelector("#paying_taxes form")
let form_selects = document.querySelectorAll(".form-select")

paying_taxes_form.addEventListener("submit", (e) => {
    e.preventDefault()
    inputSelect()
    let tabelData = inputSelect()
    showInputDataInTabel(tabelData)
})

let bill_type = document.querySelector(".bill_type")
function inputSelect() {
    const tabelData = {}
    if (bill_type.value == "Bill Type") {
        alert("invalid select bill type")

    } else {
        tabelData["bill_type"] = bill_type.value
    }
    return tabelData
}
function showInputDataInTabel({ bill_type }) {

    console.log(bill_type)
}
