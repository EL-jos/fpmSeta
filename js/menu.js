const box_menu_phone = document.querySelector(".box-menu-phone");
const btn_menu = document.querySelector("#menu-phone button");
const close_menu = document.getElementById("close_menu");
let isOpen = false;
btn_menu.addEventListener("click", ()=> {
    box_menu_phone.classList.add("open");

    var isExist = document.querySelector(".box-menu-phone ul");
    if(isExist){
        
    }else{
        box_menu_phone.insertAdjacentHTML("afterbegin", '<ul><li data-aos="fade-up" data-aos-duration="1000"><a href="#">Home</a></li><li data-aos="fade-up" data-aos-duration="1000" data-oas-delay="200"><label>Qualifications</label><ul><li><a href="#">Qualifications</a></li><li><a href="#">Critical skills</a></li></ul></li><li data-aos="fade-up" data-aos-duration="1000" data-oas-delay="400"><label>Sub-sectors</label><ul><li><a href="#">All about FP&M Seta</a></li><li><a href="#">Evolution of fibre processing and manufacturing</a></li><li><a href="#">Manufacturing process</a></li><li><a href="#">sub-sectors</a></li></ul></li><li data-aos="fade-up" data-aos-duration="1000" data-oas-delay="600"><a href="#">Job search</a></li><li data-aos="fade-up" data-aos-duration="1000" data-oas-delay="800"><a href="#">Register your cv</a></li><li data-aos="fade-up" data-aos-duration="1000" data-oas-delay="1000"><a href="#">Log in</a></li></ul>');
    }
});
close_menu.addEventListener("click", ()=> {
    box_menu_phone.classList.remove("open")
});
