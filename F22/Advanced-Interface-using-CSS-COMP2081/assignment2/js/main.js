const reviewsContainer = document.getElementById("output");
let pageNumber = 2;
let reviewNumber = 0;

let mediaReactions = {
    0: {
        reviewer: "Vanity Fair",
        review: "Stephen King has all the daring, enchantment and even romance of a classic bedtime story, but King's signature unsettling style will keep you sitting up straight and wide-eyed rather than drifting off to dreamland.",
    },
    1: {
        reviewer: "Laura Miller, Slate",
        review: "You’ll be grateful that there are 600-plus pages of it to remind you several times over how much fun that kind of reading experience is... Good, evil, a kingdom to save, monsters to slay—these are the stuff that page-turners are made from.",
    },
    2: {
        reviewer: "The New York Times Book Review ",
        review: "A page-turner driven by memorably strange encounters and well-rendered, often thrilling action.",
    },
    3: {
        reviewer: "Colette Bancroft, The Tampa Bay Tribune",
        review: "An enthralling, adventurous read that will, like any genuine fairy tale, scare you half to death and lift up your heart… A splendid work of world-building.",
    },
    4: {
        reviewer: "Brian Truitt, USA Today",
        review: "Once upon a time, Stephen King dared to write a novel called ‘Fairy Tale’ and totally lived up to that simple but lofty title… The book bursts with creativity… A profound story of good vs. evil that’s timeless and timely… life-affirming… After turning that last page, you’ll feel a little stronger in spirit, yearn for another story and, dare we say, maybe even live happily ever after",
    },
    5: {
        reviewer: "The Chicago Tribune",
        review: "Lovely… captures the creeping suspense of childhood classics.",
    },
    6: {
        reviewer: "Emily Burnham, Bangor Daily News",
        review: "If writing this beautiful, exciting, touching fairy tale did the trick for him, then imagine what it will do for you as a reader.",
    },
    7: {
        reviewer: "Matthew Jackson, Syfy Wire",
        review: "Ambitious, pure, and powerful… One of King's grandest narrative statements, and another must-read book from a master.",
    },
};

