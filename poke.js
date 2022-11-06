const pokeBtn = document.querySelector('#pokeBtn')

pokeBtn.addEventListener('click',getname)

async function getname(){

    try {
        const getPokemanStats = await axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then(res => res.data.results)
        .then(data =>{
            data.map(pokemonStats =>{
                getStats(pokeStats)
                
            })  
            return data
        })
     } catch (error) {
        console.error(errror)  
    }
}

const getMainContainer = document.querySelector('#mainContainer')
const getStats = async(charStats) => {
    try{
        const inStats = await axios.get(charStats.url)
          .then(res => res.data)
          .then(data => {
             console.log()
            
            const card = document.createElement('div')
               card.className = 'card'

            const frontShiny = data.spritse.Front_shiny
            const img  = document.createElement('img')
             img.src = frontShiny
             img.className = 'card-img-top'
             card.append(img)


             const cardBody = document.createElement('div')
               cardBody.className = 'card-body'
             const h5E1 =  document.createElement('h5E1')
                   h5E1.className= 'card-title'
                   h5E1.textContent = charStats.name
                   cardBody.append(h5E1)
            //  console.log(charStats.name)      

             const pE1  = document.createElement('p')
                   pE1.className = 'card-text'
                //    console.log(data.type)
                  pE1.textContent = data.type.map(type =>{
                    console.log(type.type.name)
                    return ' ' + type.type.name
                     
                   })
                   cardBody.append(pE1)
            
                cardBody.append(cardBody)   
            getMainContainer.append(card)
          
      
    

                })

    } catch (error) {
        console.error(error)
    }

}