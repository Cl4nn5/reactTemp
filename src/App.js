import logo from './logo.svg';
import './App.css';

function App() {

  let posts = '강남 고기 맛집';
  let userInfo = {
    name: '김홍제',
    age: 34
  }
  let 함수 = _ => 100+_;

  return (
    <div className="App">
      <div className="black-nav">
        <div style={{color:'white', fontSize:'20px'}}>개발 blog</div>
      </div>
      <h4>블로그 글</h4>
      <img src={logo} alt="" srcset="" width={'20%'} />g
      <div>{posts}</div>
      <div>{함수(20)}</div>
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
