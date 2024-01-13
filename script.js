var parentEl=document.getElementById("parentdiv")
var icons=document.createElement('div');
icons.setAttribute('id','icondiv')
parentEl.append(icons);

var leftarrow = document.createElement('i');
leftarrow.setAttribute('class','fa-solid fa-chevron-left');
icons.append(leftarrow);



var rightarrow = document.createElement('i');
rightarrow.setAttribute('class','fa-solid fa-chevron-right');
icons.append(rightarrow);

let arr = [
      {
         img:"image1",
         Name: 'Reena',
         Destination: 'software developer',
         Review: 'The work timings are very flexible, and the work culture is also very nice. All the employees are very friendly regardless of seniors and juniors'
      },
      
      {
         img:"image2",
         Name: 'Meena',
         Destination: ' software Designer',
         Review: ' The company is open to innovation and readily adopts latest technologies All the employees are very friendly regardless of seniors and juniors'
      
      },

      {
         img:"image3",
         Name: 'Alice',
         Destination: 'Backend developer',
         Review: 'Great learning and good support in teams. They always ready to invest on employees skill development. Some other benefits like extra offs to have good work life balance.'
      
      },

      {
         img:"image4",
         Name: 'Anna',
         Destination: 'Frontend Developer',
         Review: 'Great company culture All the employees are very friendly regardless of seniors and juniors  Ipsum est quidem doloribus saepe repellendus odio corrupti repudiandae, laboriosam, a nam reprehenderit!'
      }
    
    ]

console.log(arr)
 var data=0;


let pic=document.querySelector("img")
let des=document.querySelector("h3")
let role=document.querySelector("h4")
let para1=document.querySelector("p")
let buttons = document.querySelectorAll("i");
console.log(buttons);

buttons.forEach((x,index) => {
   x.addEventListener('click',() => {
      if(index == 0){
         if(data == 0){
          data = arr.length-1
         }
         data--

         pic.src=arr[data].img;
         des.innerText=arr[data].Name;
         role.innerText=arr[data].Destination;
         para1.innerText=arr[data].Review;
      }
      else {
         data++
         if(data > arr.length-1){
          data=0;
         }

         pic.src=arr[data].img;
         des.innerText=arr[data].Name;
         role.innerText=arr[data].Destination;
         para1.innerText=arr[data].Review;
      }
   });
});
   






































// var arr = [];

// 
// var contect=1;

// pervious.addEventListener("click",prefun);

// function prefun(){
//     if(pervious == true){
        

//     }
// }

// console.log(arr);

