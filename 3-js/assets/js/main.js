// jQuery
// $(document).ready(function() {
  // code
// });

// Vanilla JS

// window.onload = function() {
//   code
// };



// Abrir e fechar menu
function openMenu() {
  if (document.querySelector('.menu').classList.contains("-active")){
    document.querySelector('.menu').classList.remove('-active')
  }
  else{
    document.querySelector('.menu').classList.add('-active')
  }
 };


 // Play do vídeo ao clicar na imagem de capa
function openVideo() {
  document.querySelector('.video-cover').classList.add('-inactive')
}


// Sistema de sanfona para a lista
let items = document.getElementsByClassName('item')

for(let i=0; i<items.length; i++){
  items[i].addEventListener('click', function(){ 
    if(this.classList.contains('-active')){
      this.classList.remove('-active')
    }else {
      this.classList.add('-active')
    }
  })
}


//Abrir Modal
function openModal(){
  document.querySelector('.modal-wiki').classList.add('-active')
  }
  
// Fechar MOdal
function closeModal() {
  document.querySelector('.modal-wiki').classList.remove('-active')
 }



  //Acessando a API
const params = {method:'GET',mode:'cors'}

fetch('https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Alber%20Einstein', params)
.then(response => response.json()) // retorna uma promise
.then(result => {
  console.log(result);
  if(result !== null){
    const extract = document.querySelector('.extract')
    extract.innerText = result.query.pages[736].extract
  }else {
    const extract = document.querySelector('.extract')
    extract.innerText =' Carregando...'
  }
})
.catch(err => {
  // trata se alguma das promises falhar
  console.error('Falha na requisição', err);
}); 


