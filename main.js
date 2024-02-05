
/*primeiro jeito  criando outra secao dentro do js
function estep(){

const containerstep=document.querySelector('.contatos');

if( secao_contato.style.display==='none'){
containerstep.style.display='grid'


}

}

const secao_contato=document.querySelector('#secao-telefone')

const celular=document.querySelector('.botao-celular');

celular.addEventListener('click',function(){

criasecao();
criasecao2();
criasecao3();
estep()

})


function criasecao(){

    if(secao_contato.style.display==='flex'){
        secao_contato.style.display='none'
    }else{
        secao_contato.style.display='flex'

    }

    const pdocelular=document.querySelector('.texto_secao_celular')

    pdocelular.innerHTML='click novamente'
    pdocelular.style.color='cyan'
    

const secao= document.createElement('section');

secao_contato.appendChild(secao);

const h2= criah2()

secao.appendChild(h2)

h2.innerHTML="contatos";

h2.classList.add('titulo-contatos');

const ul= cria_ul();

secao.appendChild(ul);
ul.classList.add('listas-de-contato')

const li= cria_li();

secao.appendChild(li);

li.classList.add('lista')

const img=cria_img()

secao.appendChild(img)

img.classList.add('imagemsecao1')

img.setAttribute('src','https://i.pinimg.com/236x/ec/3a/60/ec3a60c8c6539a07eb70b52f6737ea6e.jpg')  //assim se adiciona uma imagem 

const p=criap();

secao.appendChild(p)
p.innerHTML='GitHub'
p.classList.add('linksecao1')


}

function criasecao2(){



    const pdocelular=document.querySelector('.texto_secao_celular')

    pdocelular.innerHTML='click novamente'
    pdocelular.style.color='cyan'
    

const secao= document.createElement('section');
secao.classList.add('secao2')
secao_contato.appendChild(secao);

const ul= cria_ul();

secao.appendChild(ul);
ul.classList.add('listas-de-contato')

const li= cria_li();

secao.appendChild(li);

li.classList.add('lista')

const img=cria_img()

secao.appendChild(img)

img.classList.add('imagem-contatos')

img.setAttribute('src',"https://i.pinimg.com/236x/b0/28/c2/b028c2e59043116dfc0da6ec6fd26d70.jpg")  //assim se adiciona uma imagem 

const p=criap();

secao.appendChild(p)
p.innerHTML='LinKedin'
p.classList.add('linksecao2')

}

function criasecao3(){

const secao= document.createElement('section');
secao.classList.add('secao2')
secao_contato.appendChild(secao);

const ul= cria_ul();

secao.appendChild(ul);
ul.classList.add('listas-de-contato')

const li= cria_li();

secao.appendChild(li);

li.classList.add('lista')

const img=cria_img()

secao.appendChild(img)

img.classList.add('imagem-contatos')

img.setAttribute('src',"https://i.pinimg.com/236x/07/64/05/076405fa3ba9ad7f90c6f7a857bed4e1.jpg")  //assim se adiciona uma imagem 

const p=criap();

secao.appendChild(p)
p.innerHTML='E-mail'
p.classList.add('linksecao2')

}

function criah2(){


    const h2= document.createElement('h2');

    return h2


}
function cria_ul(){

const ul=document.createElement('ul')

return ul


}

function cria_li(){

const li=document.createElement('li')

return li

}

function cria_img(){

const img=document.createElement('img')

return img

}

function criap(){

const p=document.createElement('p')

return p

}



//secao dos slides



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


*/

/* segundo jeito tbm fica da hora  */

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
  