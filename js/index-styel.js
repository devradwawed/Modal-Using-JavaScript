
// 1=>get the modal 
var modal = document.getElementById("the_modal");

var img = document.getElementById("the_img")



//2=> get the content of the modal
var imgModal = document.getElementById("img");
var modalCaption = document.getElementById("caption");


img.onclick = function () {
  modal.style.display = "block";
  imgModal.src = this.src;
  modalCaption.innerHTML = this.alt;
}
// 3=> get the close btn
var close = document.getElementsByClassName("close")[0];

close.onclick = function () {
  modal.style.display = "none";
}
// 4=> when click on esc hid the modal
document.onkeydown = function (e) {

  if(e.keyCode = 27){
    modal.style.display = "none";
  }

}