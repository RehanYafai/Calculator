console.log("Calculator is ready to use")
function number(num) {
    let screen = document.getElementById("screen")
    // console.log(num)
    screen.value += num;
}

function result() {
    let screen = document.getElementById("screen");
    screen.value = eval(screen.value);

}

function clearResult() {
    // console.log("clear is running")
    let screen = document.getElementById("screen");
    screen.value = "";
}
function removeChar() {
    let screen = document.getElementById("screen");
    remove = screen.value;
    remove = remove.slice(0, -1);
    screen.value = remove;



}