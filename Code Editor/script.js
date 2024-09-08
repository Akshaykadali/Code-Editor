function run() {
    // Get the code from the textareas
    const htmlCode = document.getElementById("html-code").value;
    const cssCode = "<style>" + document.getElementById("css-code").value + "</style>";
    const jsCode = "<script>" + document.getElementById("js-code").value + "</" + "script>";

    // Combine the code into one and display it in the iframe
    const output = document.getElementById("output");
    output.contentDocument.body.innerHTML = htmlCode + cssCode;
    output.contentWindow.eval(jsCode);
}
