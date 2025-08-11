function calculateSquare() {
    let num = document.getElementById("numberInput").value;
    let resultArea = document.getElementById("result");

    if (num === "" || isNaN(num)) {
        resultArea.innerHTML = "⚠ कृपया एक सही संख्या डालें";
        return;
    }

    let square = num * num;
    resultArea.innerHTML = `📐 ${num} का Square है: <b>${square}</b>`;
}
