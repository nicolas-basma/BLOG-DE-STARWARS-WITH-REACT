
export const multipleFetch = async (listaResult) => {
      return await Promise.all(
        listaResult.map((item) =>{
          return fetch(item.url)
                .then((res) => res.json())
        })
      )
    }



export const getElement = async (url) => {
  return fetch(url)
    .then((res) => res.json())
    .then((res) => res.results)};

export const imgTatooine = 'http://cdn.playbuzz.com/cdn/16c54ffe-46be-49f9-849e-cfbbada9632c/d0e004ea-bcf5-46ff-8411-77ecda58b2de.jpg';


