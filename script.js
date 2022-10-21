let para = document.createElement("p");
let query="";
let image_count=0;

async function CuratedPhotos()
{
    const data=await fetch('https://makeup-api.herokuapp.com/api/v1/products.json');
    if (!data.ok) {
        const message = `An error has occured: ${data.status}`;
        throw new Error(message);
      } 
const result=await data.json();

for(i=20;i<result.length;i++)
{
    const pic=document.createElement("div");
    pic.innerHTML=`<img src=${result[i].api_featured_image}<br>
    <p class="box">Brand: ${result[i].brand}</p>
    <p class="box">Product: ${result[i].name}</p>
    <p class="box">Price: ${result[i].price}</p>
    <p class="desc">Description: ${result[i].description}</p>
    `;
    image_count;
    document.querySelector(".gallery").append(pic);
}
const galleryItems=document.querySelector(".gallery").children;
const prev=document.querySelector(".prev");
const next1=document.querySelector(".next1");
const maxitem=8;
let index=1;
const page=document.querySelector(".page_num");
const pagination=Math.ceil(galleryItems.length/maxitem);
console.log(pagination);

prev.addEventListener("click",function()
{
index--;
check();
showItems();
})

next1.addEventListener("click",function()
{
index++;
check();
showItems();
})


function check(){
    if(index==pagination)
    {
        next1.classList.add("disabled");
    }
    else{
        next1.classList.remove("disabled");
    }
    if(index==1)
    {
        prev.classList.add("disabled");
    }
    else
    {
        prev.classList.remove("disabled");
    }
}

function showItems(){
for(let i=0;i<galleryItems.length;i++)
{   galleryItems[i].classList.remove("show");
    galleryItems[i].classList.add("hide");
   
    if(i>=(index*maxitem)-maxitem && i<index*maxitem)
{  
    galleryItems[i].classList.remove("hide");
    galleryItems[i].classList.add("show");
}
page.innerHTML="Page "+ index;
}
check();
}
window.onload=showItems();

}
CuratedPhotos();


function clear()
{
    input.value="";
    document.querySelector(".gallery").innerHTML="";
}