$("#home").on('click', function()   
	 {
		window.location.href= 'http:englishrussia.com/';
			});

$("#login").on('click', function()   
	 {
		window.location.href= 'http:englishrussia.com/wp-login.php';
			});

$("#about").on('click', function()   
	 {
		window.location.href= 'http:englishrussia.com/about';
			});

$("#youtube").on('click', function()   
	 {
		window.open('https://www.youtube.com/user/englishrussiatv');
			});

$("#facebooknav").on('click', function()   
	 {
		window.open('https://www.facebook.com/English-Russia-219469644747681/');
			});

$("#join").on('click', function()   
	 {
		window.location.href= 'http:englishrussia.com/register-3/';
			});

$("#email").on('click', function()   
	 {
		window.location.href= 'https://englishrussia.com/#';
			});

$("#rss").on('click', function()   
	 {
		window.location.href= 'http://feeds.feedburner.com/englishrussia/GrPQ';
			});

var article1 = {artimage:"assets/images/article1.jpg", arttext:"assets/images/art1text.PNG", 
link:"http://englishrussia.com/2017/12/19/soviet-happiness-photos-of-soviet-people-happily-spending-their-free-time/"};

var article2 = {artimage:"assets/images/article2.jpg", arttext:"assets/images/art2text.PNG",
link:"http://englishrussia.com/2017/12/18/examples-of-soviet-cars-modifications-that-were-popular-back-then-in-ussr/"}; 

var article3 = {artimage:"assets/images/article3.jpg", arttext:"assets/images/art3text.PNG",
link:"http://englishrussia.com/2017/12/18/another-selection-of-weird-and-interesting-pictures-from-russia/"};

var article4 = {artimage:"assets/images/article4.jpg", arttext:"assets/images/art4text.PNG",
link:"http://englishrussia.com/2017/12/17/ice-trapped-cars-of-russia/"};

var article5 = {artimage:"assets/images/article5.jpg", arttext:"assets/images/art5text.PNG",
link:"http://englishrussia.com/2017/12/17/70-year-old-belorussian-retired-man-doesnt-want-to-get-old-becomes-bodybuilder/"};

var article6 = {artimage:"assets/images/article6.jpg", arttext:"assets/images/art6text.PNG",
link:"http://englishrussia.com/2017/12/05/faces-of-war-chechnya-1999/"};

var articles = [article1, article2, article3, article4, article5, article6];

var plane = {trendimage:"assets/images/plane.PNG", title:"Russian President’s Plane",
link:"http://englishrussia.com/2015/03/24/super-luxurious-russian-presidents-new-airplane-interiors/"};

var train = {trendimage:"assets/images/train.PNG", title:"The Hydro Dam Tram",
link:"http://englishrussia.com/2014/05/14/the-hydro-dam-tram/"};

var engine = {trendimage:"assets/images/engine.PNG", title:"An Engine Replacement",
link:"http://englishrussia.com/2009/09/21/an-engine-replacement/"};

var milpow = {trendimage:"assets/images/milpow.PNG", title:"The Last Breadth of the Soviet Military Power",
link:"http://englishrussia.com/2014/01/15/the-last-breath-of-the-soviet-military-power/"};

var mig = {trendimage:"assets/images/mig.PNG", title:"The Mig Story",
link:"http://englishrussia.com/2008/10/20/the-mig-story/"};

var sausage = {trendimage:"assets/images/sausage.PNG", title:"Sausage Delivery, Moldavian Way",
link:"http://englishrussia.com/2014/03/11/sausage-delivery-moldavian-way/"};

var randPosts = [plane, train, engine, milpow, mig, sausage];

var categories = ["Abandoned (87)", "Automotive (1,238)", "Business (400)", "Culture (2,044)", "Economics (447)", 
				"Exclusive (1,253)", "Fiction (65)", "Funny (3,542)", "History (2,829)", "Interesting Facts (511)", 
				"Law (147)", "Other (1,181)", "Paid (1)", "Photos (9,104)", "Russian Army (1,218)", 
				"Russian Art (969)", "Russian Food (59)", "Russian Music (15)", "Russian Nature (1,109)", 
				"Russian People (3,144)", "Science (608)", "Society (3,365)", "Sports (226)", "Technology (3,081)", 
				"Transport (235)", "Travel (38)", "Ukraine (94)", "Video (1,005)"];

