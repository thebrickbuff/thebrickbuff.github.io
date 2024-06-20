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

const headArticle = document.getElementById("headArticle");

const favicon = `
    <link rel="apple-touch-icon" sizes="180x180" href="./resources/images/favicon_io/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="./resources/images/favicon_io/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="./resources/images/favicon_io/favicon-16x16.png">
    <link rel="manifest" href="./resources/images/favicon_io/site.webmanifest">`

const faviconArticle = `
    <link rel="apple-touch-icon" sizes="180x180" href="../resources/images/favicon_io/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../resources/images/favicon_io/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../resources/images/favicon_io/favicon-16x16.png">
    <link rel="manifest" href="../resources/images/favicon_io/site.webmanifest">`;

// const ads = `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9784097939574891"
//      crossorigin="anonymous"></script>`

if(head){
    head.innerHTML += favicon;
} else if (headArticle) {
    headArticle.innerHTML += faviconArticle;
};


// insert article header ////////////////////////////////

const header = document.getElementById("header");

const headerContents = `<h1 class="page-title"><a href="../index.html">The Brick Buff</a></h1>
		<nav class="big-nav">
			<a href="../index.html" class="nav-link">Home</a>
			<a href="../articles.html" class="nav-link">Articles</a>
			<a href="../gallery.html" class="nav-link">Gallery</a>
			<a href="https://www.instagram.com/thebrickbuff/" class="nav-link" target="blank_">
				<img src="../resources/images/insta-link.png" class="insta-icon">
			</a>
		</nav>

				<!-- Dropdown -->

			    	<div class="dropdown">
	            <div class="hamburger">
	                <span class="top"></span>
	                <span class="middle"></span>
	                <span class="bottom"></span>
	            </div>
	            <div class="dropdown-content">
	                <nav>
	                    <a href="../index.html">Home</a>
	            		<a href="../articles.html">Articles</a>
	            		<a href="../gallery.html">Gallery</a>
	            		<a href="https://www.instagram.com/thebrickbuff/" target="blank_">Instagram</a>
	                </nav>
	            </div>
	        </div>`;

if (header) {
	header.innerHTML += headerContents;
}

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

// insert article footer 

const footerArticle = document.getElementById("footer-article");

const footerArticleContents = `        <nav class="footer-nav">
			<a class="footer-link" href="../index.html" class="nav-link">Home</a>
			<a class="footer-link" href="../articles.html" class="nav-link">Articles</a>
			<a class="footer-link" href="../gallery.html" class="nav-link">Gallery</a>
			<a class="footer-link" href="https://www.instagram.com/thebrickbuff/" class="nav-link" target="blank_">Instagram</a>
		</nav>

    	<div class="buy-lego"> 
    		<a href="https://www.lego.com/en-gb" target="blank_">
    		    <img class="buy-lego-logo" src="../resources/images/lego-logo.png">
    		</a>
    		<p class="buy-lego-text oswald">Buy Lego</p>
    	    
        </div>`;

if (footerArticle) {
	footerArticle.innerHTML += footerArticleContents;
};

// insert copyright //////////////////////////////////////////

const copyright = document.getElementById("copyright");

const copyrightContent = `<p class="copyright">&copy; The Brick Buff, ` + new Date().getFullYear() + `</p><p class="copyright">Created by <a href="https://jameswaterman.uk/" class="copyright-link" target="blank_">James Waterman</a></p>`;

copyrightContentTwo = `<p class="copyright">&copy; The Brick Buff, ` + new Date().getFullYear();

if (copyright) {
	copyright.innerHTML += copyrightContentTwo;
};











// Article placement and list //////////////////////////////////////////////////////////

const articleListOrigional = [

                 {
                     img: `article-images/crafting-table/minecraft1.webp`, 
                     title: `3Lego Crafting Table (21265) Celebrating 15 years of Minecraft`, 
                     type: `news`,
                     date: `7th June 2024`, 
                     link: `crafting-table.html`
                 },
                 {
                     img: `article-images/crafting-table/minecraft1.webp`, 
                     title: `4Lego Crafting Table (21265) Celebrating 15 years of Minecraft`, 
                     type: `news`,
                     date: `7th June 2024`, 
                     link: `crafting-table.html`
                 },
                     {
                     img: `article-images/crafting-table/minecraft1.webp`, 
                     title: `Lego Crafting Table (21265) Celebrating 15 years of Minecraft`, 
                     type: `news`,
                     date: `7th June 2024`, 
                     link: `crafting-table.html`
                 },
                  {
	                  img: `article-images/lambo-countach/lambo2.webp`, 
	                  title: `Lamborghini Countach 5000 Quattrovalvole (10337) Latest Edition to Lego Icons`, 
	                  type: `news`,
	                  date: `9th June 2024`,
	                  link: `lambo-countach.html`
	              },
                   {
                     img: `article-images/retiring-2024/retiring-2024.png`, 
                     title: `Every Lego Star Wars Set Retiring 2024`, 
                     type: `blog`,
                     date: `(date)`, 
                     link: `starwars-retiring-2024.html`
                 }
                 
                 ];

const articleList = articleListOrigional.toReversed();












// big article placer

const BigArticleContainer = document.getElementById("big-article");

if (BigArticleContainer) {

const bigArticle = (list) => {
	let first = list[0];

	let newElement = `<img  class="section-one-big-article-img" src="articles/` + first.img + `">` + `<h2 class="oswald large-article-title">` + first.title + `</h2>
			<p class="article-date">Published ` + first.date + `</p>
            <a class="large-read-button" href="articles/` + first.link + `">View Article</a>`;

    BigArticleContainer.innerHTML += newElement
};

if (BigArticleContainer) {
	bigArticle(articleList);
};

};

