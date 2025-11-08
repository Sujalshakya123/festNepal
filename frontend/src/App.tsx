<<<<<<< HEAD
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
=======
<<<<<<< HEAD
const App = () => {
  return <div>FestNepal Dashboard</div>;
};

=======
import { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

function App() {
  const [isLogin, setIsLogin] = useState(true);
>>>>>>> main

  return (
    <div className="App">
      <div className="toggle-buttons">
        <button onClick={() => setIsLogin(true)} className={isLogin ? 'active' : ''}>Login</button>
        <button onClick={() => setIsLogin(false)} className={!isLogin ? 'active' : ''}>Signup</button>
      </div>
<<<<<<< HEAD
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

=======
      {isLogin ? <LoginForm /> : <SignupForm />}
    </div>
  );
}

>>>>>>> main
>>>>>>> main
export default App;
