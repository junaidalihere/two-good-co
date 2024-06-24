

let videocon = document.getElementById("videoContaner");
let play = document.getElementById("play");
let load = document.getElementById("load");






const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});







let tl = gsap.timeline();


function loading(){

let a = 0;

setInterval(function(){
    a += Math.floor(Math.random()* 10)

    if(a<100){
        load.innerHTML = a + "%";
    }else{
        a = 100;
        load.innerHTML = a + "%";
    }

    console.log(a)
},50);



}






tl.to("#loading h1",{
    scale:1.5,
    delay:0.5,
    duration:1,
    onstart:loading()
})



tl.to("#loading",{
    top:"-100vh",
    duration:2,
    delay:0.8,
})


tl.from("#nav .logo ,.navpart1 h1 ",{
    y:-50,
    opacity:0,
    duration:1,
    stagger:0.2,
})










tl.from(".page1 h1",{
    y:100,
    duration:0.4,
    delay:0.5,
    opacity:0,
    stagger:0.3,
    

})




tl.from("#videoContaner",{
  scale:0.1,
duration:1,
opacity:0,
//   scrollTrigger:{
//            trigger: "#videoContaner",
//            scroller: "body",
//            start: "top 70%"
//   }

})






videocon.addEventListener("mouseenter",function(){
    gsap.to(play,{
        opacity:1,
        scale:1,
    })
})



videocon.addEventListener("mouseleave",function(){
    gsap.to(play,{
        opacity:0,
        scale:0,
    })
 })

 videocon.addEventListener("mousemove",function(dets){
    gsap.to(play,{
    left:dets.x - 70,
     top:dets.y - 10,
    })
 })


 let slect = document.getElementById("slect");
 
 document.addEventListener("mousemove",function(dets){
     gsap.to("#cursar",{
         left:dets.x -70,
         top:dets.y -70,
        
        })
    })
    
  
   
document.querySelectorAll(".child").forEach(function(e){
    e.addEventListener("mouseenter",function(){
        gsap.to("#cursar",{
           scale:1,
           
           })
    })
    e.addEventListener("mouseleave",function(){
        gsap.to("#cursar",{
           scale:0,
           
           })
    })
})



// tl.to(".page6 .chid img",{
// scale:2,
//      opacity: 0,
//      duration:5,
//      delay:4,
//      scrollTrigger:{
//         trigger: ".page6 .chid img",
//         start: "top 50%",
//         markers: true,
//      }
// })
// // tl.from("#page6",{
// //     scale:0.1,
// //   duration:1,
// //   opacity:0,
// //     scrollTrigger:{
// //              trigger: "#page6",
// //              start: "top 50%",
// //              markers: true,
// //     }
  
// //   })
  