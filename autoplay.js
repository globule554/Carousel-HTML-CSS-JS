window.addEventListener('load', autoplay);

function autoplay(event)
{
    const elts = document.querySelectorAll(".rb");
    const max = elts.length-1;
    let index = 0;
    
    const nextFrame = ()=>{
        return  setInterval(()=>{
            index = index < max ? index +1 : 0
            elts[index].checked = true;
        }, 3000)
    }

    const prevNext = (event)=>{
       
            clearInterval(timer);
            if(event.target==nxt)   index = index < max ? index +1 : 0;
            else index = index > 0 ? index - 1 : max;
            elts[index].checked = true;
            timer = nextFrame();
       
    }
    
    let timer = nextFrame();

    const nxt = document.querySelector(".next");
    const prv = document.querySelector(".prev");
    
    nxt.addEventListener('click', prevNext);
    prv.addEventListener('click',  prevNext);

    elts.forEach(rb=>{
        rb.addEventListener("change" ,(event)=>{
            clearInterval(timer);
            index = parseInt(event.target.id.split('rb')[1])-1;
            timer = nextFrame();

        });
    })


   

}

