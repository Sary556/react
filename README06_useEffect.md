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
