export default function RemoveVote(superhero_id){
  let ranking = JSON.parse(localStorage.getItem('rankingSuperHeroes'))
  const currentCountInRanking = ranking.length

  let indexSuperHero = ranking.findIndex(hero => hero.id === superhero_id)
  ranking[indexSuperHero].votes--
  
  let rankingUpdated = ranking.filter(superHero => superHero.votes !== 0)
  localStorage.setItem('rankingSuperHeroes', JSON.stringify(rankingUpdated))

  if(currentCountInRanking !== rankingUpdated.length){
    return true
  } else {
    return false
  }
}