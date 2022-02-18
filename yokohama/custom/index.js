/**
 * toggle phone and tablet 
 */
const resizeWindow =()=> window.addEventListener("resize", () => {
    
 const width = window.screen.width;
    if( width>600 && width <768){
        //TODO: enable tablet view
     document.querySelector('.mobile-view').style.display = "none";
     document.querySelector('.tablet-view').style.display = "block";

    } else if(width<600){
        document.querySelector('.mobile-view').style.display = "block";
        document.querySelector('.tablet-view').style.display = "none";
    }
    
})


window.addEventListener('DOMContentLoaded', ()=> document.querySelector('.mobile-view').style.display = "none");