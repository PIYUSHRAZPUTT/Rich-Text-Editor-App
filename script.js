const formatDoc = (cmd, value = false) => {
  if (value) {
    document.execCommand(cmd, false, value);
  } else {
    document.execCommand(cmd);
  }
};

const handleAddLink = () => {
  const url = prompt("Enter the URL");
  formatDoc("createLink", url);
};

const content = document.getElementById("content");
content.addEventListener("mouseenter", () => {
  let anchors = content.querySelectorAll("a");

  anchors.forEach((anchor) => {
    anchor.addEventListener("mouseenter", () => {
      anchor.setAttribute("target", "_blank");
      content.setAttribute("contentEditable", "false");
    });
    anchor.addEventListener("mouseleave", (e) => {
      content.setAttribute("contentEditable", "true");
    });
  });
});

const fileName = document.getElementById("FileName");
window.handleFileExport = (value) => {
  if (value === "new") {
    content.innerHTML = "";
    fileName.value = "undefined";
  }
  if (value === "pdf") {
    html2pdf(content).save(fileName.value);
  }
  if (value === "txt") {
    const extractedText = content.innerText;
    const blob = new Blob([extractedText]);
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = (fileName.value || "file") + ".txt";
    a.click();
    URL.revokeObjectURL(url);
  }
};

let active = false;
let showCode = document.getElementById("show-code");
showCode.addEventListener("click", () => {
  active = !active;
  showCode.dataset.active = active;
  if (active) {
    content.textContent = content.innerHTML;
    content.setAttribute("contenteditable", "false");
  } else {
    content.innerHTML = content.textContent;
    content.setAttribute("contenteditable", "true");
  }
});
