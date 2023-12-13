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