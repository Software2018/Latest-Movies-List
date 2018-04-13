import React from 'react';
import styled from 'styled-components'
import Overdrive from 'react-overdrive'
const POSTER_PATH='http://image.tmdb.org/t/p/w154'
const BACKDROP_PATH='http://image.tmdb.org/t/p/w1280'

class MovieDetail extends React.PureComponent {
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
  <div >
<Moviewrap backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`} />

<MovieContent>
<Overdrive id={movie.id}>
<img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
</Overdrive>
<div>
    <h1>{movie.title}</h1>
    <h2> {movie.release_date} </h2>
    <p1>{movie.overview}</p1>



</div>
</MovieContent>

</div>

)}}


export default MovieDetail;



const Moviewrap=styled.div
`

postion:relative;
background:url(${props=>props.backdrop}) center 20%  no-repeat;

padding-top:50vh;
background-size:cover;

@media screen and (max-width: 320px) {
 position: relative;
padding-top:0;
}`;

const MovieContent=styled.div`
background:white;
width:auto;
text-align:left;
display:flex;
padding:2rem ;

div
{
margin-left:1rem;
}

img
{
position:relative;
top: -5rem;
}

@media screen and (max-width: 320px)
{
background:white;
text-align:left;
display:flex;
flex-flow:row wrap;

div
{
flex:auto;
margin:0;
padding:0;
text-align:center;
}

img
{
top:0;
right:.25%;
  }
}`;
