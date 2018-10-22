const endPointSearch = 'http://api.tvmaze.com/singlesearch/shows?q={searchValue}&embed=episodes'

const TvMaze = {
    getEpisodes :  async function (searchValue) {
      console.log("in get episodes")
      const q = endPointSearch.replace("{searchValue}", searchValue)
      console.log(q)
      const q2 = 'http://api.tvmaze.com/singlesearch/shows?q=girls&embed=episodes'
      return fetch(q, {
      }).then(response => {
        if (response.ok){
          return response.json()
        }
        throw new Error ('Request failed')
      }, networkError => console.log(networkError.message)
    ).then(jsonResponse => {
        console.log(jsonResponse)
        if(jsonResponse._embedded.episodes){
            return (jsonResponse._embedded.episodes.map((episode) => {

                          return {
                          key: episode.id,
                          photo: episode.image,
                          title: episode.name,
                          season: episode.season,
                          e_Nbr: episode.number
                       }
            }))
        }
     })
   }
}

export {TvMaze}
