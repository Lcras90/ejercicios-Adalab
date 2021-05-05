const boxcontent = document.querySelector(".box");
const box = document.querySelector(".box-content");
const elementStyle = window.getComputedStyle(boxcontent);
const elementStyle2 = window.getComputedStyle(box);
const elementBox = elementStyle.getPropertyValue("box-sizing");
const elementWidth = elementStyle.getPropertyValue("width");
const elementPadding = elementStyle.getPropertyValue("padding");
const elementBorder = elementStyle.getPropertyValue("border-width");
const boxSize = (a, b, c, d) => {
  if (a === "content-box") {
    return `Si es content-box el tamaño ${b}`;
  } else {
    return `Si es border-box el tamaño ${b + c + d}`;
  }
};
const boxSizeTotal = boxSize(
  elementBox,
  elementWidth,
  elementPadding,
  elementBorder
);
console.log(boxSizeTotal);
//Habría que hacer un paseInt pero no me apetece, es muy tarde.
