let elements = document.getElementsByTagName("input");

for (let index = 0; index < elements.length; index++) {
  element = elements[index];

  if (element.checked) {
    element.click();
  }
}

alert("관심사를 해제했습니다!");
window.location.reload();
