// var btnClickMe = document.getElementsByTagName("button")[0];
//
// function ClickedButton(){
//   alert("You've clicked the button!");
// }
//
// function MouseEntered(){
//   alert("You've hovered the button!");
// }
//
// btnClickMe.addEventListener("click", ClickedButton);
// // btnClickMe.addEventListener("mouseenter", MouseEntered);
var inpItems = document.getElementById("userinput");
var btnEnter = document.getElementById("enter");
var ulShopItems = document.querySelector("ul");
var btnDeleteAll = document.getElementsByClassName("btndelete");
var ctrAdded = 0;

function InputLength(){
  return inpItems.value.length;
}

function AddItemList(){
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(inpItems.value));
  ctrAdded++;
  li.setAttribute("id", "addedtolist" + ctrAdded );
  AddDeleteButton(li);
  ulShopItems.appendChild(li);
  inpItems.value = "";
}

function AddDeleteButton(li){
  var btnDelete = document.createElement("button");
  btnDelete.classList.add("btndelete");
  btnDelete.innerHTML = "Delete";
  btnDelete.addEventListener("click", AddEventListenerBtnDelete);
  li.appendChild(btnDelete);
  console.log(btnDeleteAll);
}

function EnterItem(){
  if(InputLength() > 0){
    AddItemList();
  }else {
    alert("Please add an item!");
  }
}

function EnterItemAfterKeyPress(event){
  if(InputLength() > 0 && event.keyCode === 13){
    AddItemList();
  }
}

function AddEventListenerBtnDelete(event){
  console.log("For Deletion" + event.target.parentElement);
  document.getElementById(event.target.parentElement.id).outerHTML = "";
}

btnEnter.addEventListener("click", EnterItem);
inpItems.addEventListener("keypress", EnterItemAfterKeyPress);
