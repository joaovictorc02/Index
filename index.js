document.getElementById('botao')
.addEventListener('click', function(){
 let nome = document.getElementById('nome-pokemon').value
  .getAttribute('value')

    fetch('http://pokeapi.co/api/v2/pokemon/'+ nome)
    .then(function(response){
        return response.json()

    }).then(function(response){
        let html_habilidades = ''

        for (const hab of response.abilities){
            html_habilidades = '<li>'+hab.ability.name+'</li>'

        }
        let lista = document.getElementById('habilidades')
        lista.innerHTML = html_habilidades
        
        console.log(response.sprites.front_defaut)

        let url = response.sprites.front_defaut
        document.getElementById('img-card'.setAttribute('scr',url))


        
    })
     
    
   
})