let aboutAuthors = {
    0: {
        title: "Press Biography",
        content: {
            0: `Stephen King was born in Portland, Maine in 1947, the second son of Donald and Nellie Ruth Pillsbury King. He made his first professional short story sale in 1967 to Startling Mystery Stories. In the fall of 1971, he began teaching high school English classes at Hampden Academy, the public high school in Hampden, Maine. Writing in the evenings and on the weekends, he continued to produce short stories and to work on novels.`,
            1: `In the spring of 1973, Doubleday & Co., accepted the novel Carrie for publication, providing him the means to leave teaching and write full-time. He has since published over 50 books and has become one of the world's most successful writers. King is the recipient of the 2003 National Book Foundation Medal for Distinguished Contribution to the American Letters and the 2014 National Medal of Arts.`,
            2: `Stephen lives in Maine and Florida with his wife, novelist Tabitha King. They are regular contributors to a number of charities including many libraries and have been honored locally for their philanthropic activities.`,
        },
    },
    1: {
        title: "Main Biography",
        content: {
            0: `Stephen Edwin King was born in Portland, Maine in 1947, the second son of Donald and Nellie Ruth Pillsbury King. After his parents separated when Stephen was a toddler, he and his older brother, David, were raised by his mother. Parts of his childhood were spent in Fort Wayne, Indiana, where his father's family was at the time, and in Stratford, Connecticut. When Stephen was eleven, his mother brought her children back to Durham, Maine, for good. Her parents, Guy and Nellie Pillsbury, had become incapacitated with old age, and Ruth King was persuaded by her sisters to take over the physical care of the elderly couple. Other family members provided a small house in Durham and financial support. After Stephen's grandparents passed away, Mrs. King found work in the kitchens of Pineland, a nearby residential facility for the mentally challenged.`,
            15: `Stephen attended the grammar school in Durham and then Lisbon Falls High School, graduating in 1966. From his sophomore year at the University of Maine at Orono, he wrote a weekly column for the school newspaper, THE MAINE CAMPUS. He was also active in student politics, serving as a member of the Student Senate. He came to support the anti-war movement on the Orono campus, arriving at his stance from a conservative view that the war in Vietnam was unconstitutional. He graduated from the University of Maine at Orono in 1970, with a B.A. in English and qualified to teach on the high school level. A draft board examination immediately post-graduation found him 4-F on grounds of high blood pressure, limited vision, flat feet, and punctured eardrums.`,

            1: "He and Tabitha Spruce married in January of 1971. He met Tabitha in the stacks of the Fogler Library at the University of Maine at Orono,where they both worked as students.As Stephen was unable to find placement as a teacher immediately, the Kings lived on his earnings as a laborer at an industrial laundry, and her student loan and savings,  with an occasional boost from a short story sale to men 's magazines.",

            2: `Stephen made his first professional short story sale("The Glass Floor") to Startling Mystery Stories in 1967. Throughout the early years of his marriage, he continued to sell stories to men 's magazines. Many of these were later gathered into the Night Shift collection or appeared in other anthologies.`,

            3: `In the fall of 1971,
                Stephen began teaching high school English classes at Hampden Academy,
                the public high school in Hampden,
                Maine.Writing in the evenings and on the weekends,
                he continued to produce short stories and to work on novels.`,

            4: `In the spring of 1973,
                Doubleday & Co.accepted the novel Carrie
                for publication.On Mother 's Day of that year, Stephen learned from his new editor at Doubleday, Bill Thompson, that a major paperback sale would provide him with the means to leave teaching and write full-time.`,

            5: `At the end of the summer of 1973,
                the Kings moved their growing family to southern Maine because of Stephen 's mother'
                s failing health.Renting a summer home on Sebago Lake in North Windham
                for the winter,
                Stephen wrote his next - published novel,
                originally titled Second Coming and then Jerusalem 's Lot, before it became '
                Salem 's Lot, in a small room in the garage. During this period, Stephen'
                s mother died of cancer,
                at the age of 59.`,

            6: `Carrie was published in the spring of 1974. That same fall,
                the Kings left Maine
                for Boulder,
                Colorado.They lived there
                for a little less than a year,
                during which Stephen wrote The Shining,
                set in Colorado.Returning to Maine in the summer of 1975,
                the Kings purchased a home in the Lakes Region of western Maine.At that house,
                Stephen finished writing The Stand,
                much of which also isset in Boulder.The Dead Zone was also written in Bridgton.`,

            7: `In 1977,
                the Kings spent three months of a projected year - long stay in England,
                cut the sojourn short and returned home in mid - December,
                purchasing a new home in Center Lovell,
                Maine.After living there one summer,
                the Kings moved north to Orrington,
                near Bangor,
                so that Stephen could teach creative writing at the University of Maine at Orono.The Kings returned to Center Lovell in the spring of 1979. In 1980,
                the Kings purchased a second home in Bangor,
                retaining the Center Lovell house as a summer home.`,

            8: `Stephen and Tabitha now spend winters in Florida and the remainder of the year at their Bangor and Center Lovell homes.

                The Kings have three children: Naomi Rachel,
                Joe Hill and Owen Phillip,
                and four grandchildren.`,

            9: `Stephen is of Scots - Irish ancestry,
                stands 6 '4" and weighs about 200 pounds. He is blue-eyed, fair-skinned, and has thick, black hair, with a frost of white most noticeable in his beard, which he sometimes wears between the end of the World Series and the opening of baseball spring training in Florida. Occasionally he wears a moustache in other seasons. He has worn glasses since he was a child.`,

            10: `He has put some of his college dramatic society experience to use doing cameos in several of the film adaptations of his works as well as a bit part in a George Romero picture,
                Knightriders.Joe Hill King also appeared in Creepshow,
                which was released in 1982. Stephen made his directorial debut,
                as well as writing the screenplay,
                for the movie Maximum Overdrive(an adaptation of his short story "Trucks") in 1985.`,

            11: `Stephen and Tabitha provide scholarships
                for local high school students and contribute to many other local and national charities.`,
            12: `Stephen is the 2003 recipient of The National Book Foundation Medal
                for Distinguished Contribution to American Letters and the 2014 National Medal of Arts.`,
        },
    },
    2: {
        title: "",
        content: {
            0: "",
        },
    },
};

const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "14fc04b22fmsh316f7bb4d82555dp166249jsn7a012b0bd69e",
        "X-RapidAPI-Host": "amazon23.p.rapidapi.com",
    },
};

