// 1 задание
function check_n_1() {
    const n = document.getElementById("value_n").value
    if (n > 1) {
        f_new_list(n)
    } else {
        alert("N должно быть больше 1")
    }
}

function f_new_list(n) {
    const new_list_n = []

    for (let i = 0; i < n; i++) {
        new_list_n.push(Number((Math.random()*200-100).toFixed(2)))
    }

    f_check_list(new_list_n)
}

function f_check_list(list_n_for_check) {
    const list_n = list_n_for_check

    let flag = true

    for (let i = 0; i <= list_n.length; i++) {
        if (list_n[i] < list_n[i+1]) {
            alert(`${list_n.join(";  ")} \n Последовательность не убывающая! (FALSE)`)
            flag = false
            break
        }
    }
    if (flag == true) {
        alert(`${list_n.join(";  ")} \n Последовательность убывающая (TRUE)`)
        }
}


const button_make_list_check = document.getElementById("new_list_and_check")
const n_list_print = document.getElementById("n_list")

button_make_list_check.addEventListener("click", check_n_1)


// 2 задание
function check_n_0() {
    const n = document.getElementById("value_n1").value
    if (n > 0) {
        get_result(n)
    } else {
        alert("N должно быть больше 0")
    }
}

function factorial(n) {
    let result = 1

    for (let i = 1; i < n+1; i++) {
        result *= i
    }
    return result
}

function get_result(n) {
    let result = 1
    for (let j = 1; j <= n; j++) { 
        result += 1/factorial(j)
    }
    alert(result)
}

const button_result = document.getElementById("result")

button_result.addEventListener("click", check_n_0)