let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
  //console.log(inp.value);
  // inp.value = "";

  let item = document.createElement("li");
  item.innerText = inp.value;
  ul.appendChild(item);
  inp.value = "";

  let delBTn = document.createElement("button");
  delBTn.innerText = " X";
  delBTn.classList.add("dltbtn");
  item.appendChild(delBTn);
});

let delBTns = document.querySelectorAll(".dltbtn");
for (delBtn of delBTns) {
  delBtn.addEventListener("click", function () {
    console.log("element deleeted");

    let par = this.parentElement;
    console.log(par);
    par.remove();
  });
}
