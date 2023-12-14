# 폴더 src 참조

# react에서는 데이터를 변할수 있는 값이며 값이 변할때 마다 UI를 변경해 달라고(화면을 다시 그려달라고)알려야한다. 그럴때 사용하는것이 useState()이다.

```
const [num, setNum]=useState(0)
이 데이터를 변할수 있는 값 ==> num
num을 변하게 하는 함수 ==> setNum --> 함수를 이용하여 num을 변경한다
useState(0)의 0은 num의 초기값
```

![image](https://github.com/Sary556/react/assets/141836031/550f2b69-0dce-4744-8e7f-e542f1424e98)


# 부분적으로 값 받기 

![image](https://github.com/Sary556/react/assets/141836031/5f46d91e-52aa-40c3-a9ed-dc2e605f0247)




# 구조분해로 변경하기

![image](https://github.com/Sary556/react/assets/141836031/76c85bb9-b16b-42ba-9e5a-ae1c4701b38d)

```
import React from "react";

const Profile = ({img,name,title,isNew}) => {
  // || --> 또는(or)  A || B 둘중에 하나라도 true이면 true
  // && --> 그리고(and) A && B 둘중에 하나라도 false이면 false

  // console.log(props)
  // const img=props.img;
  // const name=props.name;
  // const title=props.title;
  // const isNew=props.isNew;
  
  // 구조분해 destructure
  // const {img,name,title,isNew} = props;
  return (
    <>
      <div className="profile">
        <img src={img} alt="avatar"></img>
        {/* {props.isNew ?<span className="New">신입</span>:""} */}
        {isNew && <span className="New">신입</span>}
        <h2>{name}</h2>
        <p>{title}</p>
      </div>
    </>
  );
};

export default Profile;
```

---------------------------------

![image](https://github.com/Sary556/react/assets/141836031/59936133-4191-4bf1-9d28-1c7728b98c1b)


```
//폴더 src2 다음날 수업 src2 참조
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
```

