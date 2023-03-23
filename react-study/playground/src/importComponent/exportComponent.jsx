// 다음 중 실수를 찾아내어요
// Profile컴포넌트가 선언되고 사용되는 것에 문제가 있습니다.

// function profile() {
//   return <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Alan L. Hart" />;
// }

// export default function Gallery() {
//   return (
//     <section>
//       <h1>Amazing scientists</h1>
//       <profile />
//       <profile />
//       <profile />
//     </section>
//   );
// }

// 찾아낸 실수 : 컴포넌트 선언을 대문자로 시작해야합니다.

function Profile() {
  return <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Alan L. Hart" />;
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
