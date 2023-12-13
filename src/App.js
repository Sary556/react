import "./App.css";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <Profile img="https://images.velog.io/images/tok1324/post/30d58446-e385-4da3-9986-7face5d3ccb2/%ED%8E%98%ED%8E%98%EC%98%A4%EB%A5%98.png"
      name="김일동"
      title="프론트엔드 개발자"/>
      <Profile img="https://cdn.inflearn.com/public/users/thumbnails/44628/aa4d9f39-814c-4cbf-84ec-8dcc3a6604ae"
      name="김이동"
      title="백엔드 개발자"
      isNew={true}
      />
      <Profile img="https://velog.velcdn.com/images/hbin007/post/14e6aaae-5f52-4b13-aec4-748fb452b66b/image.jpeg"
      name="김삼동"
      title="풀스텍 개발자"/>
    </>
  );
}

export default App;
