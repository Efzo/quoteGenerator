
//to fetch the random quote api
async function quoteGenerator(){
  try{
      const response =  await fetch("https://api.quotable.io/random");
      const data =  await response.json();
      return data.content;
  }catch (error){
      console.log("Failed to fetch quotes because of " + error);
      return "Kindly check back later";
  }
}

async function showQuote(){
    const showQuoteText = document.getElementById("quote");
    const quoteData = await quoteGenerator();
    return showQuoteText.textContent = quoteData;
}


//To share post to twitter
function twitterPost(quote){
    const twiLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}`;
    window.open(twiLink, '_blank');
}

const tweetButton = document.getElementById("tweeterButton")
    tweetButton.addEventListener("click", function (){
    const quote = document.getElementById("quote").textContent;
    twitterPost(quote);
});


//to generate the button
const generateButton = document.getElementById("quoteButton");

generateButton.addEventListener("click", showQuote);

quoteGenerator();