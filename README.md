# 트위터 관심사 해제하기

1. 웹 브라우저에서 트위터에 [로그인](https://twitter.com/login?lang=ko)한다.
2. 설정 및 개인정보 > 개인정보 및 보안 > 표시되는 콘텐츠 > [관심사](https://twitter.com/settings/your_twitter_data/twitter_interests)에 간다.
3. 주소창에 `javascript:`를 적은 후 다음 [코드](script.js)를 붙여 넣는다.

```js
let elements = document.getElementsByTagName("input"); for (let index = 0; index < elements.length; index++) { element = elements[index]; if (element.checked) { element.click(); } } alert("관심사를 해제했습니다!"); window.location.reload();
```

4. `관심사를 해제했습니다!`라고 알림이 뜨면 `확인`을 누른다.
5. 사이트가 새로 고침 되면 관심사가 해제됐는지 확인한다.
