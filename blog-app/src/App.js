import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
 
import Users from './posts/pages/Posts';
import Login from './users/pages/loginPage';
import Signup from './users/pages/signupPage';
import NewPost from './posts/pages/NewPost';
import EditPost from './posts/pages/EditPost';
import Post from './posts/pages/Post';
import Navbar from './shared/Navbar';
import Posts from './posts/pages/Posts';

const App = () => {
  return (
   <Router>
     <Navbar />
     <Switch>
      <Route path="/" exact >
          <Users />
      </Route>
      <Route path="/posts/new" exact >
          <NewPost />
      </Route>
      <Route path="/posts/edit/:postId" exact >
          <EditPost />
      </Route>
      <Route path="/:userId/posts" exact >
          <Posts />
      </Route>
      <Route path="/posts/:postId" exact >
          <Post />
      </Route>
      <Route path="/authenticate/login" exact >
          <Login />
      </Route>
      <Route path="/authenticate/signup" exact >
          <Signup />
      </Route>
      <Redirect to="/" />
     </Switch>
   </Router>
  );
}

export default App;
