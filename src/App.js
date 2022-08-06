import Nav from './nav';
import Home from './home'

function App() {
  const title ="Welcome to the block";
  const likes = 50;
  //const person = {name: "ade", age: 30}
  const link = "https:foosionng.com";


  return (
    <div className="App">
      <Nav />
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>Liked {[1,2,3,4,4]} times</p>
        <p>{Math.random()*10}</p>
        <a href= {link}> Google Site </a>
      </div>
      <Home />
    </div>
  );
}

export default App;
