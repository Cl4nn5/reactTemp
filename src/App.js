/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function Modal() {
  
  return (
    <div className='modal'>
      
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

function App() {

  // [a,b] : a는 State, b는 바꿀 변수
  // ? 1. 변수 대신 변수처럼 쓰는데 변수랑 뭐가 다른거지?? 장단점이 뭐임
  // * State로 만들어진 데이터가 바뀌면 html이 자동으로 재렌더링된다. 오
  
  let isGender = false; // 0 남자, 1 여자
  const 글제목내용 = ['남자 코트 추천', '여자 코트 추천']

  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','독학하기']);
  let [글내용, 글내용변경] = useState(['내용1','내용2','내용3']);
  let [좋아요, 좋아요변경] = useState(0);

  const 제목변경 = () => {
    // object 나 array 변경 시 복사하여 변경된 객체(배열)을 변경
    // Deep Copy 해야함
    // let newArray = 글제목; // 값을 공유
    let newArray = [...글제목]; // 배열을 제거하고:..., 배열을 다시 만듬:[]
    newArray[0] = '여자 코트 추천';
    글제목변경(newArray)
    // 글제목[0] = 글제목내용[1];
  }

  let posts = '강남 고기 맛집';
  let cnt = 0;
  let userInfo = {
    name: '김홍제',
    age: 34
  }
  let 함수 = _ => 100+_;

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <button onClick={제목변경}>Click Me</button>
      <div className='list'>
        <h3>{글제목[0]} <span style={{'cursor':'pointer'}} onClick={() => 좋아요변경(좋아요++)}>👍</span> {좋아요} </h3>
        <p>{글내용[0]}</p>
        <hr/>
        <h3>{글제목[1]}</h3>
        <p>{글내용[1]}</p>
        <hr/>
        <h3>{글제목[2]}</h3>
        <p>{글내용[2]}</p>
        <hr/>
      </div>

      <Modal title={글제목}/>
    </div>
  );
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
