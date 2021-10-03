export default function TopTen(){
  let ranking = JSON.parse(localStorage.getItem('rankingSuperHeroes'))

  ranking.sort(function (a, b) {
    if (a.votes < b.votes) {
      return 1
    }
    if (a.votes > b.votes) {
      return -1
    }
    
    return 0
  })

  console.log(ranking)
}