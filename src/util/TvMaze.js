const endPointSearch = 'https://api.tvmaze.com/singlesearch/shows?q={searchValue}&embed=episodes'

const TvMaze = {
    getEpisodes :  async function (searchValue) {
      const q = endPointSearch.replace("{searchValue}", searchValue)
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
                          e_Nbr: episode.number,
                          runtime: episode.runtime,
                          summary: episode.summary,
                          airdate: episode.airdate,
                          airstamp: episode.airstamp
                       }
            }))
        }
     })
   }
}

export {TvMaze}
