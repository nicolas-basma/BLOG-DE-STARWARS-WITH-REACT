
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


