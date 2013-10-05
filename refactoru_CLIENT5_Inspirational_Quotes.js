//Take user input.

$(document).ready(function() {

	// (function($) {
    
 //  	var allPanels = $('.accordion > dd').hide();
    
 //  	$('.accordion > dt > a').click(function() {
 //    	allPanels.slideUp();
 //    $(this).parent().next().slideDown();
 //    	return false;
 //  });

// })(jQuery);
	


$("#submitbutton").on("click", function() {
	

	var variableQuote = $(".Q").val();
	var variableAuthor = $(".A").val();

	var stars = $(".stars").val();


	console.log(variableQuote);
	console.log(variableAuthor);
	console.log(stars);

	//generates DOM element
	$("p").append(variableQuote + " by " + variableAuthor + "<br>");

//Add Quote to quote list, including Author
	var quoteList = {}
	quoteList[variableAuthor] = variableQuote;
	console.log(quoteList);

//Add author to Author list, combining all quotes for author
	// var authorList = {}
	// authorList[variableAuthor] = variableQuote//add all quotes to given author

	// quoteList.sort([compareFunction]) = 

	if (variableQuote === "" || variableAuthor === "") {
		alert("Please enter both a quote and author.");
	}

	

});


$("#randomquote").on("click", function() {
	var random = Math.random();
	console.log(random);


// });


	






});






//4. Button for rating quotes 1-5.

//5. Automatically sort quotes by rating.

//6. Button for random quote generator.

//7. Button for deleting quotes.

//8. Button for undo.