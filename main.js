const url = "https://dog.ceo/api/breeds/image/random"

//click listener on button

const generateDogButton = document.querySelector(".btn-primary")
generateDogButton.addEventListener("click",()=>{
    fetch(url)
    .then((response)=>{
        console.log("response recieved")
        return response.json()
    })
    .then((object)=>{
        console.log("response processed")
        let newDogImageUrl = object.message
        let dogTitle = newDogImageUrl.split("/")
        console.log(dogTitle[4])
        document.querySelector("img").src = newDogImageUrl
        document.querySelector(".card-title").innerHTML = dogTitle[4]
    })
})