export default function CheckVotes(superhero_id){
  const ranking = JSON.parse(localStorage.getItem('rankingSuperHeroes'))

  if(ranking){
    let indexSuperHero = ranking.findIndex(hero => hero.id === parseInt(superhero_id))
    if (indexSuperHero !== -1){
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}