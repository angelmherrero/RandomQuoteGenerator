var intervalId;

//Event listener to respond to "Show another quote" button clicks
const button = document.getElementById("loadQuote").addEventListener("click", function() {
// after each button click the quote will not change for a maximum of 30 seconds in the absence of a new click
// if we click again the timer resets to a new period of 30 seconds
	if (intervalId) {
		clearInterval(intervalId)
	}
	printQuote(quotes)
	intervalId = setInterval(function () {
		printQuote(quotes)
	}, 30000)
});

//Associating the quote and the background page color to the choosen index
function getRandomQuote(quotes) {
	document.body.style.backgroundColor = "#36b55c";
	var choosenIndex = Math.floor(Math.random()*(quotes.length + 1));;
//choosenIndex = setTimeOut(choosingIndex(quotes, choosenIndex),3000);
	if (choosenIndex < (quotes.length/5)) {document.body.style.backgroundColor = "red"};
	if (choosenIndex > (quotes.length/2)) {document.body.style.backgroundColor = "orange"};
	return quotes[choosenIndex];
}
//Customizing the shown quote info depending on the available compulsory (Who, What) and optional (Where and When) information
//When optional (Where and When) quote information is available it will show

function printQuote(quotes) {
	var selectedQuote = getRandomQuote(quotes);
	if (selectedQuote.quoteSource && selectedQuote.quoteDate != "undefined") {
		quoteToShow = "<p class='quote'>"+
					selectedQuote.quoteText+
					"</p><p class='source'>"+
					selectedQuote.quoteCreator+
					"<span class='citation'>"+
					selectedQuote.quoteSource+
					"</span><span class='year'>"+
					selectedQuote.quoteDate+
					"</span></p><img width='450' class='photo' src="+
					selectedQuote.quotePhoto+" alt='author photo' </img>" 
					;
//When nNo optional quote information (Where and When) is available (except a photo with the author) it will show					
	} else {
		quoteToShow = "<p class='quote'>"+
					selectedQuote.quoteText+
					"</p><p class='source'>"+
					selectedQuote.quoteCreator+
					"</p><img width='450' class='photo' src="+
					selectedQuote.quotePhoto+" alt='author photo'</img>" 
					;
	}				
//Replacing each time the default or the previous quote in the original HTML code with the newly produced random quote	
	const div = document.getElementById("quote-box");
	div.innerHTML = quoteToShow;
}

