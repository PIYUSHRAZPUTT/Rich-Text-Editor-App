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
