function validateNumber() {
  let input = document.getElementById("inputNumber").value;
  let scientificRegex = /^-?\d+(\.\d+)?([eE][-+]?\d+)?$/;
  let message = scientificRegex.test(input)
    ? "Yes, it is a number"
    : "No, it is not a number";
  document.getElementById("message").innerText = message;
}

function copyText() {
  let input = document.getElementById("inputNumber");
  input.select();
  document.execCommand("copy");
}

function pasteText() {
  navigator.clipboard.readText().then((text) => {
    document.getElementById("inputNumber").value = text;
  });
}

function saveFile() {
  let input = document.getElementById("inputNumber").value;
  let message = document.getElementById("message").innerText;
  if (message) {
    let content = `Input: ${input}\nResult: ${message}`;
    let blob = new Blob([content], { type: "text/plain" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "validation_result.txt";
    link.click();
  }
}

function saveAsFile() {
  let filename = prompt("Enter filename:", "validation_result.txt");
  if (filename) {
    let input = document.getElementById("inputNumber").value;
    let message = document.getElementById("message").innerText;
    let content = `Input: ${input}\nResult: ${message}`;
    let blob = new Blob([content], { type: "text/plain" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  }
}

function showAbout() {
  alert("Developer: Glerio\nID: 123456789");
}
