
let btn = document.querySelectorAll("button");

for(i = 0; i < btn.length; i++) {
        let butao = btn[i];
        
        butao.addEventListener('click', (event) => {

                let conteudoBtn = event.target.innerHTML;
               
                if (conteudoBtn == 'C') {
                        document.querySelector('p').innerHTML = '' 
                        
                } else if (conteudoBtn == 'AC') {
                        document.querySelector('p').innerHTML = document.querySelector('p').innerHTML.replace(/.$/, '');
                        
                } else if(conteudoBtn == '='){   
                        console.log(document.querySelector('p').innerHTML);
                        document.querySelector('p').innerHTML = eval(document.querySelector('p').innerHTML);
                } else { 
                       
                        document.querySelector('p').innerHTML = document.querySelector('p').innerHTML + conteudoBtn;      
                }  
                                
        });       
};


