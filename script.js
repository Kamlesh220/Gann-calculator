function calculate() {
    let num = document.getElementById("numberInput").value;
    let resultElement = document.getElementById("result");

    if (num === "") {
        resultElement.innerHTML = "⚠️ कृपया एक संख्या दर्ज करें";
        return;
    }

    let square = num * num;
    resultElement.innerHTML = `संख्या ${num} का वर्ग = ${square}`;
}
