var editable = true;
document.addEventListener("click", (event) => {
  if (event.target.noedit) {
  } else if (event.target.hasAttribute("contenteditable")) {
    let elem = event.target;
    elem.removeAttribute("contenteditable");
  } else {
    event.target.contentEditable = "true";
  }
});

function printt() {
  window.print();
}

/**
 * provides a popup notification alert type of thing
 */
function alert() {
  let timing = 4000;
  if (document.getElementById("alert-popup")) {
  } else {
    let elem = document.getElementById("main");
    let popup = document.createElement("div");
    let closeButton = document.createElement("span");
    closeButton.className = "closeButton";
    popup.style.animationDuration = timing;

    closeButton.innerText = "+";
    closeButton.addEventListener("click", (event) => {
      deletepopup();
    });

    popup.id = "alert-popup";
    popup.className = "abs-popup";
    popup.innerHTML = "alert for 2 sec";

    popup.appendChild(closeButton);
    elem.appendChild(popup);
    setTimeout(() => {
      document.getElementById("alert-popup").remove();
    }, timing - 300);
  }
}
function deletepopup() {
  if (document.getElementById("alert-popup")) {
    document.getElementById("alert-popup").remove();
  }
}

function removeElem(event) {
  console.log(event.target);
}

function afterLoad() {
  let elem = document.getElementsByTagName("tbody");
  console.log(elem[0].children);
  elem[0].children.forEach((element) => {
    element.addEventListener("click", (event) => {
      console.log(event.target);
    });
  });
}

document.addEventListener(
  "DOMContentLoaded",
  function () {
    afterLoad();
  },
  false
);
