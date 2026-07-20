const form = document.querySelector("#studentForm");
const studentsDiv = document.querySelector("#students");
const average = document.querySelector("#average");
const search = document.querySelector("#search");

// localStorage
let students =
JSON.parse(localStorage.getItem("students")) || [];

showStudents();

// Add Student
form.addEventListener("submit",(e)=>{

e.preventDefault();

try{

const name=document.querySelector("#name").value.trim();
const age=document.querySelector("#age").value;
const marks=document.querySelector("#marks").value;

if(name=="" || age=="" || marks==""){
alert("Fill all fields");
return;
}

students.push({
name,
age,
marks:Number(marks)
});

localStorage.setItem(
"students",
JSON.stringify(students)
);

form.reset();

showStudents();

}catch(error){

console.log(error);

}

});


// Show Students

function showStudents(){

studentsDiv.innerHTML="";

// filter

const keyword=search.value.toLowerCase();

const result=students.filter(student=>

student.name.toLowerCase().includes(keyword)

);

// map

result.map((student,index)=>{

const card=document.createElement("div");

card.classList.add("card");

card.innerHTML=`

<h3>${student.name}</h3>

<p>Age : ${student.age}</p>

<p>Marks : ${student.marks}</p>

<button class="delete">Delete</button>

`;

studentsDiv.appendChild(card);

// delete

card.querySelector("button")

.addEventListener("click",()=>{

students.splice(index,1);

localStorage.setItem(

"students",

JSON.stringify(students)

);

showStudents();

});

});

// reduce

const total=students.reduce(

(sum,s)=>sum+s.marks,

0

);

average.textContent=

students.length ?

"Average Marks : "+(total/students.length).toFixed(2)

:"";

}

// search

search.addEventListener("input",showStudents);


// Event Bubbling

studentsDiv.addEventListener("click",(e)=>{

console.log("Parent Clicked");

});


// DOM Navigation

console.log(studentsDiv.parentElement);

console.log(studentsDiv.children);


// Debugger

// debugger;