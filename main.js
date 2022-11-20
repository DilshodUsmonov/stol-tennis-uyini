const elspan=document.querySelector('.span1')
const elspan1=document.querySelector('.span')
const elform=document.querySelector('.form')
const elplayer1=document.querySelector('.button')
const elplayer2=document.querySelector('.button1')
const elselect=document.querySelector('.form-select');
const elreset=document.querySelector('.button2')

 let d=0;
 let a=0;


 elplayer1.addEventListener('click', (e)=> {
    d++;
    if(d<=elselect.value && a<elselect.value ) {
        elspan.textContent=d;
        if(d==elselect.value) {
            elspan.style.color='green';
            elspan1.style.color='red';

        }
    }
})

elplayer2.addEventListener('click', (e)=> {
    a++;
    if(a<=elselect.value && d<elselect.value) {
        elspan1.textContent=a;
        if(a==elselect.value) {
            elspan1.style.color='green';
            elspan.style.color='red';
        }
    }
    
})
elreset.addEventListener('click', (e)=> {
    d=0;
    a=0;
    elspan.textContent=d;
    elspan1.textContent=a;
    elspan1.style.color='black';
    elspan.style.color='black';
   


})


elform.addEventListener('click', (e)=> {
    e.preventDefault();
    
    const value=elselect.value;
    if(d==value ) {
        a=10;
     
    }
    
    if(a==value ) {
        d=10;
    }
    
   
})



