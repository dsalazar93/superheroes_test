export default function Vote(superhero_id){
  let ranking = JSON.parse(localStorage.getItem('rankingSuperHeroes'))

  if(ranking){
    let indexSuperHero = ranking.findIndex(hero => hero.id === superhero_id)
    if (indexSuperHero !== -1){
      ranking[indexSuperHero].votes++
    } else {
      const superHero = {
        id : superhero_id,
        votes : 1
      }
      ranking.push(superHero)
    }

  } else {
    ranking = []
    const superHero = {
      id : superhero_id,
      votes : 1
    }
    ranking.push(superHero)
  }

  localStorage.setItem('rankingSuperHeroes', JSON.stringify(ranking))
  if(ranking.length >= 1){
    return true
  } else {
    return false
  }
}