// function loadJson(url) {
//   return fetch(url).then((response) => {
//     if (response.status == 200) {
//       return response.json();
//     } else {
//       throw new Error(response.status);
//     }
//   });
// }

// loadJson("no-such-user.json").catch(alert);

// 위 코드를 async/await를 사용하여 작성해라.

async function loadJson(url) {
  let response = await fetch(url);

  if (response.status == 200) {
    let json = await response.json();
    return json;
  }
  throw new Error(response.status);
}

loadJson("no-such-user.json").catch(alert);

/**
 * 함수 loadJson은 async함수가 된다.
 * .then을 전부 await로 바꿉니다.
 *
 */
