function button(x) {

    let display = document.getElementById("display"),
        dispplayLength = display.value.length

    if (display.value == 0) {
        display.value = ""
    }
    if (x !== "c" && x !== "+/-" && x !== "=" && x !== "." && dispplayLength <= 20) {
        display.value += x
    }

    // C button
    if (x == "c") {
        display.value = "0"
    }

    // = button
    if (x == "=") {
        display.value = eval(display.value)
    }

    // . button
    if (x == "." && display.value.split(".").length < 2 && display.value !== 0) {
        display.value += "."
    } else if (x == "." && display.value == 0) {
        display.value = 0
    }

    // DEL button
    let oneLess = display.value.length - 4
    if (x == "del" && display.value !== 0 && display.value.length > 1) {
        display.value = display.value.substring(0, oneLess)
    }

    // +/- button
    if (x == "+/-" && display.value !== 0) {
        let negative = (display.value - display.value) - display.value
        display.value = negative
    }
}