// small article placer ////////////

const homeSmallArticles = document.getElementById("home-small-elements");

if (homeSmallArticles) {

const homeSmallArticlesFunc = (list) => {
    const newElementOne = `<div class="section-one-small-article">
				<img class="section-one-small-articles-img" src="articles/`;

    const newElementTwo = `">
				<div class="article-display small-article-text">
					<h3 class="oswald small-article-title">`;

	const newElementThree = `</h3>
					<div class="article-date">Published `;

	const newElementFour = `</div>
				    <a class="small-read-button" href="./articles/`;

	const newElementFive = `">View Article</a>
			    </div>
			</div>`;

	const elementDivider = `<div class="small-article-division"></div>`;

	for (let i = 1; i < 5; i++) {
		const current = list[i];
		if (i != 1) {
            let newElement = elementDivider + newElementOne + current.img + newElementTwo + current.title + newElementThree + current.date + newElementFour + current.link +newElementFive;
            homeSmallArticles.innerHTML += newElement;
            console.log(i)
		} else if(i==1) {
            let newElement = newElementOne + current.img + newElementTwo + current.title + newElementThree + current.date + newElementFour + current.link +newElementFive;
            homeSmallArticles.innerHTML += newElement
		};
	};
};


if (homeSmallArticles) {homeSmallArticlesFunc(articleList);};

};

// article page articles

const articlePageContainer = document.getElementById("article-page-container");



const articlePageFunc = (list) => {
	const newElementOne = `<div class="news article">
            	<img src="articles/`;

    const newElementTwo = `" class="article-img">
            	<div class="article-display small-article-text">
					<h3 class="oswald small-article-title">`;

	const newElementThree = `</h3>
					<p class="article-date">Published `;

    const newElementFour = `</p>
				    <a class="small-read-button" href="./articles/`;

	const newElementFive = `">View Article</a>
			    </div>
            </div>`

    for (let i = 0; i < list.length; i++) {
    	const article = list[i];
    	const completeElement = newElementOne + article.img + newElementTwo + article.title + newElementThree + article.date + newElementFour + article.link + newElementFive;
    	articlePageContainer.innerHTML += completeElement;
    };

}

if (articlePageContainer) {
	articlePageFunc(articleList);
};




// article filter/////////////////////////////////////////////////////////////


const filterBtnBackGround = () => {

	const filterBtnBackGround = document.getElementsByClassName("filter-btn-background");

	for (let i = 0; i < filterBtnBackGround.length; i++) {
            filterBtnBackGround[i].classList.remove("filter-btn-background");
        }

    event.currentTarget.classList.add("filter-btn-background")
    
};

const articleFilterAll = () => {
	
   while(articlePageContainer.firstChild){
		articlePageContainer.removeChild(articlePageContainer.lastChild);
	};

	let allArray = articleList.filter(article => typeof article.type === "string");
	
    articlePageFunc(allArray);
    filterBtnBackGround();
	
};

const articleFilterNews = () => {

	while(articlePageContainer.firstChild){
		articlePageContainer.removeChild(articlePageContainer.lastChild);
	};

	let newsArray = articleList.filter(article => article.type == `news`);
	
    articlePageFunc(newsArray);
    filterBtnBackGround();
};

const articleFilterBlog = () => {

	while(articlePageContainer.firstChild){
		articlePageContainer.removeChild(articlePageContainer.lastChild);
	};

	let blogArray = articleList.filter(article => article.type == `blog`);
	
    articlePageFunc(blogArray);
    filterBtnBackGround();
};

if (document.getElementById("all")) {


document.getElementById("all").addEventListener("click", articleFilterAll);

document.getElementById("news").addEventListener("click", articleFilterNews);

document.getElementById("blog").addEventListener("click", articleFilterBlog);
};





// article footer links/////////////////////////////////////////


const articelFooterLinksFunc = (allArticles) => {

	const articleFootLinkContainer = document.getElementById("article-foot-links");

	const articleTitle = document.getElementById("article-title").innerHTML;

	const first = `<div class="article article-foot">
        	
        	    <div class="lndscpe-cnter-foot-img">
        		    <img src="`;

    const second = `" class="article-img">
        	    </div>

                <div class="article-display small-article-text">
				    <h3 class="oswald small-article-title">`;
    const third = `</h3>
				    <p class="article-date">`;

	const fourth = `</p>
				    <a class="small-read-button" href="`;

    const fifth = `">View Article</a>
			    </div>
		    </div>`;

    let c = 0;

	for(i=0; i<2; i++){


		if (allArticles[c].title === articleTitle) {
            
            c++;

            const completeFootLink = first + allArticles[c].img + second + allArticles[c].title +third + allArticles[c].date + fourth + allArticles[c].link + fifth;
        
            articleFootLinkContainer.innerHTML += completeFootLink;

            c++

		} else if (allArticles[c].title != articleTitle) {

		    const completeFootLink = first + allArticles[c].img + second + allArticles[c].title +third + allArticles[c].date + fourth + allArticles[c].link + fifth;
        
            articleFootLinkContainer.innerHTML += completeFootLink;

            c++;

		};
	};
};

if (document.getElementById("article-foot-links")){
	articelFooterLinksFunc(articleList);
};






















