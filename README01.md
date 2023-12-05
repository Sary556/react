#1. node.js 설치
* 자바스크립트를 브라우저 밖에서도 동작할 수 있게 하는 런타임환경
* Node.js가 제공하는것이 npm(Node package Manager)
* npm이란 node.js로 만들어진 필요한 모듈을 다운받고 관리해줌. 다른 개발자가 만들어둔 유용한 node.js로 만들어진 툴로 가져다 쓸수 있음.
* npm을 이용한 유용한 라이브러리를 다운받을 예정("개발은 가져다쓰는게 절반이다")

![image](https://github.com/Sary556/react/assets/141836031/31962603-6b81-4e9a-a814-ae6c04a8f6e4) 옆 찾기 에서 cmd 검색 > 관리자 권한으로 명령 프롬프트 실행

* node.js 사이트에서 설치파일을 다운받고 그것을 설치한다
* cmd 화면에서
```
node -v
```
을 입력하면 아래 버전이 나오면서 설치가 완료된것이다.
![image](https://github.com/Sary556/react/assets/141836031/0bb854da-8564-4bcc-a18c-8dac9c4f074d)


![image](https://github.com/Sary556/react/assets/141836031/1c707fab-1123-4e6d-9816-807a025f6842)

* node.js 를설치하면 npm도 자동으로 설치


![image](https://github.com/Sary556/react/assets/141836031/7cba22ed-826e-41f8-8255-d80767d40233)

* npx는 npm이 설치될때 함께 설치가된다.
* npm --> 외부라이브러리를 쉽게 설치하고 버전을 관리하수 있게한다 --> package.json를 만들게 된다.
* npx --> 라이브러리를 개별적으로 실행하고자 할때 사용하는것이다


![image](https://github.com/Sary556/react/assets/141836031/f5336c49-2645-4b2f-b0bb-430ee5c75f82)

부모 폴더 이동

![image](https://github.com/Sary556/react/assets/141836031/69fd8a42-daa5-4aa1-8f87-325e82b743e1)

D드라이브 이동

![image](https://github.com/Sary556/react/assets/141836031/f28f88b8-8ab8-4bea-9fd0-48729ecbed68)

파일보기


# 1. 폴더 생성
## - 프로젝트를 만들 폴더를 만든다 ex)my-react
# 2. 리액트에서 필요한 패키지를 자동으로 설치해 주는 명령어를 입력한다
```
npx create-react-app my-app (my-app 자리엔 react가 실행될 폴더명이며 내가 원하는 폴더명으로 바꿔도되지만 수업할땐안됏음..)
아래와 같이 만든다.
npx create-react-app my-app 
```

my-react>my-app 구조가 만들어진다.

만들어지고난후엔 my-app에 들어가야하기에 
```
cd my-app(폴더명)
```
을 입력하여 진입하고

my-app에 진입한후 그 안에 소스를 실행한다 그것이
```
npm start
```

# SPA:Single Page Application
  - 페이지는 하나인데 여러개인것처럼 눈속임을한다. 페이지가 여러개인것처럼 보이지만 사실은 하나이다
  - 페이지를 매번 새로 가져올 필요가없기에 이렇게 만들어놨다. 웹사이트를 모바일처럼 사용할수있음.
  



# React 확장프로그램
- React 기본 구조 만드는 확장프로그램

![image](https://github.com/Sary556/react/assets/141836031/1cdd06b4-c9bf-4d61-8f2d-b92032806b0e)

react 기본 문법 html의 ! 처럼 세팅하기위한 익스텐션(확장프로그램)

- React 코드 정렬 해주는 확장프로그램





