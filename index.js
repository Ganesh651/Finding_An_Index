let findIndexContainer = document.getElementById("findIndexContainer");
findIndexContainer.classList.add("container","pt-5");

let rowContainer = document.createElement("div");
rowContainer.classList.add("row");
findIndexContainer.appendChild(rowContainer);

let headingContainer = document.createElement("div")
headingContainer.classList.add("col-12")
rowContainer.appendChild(headingContainer);

let heading = document.createElement("h1");
heading.textContent = "Find the Index of the Numbers";
heading.classList.add("text-center","main-heading","mb-5");
headingContainer.appendChild(heading);

let paraContainer = document.createElement("div");
paraContainer.classList.add("col-12");
rowContainer.appendChild(paraContainer);

let para = document.createElement("p");
para.textContent = "[1, 7, 1, 3, 30, 99, 44, 54]";
para.classList.add("default-array-para","text-center","mb-5")
paraContainer.appendChild(para);

let inputContainer = document.createElement("div");
inputContainer.classList.add("col-12","text-center","d-flex","flex-row","mb-5");
rowContainer.appendChild(inputContainer);

let inputEl = document.createElement("input");
inputEl.type = "text";
inputEl.classList.add("user-input","p-1");
inputEl.placeholder = "Enter a number";
let findBtn = document.createElement("button");
findBtn.classList.add("btn","btn-primary");
findBtn.textContent = "Find";
inputContainer.appendChild(inputEl);
inputContainer.appendChild(findBtn);

let resultHeadingContainer = document.createElement("div");
resultHeadingContainer.classList.add("col-12")
rowContainer.appendChild(resultHeadingContainer);
let resultHeading = document.createElement("h1");
resultHeading.textContent = "Index of number: ";
resultHeading.classList.add("result-heading","mb-3")
resultHeadingContainer.appendChild(resultHeading)


let resultContainer = document.createElement("div");
resultContainer.classList.add("col-12")
rowContainer.appendChild(resultContainer);
let result = document.createElement("p");
result.classList.add("result-container")
resultContainer.appendChild(result);

let numberedArray = [1, 7, 1, 3, 30, 99, 44, 54];
findBtn.onclick = ()=>{
    result.textContent = numberedArray.indexOf(parseInt(inputEl.value))
}

