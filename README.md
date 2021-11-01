# 트위터 관심사 해제하기

트위터 관심사를 선택 해제해 주는 스크립트

## 사용법

1. 트위터에 [로그인](https://twitter.com/login?lang=ko)한다
2. `더 보기` > `설정 및 지원` > `설정 및 개인정보` > `개인정보 및 보안` > `표시되는 콘텐츠` > [`관심사`](https://twitter.com/settings/your_twitter_data/twitter_interests)에 간다
3. 주소창에 `javascript:`를 적은 후 다음 [스트립트](script.js)를 붙여 넣고 실행한다

```js
document.querySelectorAll("input").forEach((input) => { if (input.checked) { input.click(); } }); alert("관심사를 해제했습니다!"); location.reload();
```

4. `관심사를 해제했습니다!`라고 알림이 뜨면 `확인`을 누른다
5. 사이트가 새로 고침 되면 관심사가 모두 해제됐는지 확인한다
