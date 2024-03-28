

const print = console.log

const numberValue = [1,2,3,4,5,6,7,8,]
const letterValue = ["A", "B","C","D","E","F","G","H"]



const Matrix = [
    [0,1,0,0,0,1,1,0],
    [0,1,0,0,0,0,0,0],
    [0,1,0,0,0,0,0,0],
    [0,1,0,0,1,1,1,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,0],
]

counter = 0;

function checkHit(y,x) {
    print("checking coordinates:", Matrix[x][y])
    if (Matrix[x][y] == 1) {
        print("Ship is hit, good job bro :)")
        document.querySelector(".text").innerHTML = "Ship is hit, good job bro :)"
        document.getElementById("empty").innerHTML = `Counter = ${counter}`
        // get the ID of the element
        const elementToChange = "#matrix" + y + x
        document.querySelector(elementToChange).innerHTML = "HIT"
        console.log(elementToChange)
    } else {
        counter+=1
        document.getElementById("empty").innerText = `Counter =${counter}`
        print("You have missed the shot stupid")
        document.querySelector(".text").innerHTML = "You have missed the shot bro"
        const elementToChange = "#matrix" + y + x
        document.querySelector(elementToChange).innerHTML = "MISS"
    }
    if (counter>=20) {
        alert("You got too many guesses fam")
    }
}



