window.addEventListener('load', autoplay);

function autoplay(event)
{
    let elts = document.querySelectorAll(".rb");
    let index = 0;
    let max = elts.length-1;

    const nextFrame = ()=>{
        return  setInterval(()=>{
             index = index < max ? index +1 : 0
             elts[index].checked = true;
         }, 3000)
     }

    let timer = nextFrame();
 

    elts.forEach(rb=>{
        rb.addEventListener("change" ,(event)=>{
            clearInterval(timer);
            index = parseInt(event.target.id.split('rb')[1])-1;
            timer = nextFrame();

        });
    })


   

}

