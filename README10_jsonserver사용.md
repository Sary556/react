# Json server 사용하기
--> 작은 서버를 만드는 것 --> api소통할때 제일 많이 쓰이는 파일타입 입니다.

![image](https://github.com/Sary556/react/assets/141836031/364fda1c-9d2a-4f5b-ac99-c5633c6d1f68)

# Json server 설치하기

1️⃣
```
npm install -g json-server
```

2️⃣ 확장명이 .json인 파일을 만든다 --> 반드시 root에 만들어야한다

![image](https://github.com/Sary556/react/assets/141836031/c421c0c0-e755-46c0-b7f3-0eda3817887f)

```
json-server --watch db.json --port 3004
```

```
/* {
  "posts": [{ "id": 1, "title": "json-server", "author": "typicode" }]
}
 */
※ 혹시모를 메모 복붙저장용
```

# 새 창을 열고 주소창에
```
http://localhost:3004/products
```
# json 파일의 내용이 보이게 된다.

![image](https://github.com/Sary556/react/assets/141836031/24b92e64-d3f0-4758-b1b6-fabf68d8472e)


# Json server 데이터 베이스 만들기 

```
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```
![image](https://github.com/Sary556/react/assets/141836031/570997fe-0b9d-41f1-bc44-49ab2584bac9)
