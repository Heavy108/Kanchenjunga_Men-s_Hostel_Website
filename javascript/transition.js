// Add a toggle show active class to the div of wardens under admin-content

btns = document.querySelectorAll(".control-btn");
containers = document.querySelectorAll(".tab-pane");

console.log(btns);

console.log(containers[0].attributes['aria-labelledby'].value);

btns.forEach((btn, idx) => {
  btn.addEventListener("click", (e) => {
    id = e.target.id;
    containers.forEach((container, idx) => {
        container.classList.remove("show", "active");
        if(container.attributes['aria-labelledby'].value == id){
            container.classList.add("show", "active");
        }
    });

  });
}); 




