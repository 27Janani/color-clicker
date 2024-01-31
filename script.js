const imageElement = document.getElementById("shinchan"); 
const counter = document.getElementById("Zero");
var count = 0;

imageElement.addEventListener("click", () => {
    count ++;
    counter.innerText = count;

    if(count == 50){
        counter.style.color = "red";
    } else{
        if(count == 100){
            counter.style.color = "green";
        } else{
            if(count == 1){
                img.src="wp5207267.jpg"
            }
        }
    }
});
