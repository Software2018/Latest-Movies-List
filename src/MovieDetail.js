import React from 'react';
const POSTER_PATH='http://image.tmdb.org/t/p/w154'
const BACKDROP_PATH='http://image.tmdb.org/t/p/w1280'
class MovieDetail extends React.Component {
  state={
    movie:[],
  }
  async componentDidMount(){
    try{
      const res= await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=12c4e800f9eac5a36c0f5b4c2c203834&language=en-US`)
      const movie= await res.json()
      console.log(movie)
      this.setState ({
        movie,
      })
    }
    catch(e){
      console.log(e)

    }
  }


render(){
  const movie=this.state.movie
return(


<div>
<div className='float'>
<img id="one" src={`${BACKDROP_PATH}${movie.backdrop_path}`} alt={`${movie.title}`} />
<img src={`${POSTER_PATH}${movie.poster_path}`} alt={`${movie.title}`}  />
</div>
    <h1>{movie.title}</h1>
    <h2> {movie.release_date} </h2>
    <p1>{movie.overview}</p1>

</div>

)}}


export default MovieDetail;
