// document.querySelector('#owl').onclick = ()=>{
//     alert("Owl Clicked");
// };

// document.getElementById('owl').addEventListener('mouseover',()=>{
//     // alert('you clicked and Owl');
//     console.log("mouse overed")
// },false)

// also an best approach 
// //AttachEvent();
// jQuery on();


// Best Approach
// document.getElementById('owl').addEventListener('click',()=>{
//     alert('you clicked and Owl again');
// },false)

// type, timestamp ,defaultPrevented
// target. toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY
// altkey, ctrl key, shiftkey, keyCode

// document.getElementById('owl').addEventListener('click',(e)=>{
//     console.log(e);
// },false);

// Event Propogation

// Bubbling 
// document.getElementById('images').addEventListener('click',(e)=>{
//     console.log("clicked inside the ul");
// },false)

// document.getElementById('owl').addEventListener('click',(e)=>{
//     console.log("Owl Clicked");
// },false)
// Capturing
document.getElementById('images').addEventListener('click',(e)=>{
    console.log("clicked inside the ul");
},false)

document.getElementById('owl').addEventListener('click',(e)=>{
    console.log("Owl Clicked");
    e.stopPropagation();
},false)
setInterval(()=>{
    document.getElementById('google').addEventListener('click',(e)=>{
        e.defaultPrevented();
        console.log("google clicked");
    },false);
},4000);

