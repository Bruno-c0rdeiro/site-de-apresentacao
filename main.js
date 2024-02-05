function estep(){

    const containerstep=document.querySelector('.contatos');

    secao_contato.style.display='none'
    
    containerstep.style.display='grid'
    
    }

    const secao_contato=document.querySelector('#secao-telefone')
    
    const celular=document.querySelector('.botao-celular');
    
    celular.addEventListener('click',function(){
    
    estep()
    })

    const radio2=document.querySelector('#botao2')

const img_reliquias=document.querySelector('.img-puma')

const img_lamborghine=document.querySelector('.img-lamborghine')



const radio1=document.querySelector('#botao1')

radio1.addEventListener('click',function(){

    img_lamborghine.style.display='none';
    img_porsche.style.display='none'
    img_bmw.style.display='none'
    img_reliquias.style.display='flex';

})


radio2.addEventListener('click',function(){

img_reliquias.style.display='none';
img_porsche.style.display='none';
img_bmw.style.display='none'
img_lamborghine.style.display='flex';


})


const radio3=document.querySelector('#botao3')

const img_porsche=document.querySelector('.img-porsche')

radio3.addEventListener('click',function(){

img_lamborghine.style.display='none'
img_reliquias.style.display='none'
img_bmw.style.display='none'
img_porsche.style.display='flex'
})



const radio4=document.querySelector('#botao4')

const img_bmw=document.querySelector('.img-bmw')
radio4.addEventListener('click',function(){

    img_lamborghine.style.display='none';
    img_porsche.style.display='none'
    img_reliquias.style.display='none';
    img_bmw.style.display='flex'

})
  
