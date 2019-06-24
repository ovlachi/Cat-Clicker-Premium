/* */
document.getElementById("clickme1").addEventListener("click", updateCounter, false)

let count1 = 0;
    function updateCounter() {
        count1++
        document.getElementById("counter1").innerHTML = "Counter: " + count1
    }

document.getElementById("clickme2").addEventListener("click", updateCounter2, false);

let count2 = 0;
    function updateCounter2() {
        count2++
        document.getElementById("counter2").innerHTML = "Counter: " + count2
    }


    