

const filterButtons=document.querySelector("#filter-btns").children;
const items=document.querySelector(".portfolio-gallery").children;


for(Let i=0; i<filterButtons.length; i++){
  filterButtons[i].addEventListener("click",function(){
    for(Let j-0; j<filterButtons.length; j++){
      filterButtons[j].classList.remove("active")
    }
    this.classList.add("active");
    console.log(this.getAttribute("data-target"))
  })
}
