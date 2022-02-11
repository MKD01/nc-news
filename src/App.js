import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './styles/App.scss';
import { UserContext } from './contexts/Users';
import { Articles, Login, Nav, SingleArticle, User } from './components/index';
import { useContext } from 'react';

function App() {
  const { isLoggedIn } = useContext(UserContext);

  const loginHandler = () => {
    return isLoggedIn ? (
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
          <Route path="*" element={<h1>There's nothing here :(</h1>} />
        </Routes>
      </>
    ) : (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<h1>There's nothing here :(</h1>} />
      </Routes>
    );
  };

  return (
    <BrowserRouter>
      <div>
        <Link to="/">
          <h1>NC News</h1>
        </Link>
        {loginHandler()}
      </div>
    </BrowserRouter>
  );
}

export default App;
