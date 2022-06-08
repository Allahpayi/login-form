import LoginForm from './LoginForm';

function App() {
  const onSubmit = (username, password) => {
    console.log(username, password)
  }
  return <LoginForm onSubmit={(username, password) => onSubmit(username, password)} />;
}

export default App;
