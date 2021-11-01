document.querySelectorAll("input").forEach((input) => {
  if (input.checked) {
    input.click();
  }
});

alert("관심사를 해제했습니다!");
location.reload();
