# useEffect 폴더 src4참조

# useEffect(()=>{},[])

# useEffect(()=>{},[]) ==> 배열이 비어있을 경우에는 component가 실행될때 처음 한번만 실행된다.
![image](https://github.com/Sary556/react/assets/141836031/84ed0719-d8b5-4087-8514-6b609ee776cd)

# useEffect(()=>{},[products],count) ==> component가 실행될때 처음 한번 실행된후 products의 값이 바뀔때마다 useEffect가 실행됨
![image](https://github.com/Sary556/react/assets/141836031/caa5148e-5c37-42ae-a788-4c40d1a671f0)

# useEffect(()=>{},[products],count) ==> component가 실행될때 처음 한번 실행된후 products와 count중 하나라도 값이 바뀌면 useEffect가 실행됨(2개 다 바귀어도 한번만 실행됨)

# useEffect() 가 종료되는 시점에 데이터가 변경된다.

![image](https://github.com/Sary556/react/assets/141836031/6531e19a-f593-49ca-8e2a-85beba47de77)

# 이전값 prev

setNum((이전값)=> 이전값 + 1)

```
import { useState } from "react";
import "./App.css";

function App() {
  // let num = 0;
  // console.log(useState(3));
  // const [num,setNum]=useState(3);

  // const num = useState(3)[0];
  // const setNum = useState(3)[1]; // 최신문법 구조분해

  let [num, setNum] = useState(0);
  return (
    <div className="counter">
      <span className="number">{num}</span>
      <button
        className="button"
        onClick={() => {
          setNum(num + 1);

          //아래 코드 세줄에서의 값은 변화가 없다 똑같이 1씩증가
          // setNum(num + 1);
          // setNum(num + 1);
          // setNum(num + 1);

          // prev라는 매개변수는 이전값을 가지고있음
          // setNum((prev) => {
          //   return prev + 1}) // 밑을 줄이기전

          // setNum((prev) => prev + 1)//1 이 식은 내부적으로 함수기때문에 onClick 함수를 실행전에 계산해서 기억을한다 prev라는거때문에..?
          // setNum((prev) => prev + 1)//2 한줄일때는 setNum(num + 1과 같은데 이걸 여러개 쓰면 위와 결과가다르다)
          // setNum((prev) => prev + 1); //3
        }}
      >
        1씩증가
      </button>
      <form action="#">
        <input type="text"/>
      </form>
    </div>
  );
}

export default App;
