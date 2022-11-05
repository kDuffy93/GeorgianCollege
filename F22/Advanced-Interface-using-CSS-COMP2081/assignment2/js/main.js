const reviewsContainer = document.getElementById("output");
let pageNumber = 2;
let reviewNumber = 0;
const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "14fc04b22fmsh316f7bb4d82555dp166249jsn7a012b0bd69e",
        "X-RapidAPI-Host": "amazon23.p.rapidapi.com",
    },
};

let fetch1 = async() => {
    fetch(
            `https://amazon23.p.rapidapi.com/reviews?asin=1668002175&sort_by=helpful&page=${pageNumber}&country=US`,
            options
        )
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            response.result.forEach((review) => {
                console.log(review);
                buildReview(
                    review.name,
                    review.review_data,
                    review.title,
                    review.review
                );
            });
            pageNumber += 1;
        })
        .then(() => {
            let loadMoreLink = document.getElementById("loadMoreLink");
            console.log(loadMoreLink);
            loadMoreLink.remove();
            buildLoadMoreLink();
        })
        .catch((err) => fetch1);
}




const options1 = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "14fc04b22fmsh316f7bb4d82555dp166249jsn7a012b0bd69e",
        "X-RapidAPI-Host": "amazon-product-scraper5.p.rapidapi.com",
    },
};

let buildLoadMoreLink = () => {
    let tempLoadMoreLink = document.createElement("a");
    tempLoadMoreLink.textContent = "Load More Reviews";
    tempLoadMoreLink.href = "#";
    tempLoadMoreLink.id = "loadMoreLink";
    tempLoadMoreLink.addEventListener("click", (e) => {
        e.preventDefault();
        fetch2();
    });
    reviewsContainer.appendChild(tempLoadMoreLink);
};

{
    /* <div class="accordion container" id="innerAcordion">
      <section class="accordion-item">
        <h2 class="accordion-header" id="reviewsButton">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#reviews"
            aria-expanded="true"
            aria-controls="reviews"
          >
            reviews
          </button>
        </h2>
        <div id="reviews"
          class="accordion-collapse collapse"
          aria-labelledby="reviewsButton"
          data-bs-parent="#bottomSection"
        >
          <div class="accordion-body">
            <div id="output">some text</div>
          </div>
        </div>
      </section>
    </div>; */
}
let buildAcordionItem = (review) => {
    console.log("buildAcordion");

    let innerAcordionEl = document.getElementById("innerAcordion");

    let acordionItemEl = document.createElement("section");
    acordionItemEl.classList.add("accordion-item");
    console.log(acordionItemEl);

    let acordionHeaderEl = document.createElement("h2");
    acordionHeaderEl.classList.add("accordion-header");
    acordionHeaderEl.id = `innerAcordion${reviewNumber}Button`;

    let acordionButtonEl = document.createElement("button");

    acordionButtonEl.classList.add("accordion-button");
    acordionButtonEl.type = "button";
    acordionButtonEl.dataset.bsToggle = "collapse";
    acordionButtonEl.classList.add("collapsed");

    acordionButtonEl.dataset.bsTarget = `#innerAcordion${reviewNumber}`;

    acordionButtonEl.ariaExpanded = true;

    //acordionButtonEl.ariacontrols = `innerAcordion${ReviewNumber}`;


    acordionButtonEl.textContent = `${review.title}`;



    acordionHeaderEl.appendChild(acordionButtonEl);
    acordionItemEl.appendChild(acordionHeaderEl);
    console.log(acordionItemEl);


    let acordionBodyContainerEl = document.createElement("section");
    acordionBodyContainerEl.classList.add("accordion-collapse");
    acordionBodyContainerEl.classList.add("collapse");
    //acordionBodyContainerEl.ariaLabelledby = `innerAcordion${ReviewNumber}Button`;
    acordionBodyContainerEl.dataset.bsParent = "#innerAcordion";
    acordionBodyContainerEl.id = `innerAcordion${reviewNumber}`;

    let acordionBodyEl = document.createElement("section");
    acordionBodyEl.classList.add("accordion-body");

    let output = document.createElement("div");

    output.appendChild(buildReview(review.username, review.date, review.review, output));
    acordionBodyEl.appendChild(output);


    acordionBodyContainerEl.appendChild(acordionBodyEl);







    acordionItemEl.appendChild(acordionBodyContainerEl);

    innerAcordionEl.appendChild(acordionItemEl);

    reviewNumber++;
    console.log(reviewNumber);

};

let buildReview = (username, date, reviewContent, container = reviewsContainer) => {
    console.log("buildReview");

    let card = document.createElement("section");
    let reviewerInfo = document.createElement("section");
    let reviewInfo = document.createElement("section");

    let nameElement = document.createElement("p");
    nameElement.textContent = username;
    reviewerInfo.appendChild(nameElement);

    let indexOfOn = date.indexOf("on");
    let reviewDate = document.createElement("p");
    reviewDate.textContent = date.substr(indexOfOn + 3);
    reviewerInfo.appendChild(reviewDate);

    let indexOfIn = date.indexOf("in");
    let lengthToOn = indexOfOn - indexOfIn;
    let reviewCountry = document.createElement("p");
    reviewCountry.textContent = date.substr(indexOfIn + 3, lengthToOn - 3);
    reviewerInfo.appendChild(reviewCountry);

    /*     let titleEl = document.createElement("h3");
        titleEl.textContent = title;
        reviewInfo.appendChild(titleEl); */

    let reviewContentEl = document.createElement("p");
    reviewContentEl.textContent = reviewContent;
    reviewInfo.appendChild(reviewContentEl);

    card.appendChild(reviewerInfo);
    card.appendChild(reviewInfo);
    if (container === reviewsContainer) {
        container.appendChild(card);
    } else {
        return card;
    }
    console.log('doneBuildReview');
};



let fetch2 = async() => {
    fetch(
            "https://amazon-product-scraper5.p.rapidapi.com/products/1668002175&page=3/reviews?api_key=d1a8234e072f8b7503c43956aa11e281",
            options1
        )
        .then((response) => response.json())
        .then((response) => {
            console.log(response.reviews);
            response.reviews.forEach((review) => {
                console.log(review);
                buildAcordionItem(review);
                console.log('doneBuilding');
            });
        })
        .then(() => {
            try {
                let loadMoreLink = document.getElementById("loadMoreLink");
                console.log(loadMoreLink);
                loadMoreLink.remove();
            } catch {

            }

            buildLoadMoreLink();
        })
        .catch((err) => fetch2);

}
fetch2();