let paying_taxes_form = document.forms["payInformation"]
let form_selects = document.querySelectorAll(".form-select")
// "Bill Type" || "Select Your Distic" || "Select Upozila" || "Select Union" || "Select Ward" || "Home/Shop Qality"
paying_taxes_form.addEventListener("submit", (e) => {
    e.preventDefault()
    inputSelect()
})

let showInputData = document.querySelector("#showInputData tbody")
let tabel = document.querySelector("#showInputData")

let loading = document.querySelector(".loading")
let bill_type = document.querySelector(".bill_type")
let distic = document.querySelector(".distic")
let last_tax_pay = document.querySelector(".last_tax_pay")
let upozila = document.querySelector(".upozila")
let union = document.querySelector(".union")
let ward = document.querySelector(".ward")
let bill_id = document.querySelector(".bill_id")
let holding_number = document.querySelector(".holding_number")
let user_name = document.querySelector(".user_name")
let gardian_name = document.querySelector(".gardian_name")
let gardian_radio = document.forms["payInformation"]["gardianRadio"]
let popertyRadio = document.forms["payInformation"]["popertyRadio"]
let mother_name = document.querySelector(".mother_name")
let reg_date = document.querySelector("#reg_date")
let birth_date = document.querySelector("#birth_date")
let nid_no = document.querySelector(".nid_no")
let mobail_number = document.querySelector(".mobail_number")
let room_count = document.querySelector(".room_count")
let annual_evalution = document.querySelector(".annual_evalution")
let tax_levied = document.querySelector(".tax_levied")
let poperty_qality = document.querySelector(".poperty_quality")
let form_select = document.querySelectorAll(".form-select")

