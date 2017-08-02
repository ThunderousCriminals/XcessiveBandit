//Array containing all the GIFs
    //Initialize array with all gifs
    let gifArray = ['1.gif','2.gif','3.gif','4.gif','5.gif','6.gif','7.gif','8.gif','9.gif','10.gif']

//Get a random number in range between zero and GIF array's length
    //select random index between 0 - the final index of the array.
    let randIndex = Math.floor(Math.random()*gifArray.length)
   
    
//Set the body element's background image using the random number generated above
    //get selected gif.
    let randGif = gifArray[randIndex]
    //set the background image of body element to the randomly selected gif.
    let changeBG = document.body
    changeBG.style.backgroundImage = "url("+ randGif+")"
