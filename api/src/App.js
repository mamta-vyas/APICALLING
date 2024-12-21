// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import {getPosts} from './components/apicallho';
import { userPosts } from './components/apicallho';
import PostCard from './components/PostCard';
import UserCard from './components/UserCard';
function App() {
   const[data , setData] = useState(null);
   const[userData , setUserData] = useState(null);


  useEffect(() => {
     getPosts().then((post) => setData(post) );
  },[]);

  useEffect(() => {
    userPosts().then((user) => setUserData(user.results[0]));
  },[])

  const refresh = () => {
        userPosts().then((user) => setUserData(user.results[0]))
  }

  return (
    <div className="App">
      {/* bcz our data is in object of array so we can directly get this dat */}
       {userData && <UserCard data = {userData}/>}
       <button onClick={refresh}>Refresh User</button>
    {data ? data.map((e) => <PostCard id = {e.id} title = {e.title}/> ) : <p>No Data</p> }
      {/* we can't do below thing bcz data is in array format and we need to map over it so we can't go with below code but we can go with above code */}
       {/* {data && <PostCard id={data.id} title={data.title}/>} */}
      
    </div>
  );
}

export default App;