function inputSelect() {
    const store = {}
    if (bill_type.value == "Bill Type") {
        bill_type.classList.add("invalid_border")
    } else {
        store["Bill Type"] = bill_type.value
        bill_type.classList.remove("invalid_border")
    }
    if (distic.value == "Select Your Distic") {
        distic.classList.add("invalid_border")
    } else {
        store["Distic"] = distic.value
        distic.classList.remove("invalid_border")
    }
    if (upozila.value == "Select Upozila") {
        upozila.classList.add("invalid_border")
    } else {
        upozila.classList.remove("invalid_border")
        store["Upozila"] = upozila.value
    }
    if (union.value == "Select Union") {
        union.classList.add("invalid_border")
    } else {
        union.classList.remove("invalid_border")
        store["union"] = union.value
    }
    // ward here
    if (ward.value == "Select Ward") {
        ward.classList.add("invalid_border")
    } else {
        ward.classList.remove("invalid_border")
        store["ward"] = ward.value
    }
    // Bill Id here
    if (bill_id.value == "") {
        bill_id.classList.add("invalid_border")
    } else {
        bill_id.classList.remove("invalid_border")
        store["bull id"] = bill_id.value
    }
    // Holding Number here
    if (holding_number.value == "") {
        holding_number.classList.add("invalid_border")
    } else {
        holding_number.classList.remove("invalid_border")
        store["holding number"] = holding_number.value
    }
    // name here
    if (user_name.value == "") {
        user_name.classList.add("invalid_border")
    } else {
        user_name.classList.remove("invalid_border")
        store["user name"] = user_name.value
    }
    // gardian here
    if (gardian_name.value == "") {
        gardian_name.classList.add("invalid_border")
    } else {
        gardian_name.classList.remove("invalid_border")
    }
    // name here
    if (gardian_radio[0].checked == false && gardian_radio[1].checked == false) {
        gardian_radio[0].classList.add("invalid_border")
        gardian_radio[1].classList.add("invalid_border")
    } else {
        gardian_radio[0].classList.remove("invalid_border")
        gardian_radio[1].classList.remove("invalid_border")

        if (gardian_radio[0].checked == true) {
            store[gardian_radio[0].attributes.id.nodeValue + " Name"] = gardian_name.value
        } else if (gardian_radio[1].checked == true) {
            store[gardian_radio[1].attributes.id.nodeValue + " Name"] = gardian_name.value
        }
    }
    // mother name
    if (mother_name.value == "") {
        mother_name.classList.add("invalid_border")
    } else {
        mother_name.classList.remove("invalid_border")
        store["mother name"] = mother_name.value
    }
    // reg date
    if (reg_date.value == "") {
        reg_date.classList.add("invalid_border")
    } else {
        reg_date.classList.remove("invalid_border")
        store["reg date"] = reg_date.value
    }
    // birth date
    if (birth_date.value == "") {
        birth_date.classList.add("invalid_border")
    } else {
        birth_date.classList.remove("invalid_border")
        store["birth date"] = birth_date.value
    }

    // nid_no
    if (nid_no.value == "") {
        nid_no.classList.add("invalid_border")
    } else if (!Number.parseInt(nid_no.value)) {
        nid_no.classList.add("invalid_border")
    }
    else {
        store["nid_no"] = nid_no.value
        nid_no.classList.remove("invalid_border")
    }
    // mobail_number
    if (mobail_number.value == "") {
        mobail_number.classList.add("invalid_border")
    } else if (!Number.parseInt(mobail_number.value)) {
        mobail_number.classList.add("invalid_border")
    }
    else {
        store["mobil_number"] = mobail_number.value
        mobail_number.classList.remove("invalid_border")
    }

    // gardian here
    if (poperty_qality.value == "Home/Shop Qality") {
        poperty_qality.classList.add("invalid_border")
    } else {
        poperty_qality.classList.remove("invalid_border")
    }
    // name here
    if (popertyRadio[0].checked == false && popertyRadio[1].checked == false) {
        popertyRadio[0].classList.add("invalid_border")
        popertyRadio[1].classList.add("invalid_border")
    } else {
        popertyRadio[0].classList.remove("invalid_border")
        popertyRadio[1].classList.remove("invalid_border")

        if (popertyRadio[0].checked == true) {
            store[popertyRadio[0].attributes.id.nodeValue] = poperty_qality.value
        } else if (gardian_radio[1].checked == true) {
            store[popertyRadio[1].attributes.id.nodeValue] = poperty_qality.value
        }
    }
    // room_count
    if (room_count.value == "") {
        room_count.classList.add("invalid_border")
    } else if (!Number.parseInt(room_count.value)) {
        room_count.classList.add("invalid_border")
    }
    else {
        store["count of room"] = room_count.value
        room_count.classList.remove("invalid_border")
    }

    // annual_evalution
    if (annual_evalution.value == "") {
        annual_evalution.classList.add("invalid_border")
    } else if (!Number.parseInt(annual_evalution.value)) {
        annual_evalution.classList.add("invalid_border")
    }
    else {
        store["annual evalution"] = annual_evalution.value
        annual_evalution.classList.remove("invalid_border")
    }
    // tax_levied
    if (tax_levied.value == "") {
        tax_levied.classList.add("invalid_border")
    } else if (!Number.parseInt(tax_levied.value)) {
        tax_levied.classList.add("invalid_border")
    }
    else {
        store["tax levied"] = tax_levied.value
        tax_levied.classList.remove("invalid_border")
    }
    // last_tax_pay
    if (last_tax_pay.value == "") {
        last_tax_pay.classList.add("invalid_border")
    } else if (!Number.parseInt(last_tax_pay.value)) {
        last_tax_pay.classList.add("invalid_border")
    }
    else {
        store["last tax pay"] = last_tax_pay.value
        last_tax_pay.classList.remove("invalid_border")
    }
    // end validation
    if (bill_type.value == "Bill Type") {
    } else if (distic.value == "Select Your Distic") {
    } else if (upozila.value == "Select Upozila") {

    } else if (union.value == "Select Union") {

    } else if (ward.value == "Select Ward") {

    } else if (bill_id.value == "") {

    } else if (holding_number.value == "") {

    } else if (user_name.value == "") {

    } else if (gardian_name.value == "") {

    } else if (gardian_radio[0].checked == false && gardian_radio[1].checked == false) {

    }
    else if (mother_name.value == "") {

    } else if (reg_date.value == "") {

    } else if (birth_date.value == "") {

    } else if (nid_no.value == "") {

    } else if (!Number.parseInt(nid_no.value)) {

    }
    else if (mobail_number.value == "") {

    } else if (!Number.parseInt(mobail_number.value)) {

    } else if (popertyRadio[0].checked == false && popertyRadio[1].checked == false) {

    }
    else if (poperty_qality.value == "Home/Shop Qality") {

    }
    else if (room_count.value == "") {

    } else if (!Number.parseInt(room_count.value)) {

    }
    else if (annual_evalution.value == "") {

    } else if (!Number.parseInt(annual_evalution.value)) {

    } else if (tax_levied.value == "") {

    } else if (!Number.parseInt(tax_levied.value)) {

    }
    else if (last_tax_pay.value == "") {
    } else if (!Number.parseInt(last_tax_pay.value)) {
    }
    else {
        loading.style.display = "block"
        showInputData.innerHTML = ''
        tabel.style.display = "none"
        setTimeout(() => {
            showInputDataInTabel(store)
            tabel.style.display = "inline-table"
            bill_type.value = "Bill Type"
            distic.value = "Select Your Distic"
            upozila.value = "Select Upozila"
            union.value = "Select Union"
            ward.value = "Select Ward"
            bill_id.value = ""
            holding_number.value = ""
            user_name.value = ""
            gardian_name.value = ""
            mother_name.value = ""
            reg_date.value = ""
            birth_date.value = ""
            nid_no.value = ""
            mobail_number.value = ""
            room_count.value = ""
            annual_evalution.value = ""
            tax_levied.value = ""
            poperty_qality.value = "Home/Shop Qality"
            last_tax_pay.value = ""
            gardian_radio[0].checked = false
            gardian_radio[1].checked = false
            popertyRadio[0].checked = false
            popertyRadio[1].checked = false
            loading.style.display = "none"
        }, 3000)
    }
    return store
}
function showInputDataInTabel(props) {
    for (const value in props) {
        showInputData.innerHTML += `<tr>
                                        <td>${value}</td>
                                        <td colspan="2">${props[value]}</td>


                                    </tr>`
    }
}

