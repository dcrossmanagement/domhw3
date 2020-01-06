// - Change the background color of box1
    let box1 = document.querySelector("#box1")
    box1.style.backgroundColor = "red"
// - Set the font size in box1s to 44px
    let box1s = document.querySelector("#box1s")
    box1s.style.fontSize = "44px"
// - Shrink box2 by half
    let box2 = document.querySelector("#box2")
    box2.style.transform = "scale(.5)"
// - Double the size of box2s
    let box2s = document.querySelector("#box2s")
    box2s.style.transform = "scale(2)"
// - Create `div` with the class of `circle` and put it in the middle of box3
    let div = document.createElement("div")
    div.classList.add("circle")
    let box3 = document.querySelector("#box3")
    box3.appendChild(div)
// - Write an arrow function for #box5 called `clearFinished` that will move all the completed tasks the chores in the list that have the class "done" to the #box5s.
    clearFinished = () => {
        let box5done = document.querySelectorAll(".chore.done")
        let box5s = document.querySelector("#box5s ul")
        box5done.forEach((item) => {
            box5s.appendChild(item)
        })
    }
// - Call your function
    clearFinished()
// - Write a function called addChore that adds a new item to the list of chores, giving it the class "undone."
  //   -  using the .appendChild().
  //   -  using .innerHTML.
    addChore = (chore1, chore2) => {
        let box5 = document.querySelector("#box5 ul")
        let li1 = document.createElement("li")
        li1.textContent = chore1 + " (undone)"
        li1.classList.add("chore")
        li1.classList.add("undone")
        box5.appendChild(li1)

        box5.innerHTML += `<li class="chore undone">${chore2} (undone)</li>`
    }
// - Call your function
    addChore("raking leaves", "taking out the trash")
// - Reverse the text in #box6
    let box6 = document.querySelector("#box6")
    box6.textContent = box6.textContent.split("").reverse().join("")
// - Put <em></em> tags around the word "keep" in #box6s
    let box6s = document.querySelector("#box6s")
    box6s.innerHTML = box6s.innerHTML.replace("keep","<em>keep</em>")