let fetch1 = async() => {
    fetch(
            `
                https: //amazon23.p.rapidapi.com/reviews?asin=1668002175&sort_by=helpful&page=${pageNumber}&country=US`,
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
};

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

let mainNav = document.querySelectorAll("main>nav>ul>li");
for (const li in mainNav) {
    if (Object.hasOwnProperty.call(mainNav, li)) {
        const element = mainNav[li];

        element.addEventListener("click", (e) => {
            let navTab = document.querySelectorAll("#nav-tab>button");
            for (const button in navTab) {
                if (Object.hasOwnProperty.call(navTab, button)) {
                    const element1 = navTab[button];
                    element1.classList.remove("active");
                    console.log(
                        ` ${element.textContent
              .trim()
              .toLowerCase()} == ${element1.textContent.trim().toLowerCase()}`
                    );
                    if (
                        element.textContent.trim().toLowerCase() ==
                        element1.textContent.trim().toLowerCase()
                    ) {
                        element1.classList.add("active");
                    }
                }
            }
            let displayTab = document.querySelectorAll("#tabContent>div");
            console.log(displayTab);
            for (const div in displayTab) {
                if (Object.hasOwnProperty.call(displayTab, div)) {
                    const element2 = displayTab[div];
                    element2.classList.remove("show");
                    element2.classList.remove("active");

                    if (
                        element.textContent.trim().toLowerCase().replace(/\s/g, "") ==
                        element2.id.trim().toLowerCase().replace(/\s/g, "")
                    ) {
                        element2.classList.add("show");
                        element2.classList.add("active");
                        let authorInformation =
                            document.getElementById("authorInformation");

                        if (
                            element2.textContent.trim().toLowerCase().replace(/\s/g, "") ==
                            "authorinformation"
                        ) {
                            authorInformation.style.display = grid;
                        } else {
                            authorInformation.style.display = none;
                        }
                    }
                }
            }
        });
    }
}

let buildMediaReactions = () => {
    let mediaReactionsEl = document.getElementById("mediaReactions");


    for (const review in mediaReactions) {
        if (Object.hasOwnProperty.call(mediaReactions, review)) {
            const reviewObj = mediaReactions[review];
            let containerEl = document.createElement("article");
            let reviewerEl = document.createElement("h5");
            let reviewEl = document.createElement("p");
            reviewerEl.textContent = reviewObj.reviewer;
            reviewEl.textContent = reviewObj.review;
            containerEl.appendChild(reviewerEl);
            containerEl.appendChild(reviewEl);
            mediaReactionsEl.appendChild(containerEl);
        }
    }

};
buildMediaReactions();


let buildAcordionItem = (input, type) => {
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

    acordionButtonEl.textContent = `${input.title}`;

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

    let mainAcordionEl;
    if (type == "review") {
        output.appendChild(
            buildReview(input.username, input.date, input.review, output)
        );
        mainAcordionEl = innerAcordionEl;
    }

    if (type == "aboutAuthor") {
        //for each biblography
        console.log(input);
        for (const paragraph in input.content) {
            if (Object.hasOwnProperty.call(input.content, paragraph)) {
                const paragraphText = input.content[paragraph];
                console.log(paragraphText);
                let tempP = document.createElement("p");
                tempP.textContent = paragraphText;
                output.appendChild(tempP);
            }
        }

        let innerAcordionEl = document.getElementById("authorAcordion");
        mainAcordionEl = innerAcordionEl;
    }

    acordionBodyEl.appendChild(output);

    acordionBodyContainerEl.appendChild(acordionBodyEl);

    acordionItemEl.appendChild(acordionBodyContainerEl);

    mainAcordionEl.appendChild(acordionItemEl);

    reviewNumber++;
    console.log(reviewNumber);
};

let buildReview = (
    username,
    date,
    reviewContent,
    container = reviewsContainer
) => {
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
    console.log("doneBuildReview");
};

let fetch2 = async() => {
    fetch(
            "https://amazon-product-scraper5.p.rapidapi.com/products/1668002175&page=3/reviews?api_key=d1a8234e072f8b7503c43956aa11e281",
            options1
        )
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            response.reviews.forEach((review) => {
                console.log(review);
                buildAcordionItem(review, "review");
                console.log("doneBuilding");
            });
        })
        .then(() => {
            try {
                let loadMoreLink = document.getElementById("loadMoreLink");
                console.log(loadMoreLink);
                loadMoreLink.remove();
            } catch {}

            buildLoadMoreLink();
        })
        .catch((err) => fetch2);
};
fetch2();

for (const about in aboutAuthors) {
    if (Object.hasOwnProperty.call(aboutAuthors, about)) {
        const element = aboutAuthors[about];
        buildAcordionItem(element, "aboutAuthor");
    }
}