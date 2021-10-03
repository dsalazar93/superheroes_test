import axios from 'axios'

const Services = {}

Services.allSuperHeroes = () => {
  return axios.get(`http://localhost:8000/api/v1/allsuperheroes?token=U4VDfYpkD1z7o4HS7JNYmMQoXyGWZx`).then((response) => {
    return response
  }).catch((err) => {
    console.log("Hubo un error:", err)
  })
}

Services.superhero = (superhero_id) => {
  return axios.get(`http://localhost:8000/api/v1/superhero/${superhero_id}?token=U4VDfYpkD1z7o4HS7JNYmMQoXyGWZx`).then((response) => {
    return response
  }).catch((err) => {
    console.log("Hubo un error:", err)
  })
}

Services.superheroesRanking = (superheros_ids) => {
  return axios.get(`http://localhost:8000/api/v1/superheroes/${superheros_ids}?token=U4VDfYpkD1z7o4HS7JNYmMQoXyGWZx`).then((response) => {
    return response
  }).catch((err) => {
    console.log("Hubo un error:", err)
  })
}

export default Services