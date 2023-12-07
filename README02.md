
# 🙈JSX문법

https://react.dev/learn#writing-markup-with-jsx  참조

- 컴포넌트의 return()에서는 반드시 하나의 태그로 싸여있어야한다
- 태그대신 <> </> Franment를 사용할수있다. 이거라도 사용해서 싸야한다
- class명을 classname="class명"
- javascript코드를 JSX 문법안에서 사용해야할때는 {javascript 코드}형식으로 사용해야한다.

- {} 문법을 사용하지 않으면 변수가 문자로 사용되버림 {}형식의 javascript문법을 생각하자
- 인라인스타일로 css를 작성할때 ==> 밖에 {}는 자바스크립트를 사용한다는 의미로 해석하고 안의 {}는 객체라고 사용한다는 의미로 해석한다 {{}}의 형태
- EX) <div style={{ width: "300px", height: "200px" }}>추가하기</div>

```
import logo from "./logo.svg";
import "./App.css";

// jsx문법 = React는 페이스북에서 만들어진 언어
function App() {
  const name = "멍멍이";
  return (
    <>
      <div className="App">
        <p>{`${name}시작하기`} </p>
      </div>
      <div style={{ width: "300px", height: "200px" }}>추가하기</div>
    </>
  );
}

export default App;

```

```
import logo from "./logo.svg";
import "./App.css";

// jsx문법 = React는 페이스북에서 만들어진 언어
function App() {
  const name = "멍멍이";
  const list = ["기침", "감기", "약"];
  return (
    <>
      <h1 className="dog">Hello!{name}</h1>
      <h1 className="dog">{`Hello!${name}`}</h1>
      <ul>
        <li>기침</li>
        <li>감기</li>
        <li>약</li>
      </ul>
      <ul>
        {/* {list.map((item) => {
          return <li>{item}</li>;
        })} */}
        {list.map((item) => (
          <li>{item}</li>
        ))}
         {/* 리턴이 생략되어있지만 디폴드값으로 이미 들어있는상태이다 */}
      </ul>
      <img style={{width:"500px",height:"500px"}}
        src="https://image.onch3.co.kr/img_data/2023/1676466712_img49.jpg"
        alt="img"
      ></img>
    </>
  );
}

export default App;

```
결과
![image](https://github.com/Sary556/react/assets/141836031/a6c16f94-261d-4499-aeaa-f5adfdb11092)



