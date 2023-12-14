import { useState } from "react";
import "./App.css";
import Profile from "./components/Profile";

//useState라는 함수를 통해서 React에게 값이 변했음을 알려주는 방법(useState는 React가 제공하는 React hook(훅))
function App() {
  let counter = 0;

  console.log(useState(0));

  // const num = useState(0)[0];
  // const setNum = useState(0)[1];
  // 밑과같다

  const [num, setNum] = useState(0); // num = 변수 setNum =num을 바꿀수있는 유일한 함수
  //0은 매개변수 num의 state의 초기값이 0이다.
  //[초기값인 0,초치값을 변화시키는 함수]
  // state를 바꾸면 UI를 다시 렌더링한다.
  // 함수가 끝날때 실행이 되는것이다.

  let increase = function () {
    counter = counter + 1;
    setNum(num + 1);

    console.log("num : " + num); // state는 함수가 끝나면 바뀌기 때문에 아직 바뀌기전 상태이다.
    console.log("counter : " + counter);
  };
  return (
    <>
      <div>{`num = ${num}`}</div>
      <div>{`counter = ${counter}`}</div>
      <button onClick={increase}>클릭</button>
    </>
  );
}

export default App;
