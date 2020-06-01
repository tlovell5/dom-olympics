// //Top of the page Header
var changeHead = document.getElementById("header")
changeHead.innerHTML = "<h1 class='header'>Javascript made this</h1><h2 class='header'><span class='name'>[Tyler Lovell]</span>wrote the javascript</h2>"

// Write some custom JavaScript to automatically change the words of the conversation to something fun and good.
var changeMessage = document.querySelector(".messages")
changeMessage.innerHTML = "<div class='message left'>Whats up</div><div class='message right'>How are you?</div><div class='message left'>The weather is nice.</div><div class='message right'>Lets go hiking.</div>"

//Write some JavaScript that will wait until the user clicks the "clear" button, and then clears out all conversation.
document.querySelector("#clear-button")
    .addEventListener("click", function () {
        document.querySelector(".messages").textContent = (" ")
    });

// Change Backround Color
document.querySelector("#theme-drop-down")
    .addEventListener("change", function () {
        const theme = document.querySelector("#theme-drop-down").value;
        document.querySelector("#main").className = ""
        document.querySelector("#main").classList.add(theme)
    });

// // Change Backround Text Color 
document.querySelector("#theme-drop-down")
    .addEventListener("change", function () {
        const textColor = document.querySelector("#theme-drop-down").value;
        console.log(textColor)
        if (textColor === "theme-one") {
            let leftElements = document.querySelectorAll('.left')
            for (var i = 0; i < leftElements.length; i++) {
                leftElements[i].style.backgroundColor = 'blue'
                leftElements[i].style.color = 'white'
            }
            let rightElements = document.querySelectorAll('.right')
            for (var i = 0; i < rightElements.length; i++) {
                rightElements[i].style.backgroundColor = 'brown'
                rightElements[i].style.color = 'white'
            }

        } else if (textColor === "theme-two") {
            let leftElements = document.querySelectorAll('.left')
            for (var i = 0; i < leftElements.length; i++) {
                leftElements[i].style.backgroundColor = 'red'
                leftElements[i].style.color = 'white'
            }
            let rightElements = document.querySelectorAll('.right')
            for (var i = 0; i < rightElements.length; i++) {
                rightElements[i].style.backgroundColor = 'black'
                rightElements[i].style.color = 'white'
            }
        }
    });

// Write some custom JavaScript to automatically change the words of the conversation to something fun and good.
// var blueBrown = document.querySelector(".messages")
// blueBrown.innerHTML = 
// "<div class='message left'>Whats up</div>
// <div class='message right'>How are you?</div>
// <div class='message left'>The weather is nice.</div>
// <div class='message right'>Lets go hiking.</div>"



// var changeBackround = document.querySelector("#theme-drop-down")
// changeBackround.innerHTML = "<option value='theme-one'>Whats up</option><div class='message right'>How are you?</div><div class='message left'>The weather is nice.</div><div class='message right'>Lets go hiking.</div>"

// //Top of the page Header
// var newHeader = document.createElement("h1")
// newHeader.textContent = "JavaScript Made This!!"
// newHeader.style.margin = "5px"
// newHeader.style.display = "flex"
// newHeader.style.alignitems = "center"
// newHeader.style.flexDirection = "column"
// document.getElementById("header").prepend(newHeader)

// var myName = document.createElement("p")
// myName.textContent = "[Tyler Lovell]"
// myName.style.color = "peachPuff"
// myName.style.display = "inline-block"
// myName.style.margin = "5px"
// document.getElementById("header").append(myName)

// var wroteJs = document.createElement("p")
// wroteJs.textContent = "wrote with JavaScript"
// wroteJs.style.display = "inline-block"
// wroteJs.style.margin = "5px"
// document.getElementById("header").append(wroteJs)

// //Bronze Responses
// var leftResponses = [
//     "Hey!",
//     "Hello there!",
//     "The whether is nice.",
//     "I whish everyday could be like today.",
// ]

// var rightResponses = [
//     "Howdy!",
//     "Hola Amigo!",
//     "It would be a nice day for a hike.",
//     "We should go kyaking.",
// ]
// var randomAnswer = leftResponses[Math.floor(Math.random() * leftResponses.length)];
// var randomAnswerTwo = rightResponses[Math.floor(Math.random() * rightResponses.length)];

// //clear text content
// document.querySelector("#clear-button").addEventListener("click", function () {
//     document.querySelector(".messages").textContent = (" ")
// });

// //  adding div classes left
// function myFunction() {
//     document.querySelector(".message left").classList.add("left");
// }

// // adding div class to right
// function myFunction() {
//     document.querySelector(".message right").classList.add("right");
// }

// // adding random answers to left
// document.body.addEventListener("dblclick", function () {
//     document.querySelector(".left").textContent = (randomAnswer)
// });

// // adding random answers to right
// document.body.addEventListener("dblclick", function () {
//     document.querySelector(".right").textContent = (randomAnswerTwo)
// });