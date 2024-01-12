let addBtn = document.querySelector(".addbtn");
let taskAdder = document.querySelector(".task-adder");
let taskColors = document.querySelector(".colorPart");
let activeBtn = document.querySelector(".active");
let textArea = document.querySelector(".ta");
let ticketCont = document.querySelector(".ticket-Container");
let delBtn = document.querySelector(".delbtn");
let navColor = document.querySelector(".colorBar");
let showAllBtn = document.querySelector(".showAll");

let taskContainer = []

let colorsArray = ["red", "yellow", "green", "blue"];

let delFlag = false;

addBtn.addEventListener("click", function () {
    taskAdder.classList.toggle("hidden");
})

taskColors.addEventListener("click", function (event) {

    let ele = event.target;
    //   console.log(ele.classList)
    if (ele.classList[0] == "box") {
        activeBtn.classList.remove("active");
        ele.classList.add("active");
        activeBtn = ele;
    }
})

textArea.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {

        let Inputtask = textArea.value;
        let activeColor = activeBtn.classList[1];

        let taskObj = {
            task : Inputtask,
            color:activeColor,
        }

        taskContainer.push(taskObj);

        showTicketUI(taskContainer);

        textArea.value = "";
        taskAdder.classList.toggle("hidden");
    }
})


delBtn.addEventListener("click", function () {
    if (delFlag == false) {
        delBtn.style.color = 'red';
    } else {
        delBtn.style.color = 'black';
    }

    delFlag = !delFlag;
})

showAllBtn.addEventListener("click",function(){
    showTicketUI(taskContainer);
})


navColor.addEventListener("click",function(event){
    let ele = event.target;

    if(ele.classList[0] == "box"){

        let targetColor = ele.classList[1];
        // console.log(targetColor);

        let filteredArray = [];

        for(let i=0;i<taskContainer.length ; i++){
            let taskObj = taskContainer[i];

            if(taskObj.color == targetColor){
                filteredArray.push(taskObj);
            }
        }

       showTicketUI(filteredArray);
    }
})


function showTicketUI(arr){
    ticketCont.innerHTML="";
    for(let i=0;i<arr.length;i++){
        let taskObj = arr[i];
    let task = taskObj.task;
        let activeColor = taskObj.color;

        // creating new tickets 

        let newTicket = document.createElement("div");
        newTicket.classList.add("ticket");
        newTicket.innerHTML = ` <div class="ticket-color ${activeColor}"></div>
      <div class="ticket-task">${task}</div><span class="material-symbols-outlined lockIcon">
      lock
      </span> `

      // lock functionality 

      let lock = newTicket.querySelector(".lockIcon");
      let taskPart = newTicket.querySelector(".ticket-task")
      console.log(taskPart)
      

      lock.addEventListener("click",function(){
         if(lock.innerHTML == "lock_open"){
            lock.innerHTML = "lock";
            taskPart.setAttribute("contenteditable","false");
            lock.style.color="blue";
            let updatedTask= taskPart.innerText;
            taskObj.task=updatedTask;
         }else{
            lock.innerHTML = "lock_open" 
            taskPart.setAttribute("contenteditable","true");
         }
      })

        //   delete function of ticket 

        newTicket.addEventListener("dblclick", function () {
            if (delFlag == true) {
                ticketCont.removeChild(newTicket);
               taskContainer.splice(i,1);
               delBtn.style.color = 'black';
               delFlag=!delFlag

            }
        })

        // color swapping function of ticket 

        let ticketColorContainer = newTicket.querySelector(".ticket-color");

        ticketColorContainer.addEventListener("click", function () {
            let intialColor = ticketColorContainer.classList[1];
            let colorIndex = colorsArray.indexOf(intialColor);
            //   console.log(colorIndex);
            let nextColorIndex = (colorIndex + 1) % 4;
             taskObj.color = colorsArray[nextColorIndex];
            ticketColorContainer.classList.remove(intialColor);
            ticketColorContainer.classList.add(colorsArray[nextColorIndex]);

            console.log(taskContainer);
        })

        ticketCont.appendChild(newTicket);
    }

}





/**new script */

// let addBt = document.querySelector(".addbtn");
// let delBt = document.querySelector(".delbtn");
// let showAll = document.querySelector(".showAll");
// let taskCont = document.querySelector(".task-adder");
// let ticketCont = document.querySelector(".ticket-Container");
// let colorClick = document.querySelector(".colorPart");
// let text = document.querySelector(".ta");
// let activeBt = document.querySelector(".active");
// let colorCont=document.querySelector(".colorBar");


// let flag=false;
// addBt.addEventListener("click", function () {
//     taskCont.classList.toggle("hidden");
    

// })

// colorClick.addEventListener("click", function (event) {
//     let activeColor = event.target;
//     if (activeColor.classList[0] == "box") {
//         activeBt.classList.remove("active");
//         activeColor.classList.add("active");
//         activeBt = activeColor;
//     }
// })

// text.addEventListener("keydown", function (event) {
//     if (event.key == "Enter") {
//         let inputText = text.value;
//         let Currentcolor = activeBt.classList[1];

//         let newTicket = document.createElement("div");
//         newTicket.classList.add("ticket")
//         newTicket.innerHTML = `<div class="ticket-color ${Currentcolor}"></div>
//                      <div class="ticket-task">${inputText}</div>`

//         text.value="";
//         taskCont.classList.toggle("hidden");

//         newTicket.addEventListener("dblclick",function(){
//             if(flag==true){
//                 ticketCont.removeChild(newTicket);
//                 flag=!flag;
//                 delBt.style.color='black';
//             }
            
//         })


       
//         ticketCont.appendChild(newTicket)
//     }
// })
// delBt.addEventListener("click",function(){
//    if(flag==false){
//     delBt.style.color='red';
//    }else{
//     delBt.style.color='black';
//    }
//    flag=!flag
// })






