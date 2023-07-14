import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Header from "./Components/header/Header";
import Home from "./pages/home/Home";
import Card from "./Components/card/Card";
import MovieList from "./Components/movieList/MovieList";
import Movie from "./pages/movieDetail/Movie";

function App() {
  return (
    <div className="App">
   <Router>
         <Header/>
            <Routes> 
                <Route index element={<Home/>}></Route>
                <Route path="movie/:id" element={<Movie/>}></Route>
                <Route path="/" element={<Card/>}></Route>
                {/* <Card/> */}
                <Route path="movies/:type" element={<MovieList/>}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
     
    </div>
  );
}

export default App;
