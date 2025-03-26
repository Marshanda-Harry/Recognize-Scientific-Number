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
  let message = document.getElementById("message").innerText;
  if (message) {
    let blob = new Blob([message], { type: "text/plain" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "validation_result.txt";
    link.click();
  }
}

function saveAsFile() {
  let filename = prompt("Enter filename:", "validation_result.txt");
  if (filename) {
    let message = document.getElementById("message").innerText;
    let blob = new Blob([message], { type: "text/plain" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  }
}

function showAbout() {
  alert("Developer: Marshanda Ivanna Harry\nID: 123456789");
}
