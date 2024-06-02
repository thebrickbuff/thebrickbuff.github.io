// dropdown menu  ////////////////////////////////////////


$(document).ready(function() {
	$('.dropdown').click(function() {
		$('.dropdown-content').slideToggle(300);
		$('.spacer').slideToggle(300);
        $('div.dropdown').toggleClass('dropdown-background');
		$('span.top').toggleClass('bar1');
		$('span.middle').toggleClass('bar2');
		$('span.bottom').toggleClass('bar3');
	});
});

//  Insert favicon /////////////////////////////////

const head = document.getElementById("head");

const favicon = `
    <link rel="apple-touch-icon" sizes="180x180" href="./resources/images/favicon_io/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="./resources/images/favicon_io/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="./resources/images/favicon_io/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">`

if(head){
    head.innerHTML += favicon;
};

// article filter

const news = document.getElementsByClassName("news");

const review = document.getElementsByClassName("review");

function filterBtnBackGround() {

	const filterBtnBackGround = document.getElementsByClassName("filter-btn-background");

	for (let i = 0; i < filterBtnBackGround.length; i++) {
            filterBtnBackGround[i].classList.remove("filter-btn-background");
        }

    event.currentTarget.classList.add("filter-btn-background")
};

function articleFilterAll() {
	
	if (news) {
        for (let i = 0; i < news.length; i++) {
            news[i].style.display = "flex";
        }
   	};
	
	if (review) {
		for (let i = 0; i < review.length; i++) {
            review[i].style.display = "flex";
        }
	};
};

function articleFilterNews() {
	
	if (news) {
        for (let i = 0; i < news.length; i++) {
            news[i].style.display = "flex";
        }
   	};
	
	if (review) {
		for (let i = 0; i < review.length; i++) {
            review[i].style.display = "none";
        }
	};
};

function articleFilterReview() {
	
	if (news) {
        for (let i = 0; i < news.length; i++) {
            news[i].style.display = "none";
        }
   	};
	
	if (review) {
		for (let i = 0; i < review.length; i++) {
            review[i].style.display = "flex";
        }
	};
};

// insert footer ////////////////////////////////////////

const footer = document.getElementById("footer");

const footerContents = `        <nav class="footer-nav">
			<a class="footer-link" href="./index.html" class="nav-link">Home</a>
			<a class="footer-link" href="./articles.html" class="nav-link">Articles</a>
			<a class="footer-link" href="./gallery.html" class="nav-link">Gallery</a>
			<a class="footer-link" href="https://www.instagram.com/thebrickbuff/" class="nav-link" target="blank_">Instagram</a>
		</nav>

    	<div class="buy-lego"> 
    		<a href="https://www.lego.com/en-gb" target="blank_">
    		    <img class="buy-lego-logo" src="./resources/images/lego-logo.png">
    		</a>
    		<p class="buy-lego-text oswald">Buy Lego</p>
    	    
        </div>`;

if (footer) {
	footer.innerHTML += footerContents;
};

// insert copyright //////////////////////////////////////////

const copyright = document.getElementById("copyright");

const copyrightContent = `<p class="copyright">&copy; The Brick Buff, ` + new Date().getFullYear() + `</p><p class="copyright">Created by <a href="https://jameswaterman.uk/" class="copyright-link" target="blank_">James Waterman</a></p>`;

copyrightContentTwo = `<p class="copyright">&copy; The Brick Buff, ` + new Date().getFullYear();

if (copyright) {
	copyright.innerHTML += copyrightContentTwo;
};
