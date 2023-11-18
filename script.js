/* <li class="d-flex justify-content-between align-items-center bg-info px-3 rounded-2">
    <p class="mt-3">İnput value</p>
    <div class="d-flex gap-3">
        <i class="fa-solid fa-thumbs-up fa-beat"></i>
        <i class="fa-solid fa-trash fa-bounce"></i>
    </div>
</li> */

const input = document.getElementById("input")
const btn = document.querySelector("#btn")
const liste = document.querySelector("#liste")

btn.addEventListener("click", toDo)

input.addEventListener ("keyup", (element) => {
    if(element.code === "Enter" || element.code === "NumpadEnter"){
        toDo()
    }
        
})

function toDo() {
    const li = document.createElement('li')
    // li.classList.add("d-flex", "justify-content-between", "align-items-center", "bg-warning", "px-3", "rounded-2")
    li.className = "d-flex justify-content-between align-items-center bg-warning mt-2 px-3 rounded-2"
    console.log(li)

    const p = document.createElement("p")
    p.classList.add("mt-3")
    p.innerHTML = input.value.trim()

    const iconDiv = document.createElement("div")
    iconDiv.setAttribute("class", "d-flex gap-3")

    const trash = document.createElement("i")
    trash.classList.add("fa-solid", "fa-trash", "fa-bounce")

    const okay = document.createElement("i")
    okay.setAttribute("class", "fa-solid fa-thumbs-up fa-beat")

    if (input.value != "") {
        iconDiv.appendChild(okay)
        iconDiv.appendChild(trash)
        li.appendChild(p)
        li.appendChild(iconDiv)
        liste.appendChild(li)

        okay.addEventListener("mouseover", ()=> {
            okay.style.color = "white"
        })

        okay.addEventListener("mouseout", () => {
            okay.style.color = "black"
        })

        okay.addEventListener("click", function() {
            // console.log(this.parentElement.previousElementSibling);
            let yazi = this.parentElement.previousElementSibling
            let parent = this.parentElement.parentElement

            parent.classList.toggle("bg-warning")
            parent.classList.toggle("bg-success")


            yazi.classList.toggle("text-decoration-line-through")
            yazi.classList.toggle("text-white")

        })

    } else {
        alert("Boş giriş yapamazsın.")
    }

    input.value = ""
}

// toDo()