var archive = ["December 2017", "November 2017", "October 2017", "September 2017", "August 2017", "July 2017", 
				"June 2017", "May 2017", "April 2017", "March 2017", "February 2017", "January 2017", "December 2016", 
				"November 2016", "October 2016", "September 2016", "August 2016", "July 2016", "June 2016", 
				"May 2016", "April 2016", "March 2016", "February 2016", "January 2016", "December 2015", 
				"November 2015", "October 2015", "September 2015", "August 2015", "July 2015", "June 2015", 
				"May 2015", "April 2015", "March 2015", "February 2015", "January 2015", "December 2014", 
				"November 2014", "October 2014", "September 2014", "August 2014", "July 2014", "June 2014", 
				"May 2014", "April 2014", "March 2014", "February 2014", "January 2014", "December 2013", 
				"November 2013", "October 2013", "September 2013", "August 2013", "July 2013", "June 2013", 
				"May 2013", "April 2013", "March 2013", "February 2013", "January 2013", "December 2012", 
				"November 2012", "October 2012", "September 2012", "August 2012", "July 2012", "June 2012", 
				"May 2012", "April 2012", "March 2012", "February 2012", "January 2012", "December 2011", 
				"November 2011", "October 2011", "September 2011", "August 2011", "July 2011", "June 2011", 
				"May 2011", "April 2011", "March 2011", "February 2011", "January 2011", "December 2010", 
				"November 2010", "October 2010", "September 2010", "August 2010", "July 2010", "June 2010", 
				"May 2010", "April 2010", "March 2010", "February 2010", "January 2010", "December 2009", 
				"November 2009", "October 2009", "September 2009", "August 2009", "July 2009", "June 2009", 
				"May 2009", "April 2009", "March 2009", "February 2009", "January 2009", "December 2008", 
				"November 2008", "October 2008", "September 2008", "August 2008", "July 2008", "June 2008", 
				"May 2008", "April 2008", "March 2008", "February 2008", "January 2008","December 2007", 
				"November 2007", "October 2007", "September 2007", "August 2007", "July 2007", "June 2007", 
				"May 2007", "April 2007", "March 2007", "February 2007", "January 2007", "December 2006", 
				"November 2006", "October 2006", "September 2006", "August 2006"];

function postgen() {
	for (i = 0; i <randPosts.length; i++) {
	var trendimage = $("<img>");
	var href = $("<a>");
	var title = $("<h6>");
	trendimage.addClass("trendimage");
	title.addClass("title");
	trendimage.attr("src", randPosts[i].trendimage);
	title.attr("src", randPosts[i].title);
	href.attr("href", randPosts[i].link);
	href.html(trendimage);
	$(".trending").append(title);
    $(".trending").append(href);
    	}	
	};
postgen();				

function artgen() {
	for (i = 0; i <articles.length; i++) {
    var image = $("<img>");
	var text = $("<img>");
	var href = $("<a>");
	image.addClass("image");
	text.addClass("text");
	image.attr("src", articles[i].artimage);
	text.attr("src", articles[i].arttext);
	href.attr("href", articles[i].link);
	href.html(image);
    $(".column").append(href);
    $(".column").append(text);
		}	
	};
artgen();

function catgen() {
	for (i = 0; i < categories.length; i++) {
    var li = $("<li>");

    li.text(categories[i]);
    $(".categories").append(li);
		}	
	};
catgen();

function arcgen() {
	for (i = 0; i < archive.length; i++) {
    var li = $("<li>");

    li.text(archive[i]);
    $(".archive").append(li);
		}	
	};
arcgen();

var d = new Date();
        document.getElementById("date").innerHTML = new Date;










	 