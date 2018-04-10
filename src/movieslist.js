import React from 'react';
import Movie from './movie'




class MovieList extends React.Component {
  state={
    movies:[]
  }
  async componentDidMount(){
    try{
      const res= await fetch("https://api.themoviedb.org/3/discover/movie?api_key=12c4e800f9eac5a36c0f5b4c2c203834&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1")
      const movies= await res.json()
      console.log(movies)
      this.setState ({
        movies:movies.results
      })
    }
    catch(e){
      console.log(e)

    }
  }


render(){
return(


<div>
      {this.state.movies.map(movie=>( <Movie key={movie.id} title={movie.title} desc={movie.overview} poster={movie.poster_path}  movie={movie}/> ))}
</div>

)}}


export default MovieList;
