import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { UserContext } from './contexts/Users';
import { Articles, Login, Nav, SingleArticle, User } from './components/index';

function App() {
  const [currentUser, setCurrentUser] = useState({});

  const loginHandler = () => {
    return Object.keys(currentUser).length ? (
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
        </Routes>
      </>
    ) : (
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    );
  };

  return (
    <BrowserRouter>
      <div>
        <h1>NC News</h1>
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
          {loginHandler()}
        </UserContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
