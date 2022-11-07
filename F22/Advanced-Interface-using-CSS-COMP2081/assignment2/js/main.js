const reviewsContainer = document.getElementById("output");
let pageNumber = 2;
let reviewNumber = 0;
let excerptPageNumber = 0;

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
        title: "Quick About",
        content: {
            0: "Stephen King is the author of more than sixty books, all of them worldwide bestsellers. His recent work includes Fairy Tale, Billy Summers, If It Bleeds, The Institute, Elevation, The Outsider, Sleeping Beauties (cowritten with his son Owen King), and the Bill Hodges trilogy: End of Watch, Finders Keepers, and Mr. Mercedes (an Edgar Award winner for Best Novel and a television series streaming on Peacock). His novel 11/22/63 was named a top ten book of 2011 by The New York Times Book Review and won the Los Angeles Times Book Prize for Mystery/Thriller. His epic works The Dark Tower, It, Pet Sematary, Doctor Sleep, and Firestarter are the basis for major motion pictures, with It now the highest-grossing horror film of all time. He is the recipient of the 2020 Audio Publishers Association Lifetime Achievement Award, the 2018 PEN America Literary Service Award, the 2014 National Medal of Arts, and the 2003 National Book Foundation Medal for Distinguished Contribution to American Letters. He lives in Bangor, Maine, with his wife, novelist Tabitha King.",
        },
    },
    1: {
        title: "Press Biography",
        content: {
            0: `Stephen King was born in Portland, Maine in 1947, the second son of Donald and Nellie Ruth Pillsbury King. He made his first professional short story sale in 1967 to Startling Mystery Stories. In the fall of 1971, he began teaching high school English classes at Hampden Academy, the public high school in Hampden, Maine. Writing in the evenings and on the weekends, he continued to produce short stories and to work on novels.`,
            1: `In the spring of 1973, Doubleday & Co., accepted the novel Carrie for publication, providing him the means to leave teaching and write full-time. He has since published over 50 books and has become one of the world's most successful writers. King is the recipient of the 2003 National Book Foundation Medal for Distinguished Contribution to the American Letters and the 2014 National Medal of Arts.`,
            2: `Stephen lives in Maine and Florida with his wife, novelist Tabitha King. They are regular contributors to a number of charities including many libraries and have been honored locally for their philanthropic activities.`,
        },
    },
    2: {
        title: "Full Biography",
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
};
let excerpt = {
    0: {
        0: `I’m sure I can tell this story. I’m also sure no one will believe it. That’s fine with me. Telling it will be enough. My problem—and I’m sure many writers have it, not just newbies like me—is deciding where to start.`,

        1: `My first thought was with the shed, because that’s where my adventures really began, but then I realized I would have to tell about Mr.Bowditch first, and how we became close. Only that never would have happened except for the miracle that happened to my father. A very ordinary miracle you could say, one that’s happened to many thousands of men and women since 1935, but it seemed like a miracle to a kid.`,

        2: `Only that isn’t the right place, either, because I don’t think my father would have needed a miracle if it hadn’t been for that goddamned bridge. So that’s where I need to start, with the goddamned Sycamore Street Bridge. And now, thinking of those things, I see a clear thread leading up through the years to Mr. Bowditch and the padlocked shed behind his ramshackle old Victorian.`,

        3: `But a thread is easy to break. So not a thread but a chain. A strong one. And I was the kid with the shackle clamped around his wrist.`,
    },
    1: {
        0: `The Little Rumple River runs through the north end of Sentry’s Rest (known to the locals as Sentry), and until the year 1996, the year I was born, it was spanned by a wooden bridge. That was the year the state inspectors from the Department of Highway Transportation looked it over and deemed it unsafe. People in our part of Sentry had known that since ’82, my father said. The bridge was posted for ten thousand pounds, but townies with a fully loaded pickup truck mostly steered clear of it, opting for the turnpike extension, which was an annoying and time-consuming detour. My dad said you could feel the planks shiver and shake and rumble under you even in a car. It was dangerous, the state inspectors were right about that, but here’s the irony: if the old wooden bridge had never been replaced by one made of steel, my mother might still be alive.`,

        1: `The Little Rumple really is little, and putting up the new bridge didn’t take long. The wooden span was demolished and the new one was opened to traffic in April of 1997.`,

        2: `“The mayor cut a ribbon, Father Coughlin blessed the goddam thing, and that was that,” my father said one night. He was pretty drunk at the time. “Wasn’t much of a blessing for us, Charlie, was it ?”`,

        3: `It was named the Frank Ellsworth Bridge, after a hometown hero who died in Vietnam, but the locals just called it the Sycamore Street Bridge. Sycamore Street was paved nice and smooth on both sides, but the bridge deck — one hundred and forty-two feet long— was steel grating that made a humming sound when cars went over it and a rumble when trucks used it— which they could do, because the bridge was now rated at sixty thousand pounds. Not big enough for a loaded semi, but long-haulers never used Sycamore Street, anyway.`,

        4: `There was talk every year in the town council about paving the deck and adding at least one sidewalk, but every year it seemed like there were other places where the money was needed more urgently. I don’t think a sidewalk would have saved my mother, but paving might have. There’s no way to know, is there? That goddam bridge.`,
    },

    2: {
        0: `We lived halfway up the long length of Sycamore Street Hill, about a quarter of a mile from the bridge. There was a little gas-n-convenience store on the other side called Zip Mart. It sold all the usual stuff, from motor oil to Wonder Bread to Little Debbie cakes, but it also sold fried chicken made by the proprietor, Mr.Eliades(known to the neighborhood as Mr.Zippy).That chicken was exactly what the sign in the window said: THE BEST IN THE LAND. I can still remember how tasty it was, but I never ate a single piece after my mom died. I would have gagged it up if I tried.`,
        1: `One Saturday in November of 2003— the town council still discussing paving the bridge and still deciding it could wait another year— my mother told us she was going to walk down to the Zippy and get us fried chicken for dinner. My father and I were watching a college football game.`,

        2: `“You should take the car,” Dad said. “It’s going to rain.”`,

        3: `“I need the exercise,” Mom said, “but I’ll wear my Little Red Riding Hood raincoat.”`,

        4: `And that’s what she was wearing the last time I saw her. The hood wasn’t up because it wasn’t raining yet, so her hair was spilling over her shoulders. I was seven years old, and thought my mother had the world’s most beautiful red hair. She saw me looking at her through the window and waved. I waved back, then turned my attention to the TV, where LSU was driving. I wish I had looked longer, but I don’t blame myself. You never know where the trapdoors are in your life, do you?`,

        5: `It wasn’t my fault, and it wasn’t Dad’s fault, although I know he blamed himself, thought if only I’d gotten up off my dead ass and given her a ride to the damn store. It probably wasn’t the fault of the man in the plumbing truck, either. The cops said he was sober,
        and he swore he was keeping to the speed limit, which was 25 in our residential zone. Dad said that even if that were true, the man must have taken his eyes off the road, if only for a few seconds. Dad was probably right about that. He was an insurance claims adjuster, and he told me once that the only pure accident he ever heard of was a man in Arizona who was killed when a meteor hit him in the head.`,

        6: `“There’s always someone at fault,” Dad said. “Which is not the same as blame.”`,

        7: `“Do you blame the man who hit Mom?” I asked.`,

        8: `He thought about it. Raised his glass to his lips and drank. This was six or eight months after Mom died, and he’d pretty much given up on beer. By then he was strictly a Gilbey’s man.`,

        9: `“I try not to. And mostly I can do that unless I wake up at two in the morning with nobody in the bed but me. Then I blame him.”`,
    },
    3: {
        0: `Mom walked down the hill. There was a sign where the sidewalk ended. She walked past the sign and crossed the bridge.By then it was getting dark and starting to drizzle. She went into the store, and Irina Eliades(of course known as Mrs.Zippy) told her more chicken was coming out in three minutes, five at the most. Somewhere on Pine Street, not far from our house, the plumber had just finished his last job of that Saturday and was putting his toolbox in the back of his panel van.`,

        1: `The chicken came out, hot and crispy and golden.Mrs.Zippy boxed up an eight - piece and gave Mom an extra wing to eat on her walk home.Mom thanked her, paid, and stopped to look at the magazine rack. If she hadn’t done that, she might have made it all the way across the bridge— who knows? The plumber’s van must have been turning onto Sycamore Street and starting down the mile - long hill while Mom was checking out the latest issue of People.`,

        2: `She put it back, opened the door, and spoke to Mrs.Zippy over her shoulder: “Have a nice night.” She might have cried out when she saw the van was going to hit her, and God knows what she might have been thinking, but those were the last words she ever spoke. She went out. The rain was coming down cold and steady by then, silvery lines in the glow of the one streetlight on the Zip Mart side of the bridge.`,

        3: `Munching on her chicken wing, my mother walked onto the steel deck. Headlights picked her out and threw her shadow long behind her. The plumber passed the sign on the other side, the one that reads BRIDGE SURFACE FREEZES BEFORE ROAD! PLEASE USE CAUTION! Was he looking in his rear-view mirror? Maybe checking for messages on his phone? He said no to both, but when I think of what happened to her that night, I always think of my dad saying the only pure accident he ever heard of was the man who took a meteor to the head.`,

        4: `There was plenty of room; the steel bridge was quite a bit wider than the wooden version had been. The problem was that steel grating. He saw my mother halfway across the bridge and hit the brake, not because he was speeding(or so he said) but out of pure instinct. The steel surface had started to freeze. The panel truck skidded and slued, starting to come sideways. My mother shrank against the bridge rail,
        dropping her little piece of chicken. The panel truck slued further, struck her, and sent her spinning along the rail like a top. I don’t want to think about the parts of her that were torn off in that death-spin, but I’m helpless not to sometimes. All I know is that the nose of the panel truck finally drove her into a bridge stanchion near the Zip Mart side of the bridge. Part of her went into the Little Rumple. Most of her stayed on the bridge.`,

        5: `I carry a picture of us in my wallet. I was maybe three when it was taken. She’s got me on her hip. One of my hands is in her hair. She had beautiful hair.`,
    },
    4: {
        0: `Shitty Christmas that year. You better believe it.`,

        1: `I remember the reception after the funeral. It was at our house. My father was there, greeting people and accepting condolences, and then he was gone. I asked his brother, my Uncle Bob, where he was. “He had to lie down,” Uncle Bob said. “He was really worn out, Charlie. Why don’t you go outside and play?”`,
        3: `I had never felt less like playing in my life, but I went outside. I passed a bunch of grownups who had come outside to smoke and I heard one of them say poor guy, drunk as a skunk. Even then, deep in grief for my mother, I knew who they were talking about.`,
        4: ` Before Mom died, my father was what I’d call “a regular drinker.” I was just a little kid in the second grade, so I suppose you have to take that with a grain of salt, but I stand by it. I never heard him slurring, he didn’t stumble around the place, he didn’t go out to bars, and he never laid a hand on me or my mother. He would come home with his briefcase and Mom would give him a drink, usually a martini. She’d have one, too. In the evening, while we were watching TV, he might have a couple of beers. That was it.`,
        5: `All that changed after the goddam bridge. He was drunk after the funeral(as a skunk), drunk on Christmas, and drunk on New Year’s Eve which, I found out later, people like him call Amateur Night).cIn the weeks and months after we lost her, he was drunk most of the time. Mostly at home. He still didn’t go out to bars at night(“Too many assholes like me, ”he said once), and he still never laid a hand on me, but the booze was out of control. I know that now; then I just accepted it. Kids do that. Dogs, too.`,
        6: ` I found myself getting my own breakfast two mornings a week, then four, then almost all the time.I’d eat Alpha-Bits or Apple Jacks in the kitchen and hear him snoring in the bedroom— great big motorboat snores. Sometimes he forgot to shave before leaving for work. After dinner(more and more that was take - out), I’d hide his car keys.If he needed a fresh bottle, he could walk down to the Zippy and get one. Sometimes I worried about him meeting a car on the goddam bridge, but not too much. I was sure(pretty sure, at least) that both of my parents couldn’t possibly get wiped out in the same place. My dad worked in insurance, and I knew what actuarial tables were: figuring the odds.`,
        7: `He was good at his job, my dad, and he skated along for over three years in spite of his boozing. Did he get warnings at work? I don’t know, but probably. Was he pulled over for driving erratically, once the drinking started in the afternoon? If he was, maybe he was let off with a warning. Make that probably, because he knew all the cops in town. Dealing with cops was part of his job.`,
        8: `There was a rhythm to our lives during those three years. Maybe not a good rhythm, not the sort you’d want to dance to, but one I could count on. I’d get home from school around three. My father would roll in around five, with a few drinks already under his belt and on his breath(he didn’t go out to the bars at night, but I found out later he was a regular at Duffy’s Tavern on his way home from the office). He’d bring a pizza, or tacos, or Chinese from Joy Fun. Some nights he’d forget and we’d order out… or rather, I would. And after dinner the real drinking would start. Mostly gin. Other stuff if the gin was gone. Some nights he fell asleep in front of the TV. Some nights he’d stumble into the bedroom, leaving his shoes and rumpled suit coat for me to put away. Once in awhile I’d wake up and hear him crying. It’s pretty awful to hear that in the middle of the night.`,
        9: `The crash came in 2006. It was summer vacation. I had a Shrimp League game at ten in the morning— hit two home runs and made an awesome
        catch. I came home just after noon and found my father already there, sitting in his chair and staring at the TV, where old-time movie stars were having a duel on some castle stairs. He was in his undershorts and sipping a white drink that smelled to me like straight Gilbey’s. I asked him what he was doing home.`,
        10: `Still looking at the swordfight and hardly slurring at all, he said : “I seem to have lost my job, Charlie. Or, if I can quote Bobcat Goldthwait, I know where it is, but someone else is doing it. Or soon will be.”`,
        11: `I thought I didn’t know what to say, but words came out of my mouth anyway. “Because of your drinking.”`,
        12: `“I’m going to stop,” he said.`,
        13: `I just pointed at the glass. Then I went into my bedroom and shut the door and started to cry.`,
        14: `He knocked on my door. “Can I come in?”`,
        16: `I didn’t answer. I didn’t want him to hear me blubbing.`,
        17: `“Come on, Charlie. I poured it down the sink.”`,
        18: `Like I didn’t know the rest of the bottle would be on the kitchen counter. And another one in the liquor cabinet. Or two. Or three.`,
        19: `“Come on, Charlie, what do you say?” Shay. I hated the slur in his voice.`,
        20: ` “Fuck you, Dad.”`,
        21: `I’d never said such a thing to him in my life, and I sort of wanted him to come in and give me a slap. Or a hug. Something, anyway. Instead I heard him shuffle into the kitchen, where the bottle of Gilbey’s would be waiting.`,
        22: `He was asleep on the couch when I finally came out. The TV was still on, but muted. It was some other black-and-white movie, this one featuring old cars racing around what was obviously a movieset. Dad always watched TCM when he was drinking, unless I was home and insisted on something else. The bottle was on the coffee table, mostly empty. I poured what was left down the sink. I opened the liquor cabinet and thought about pouring away everything else, but looking at the gin, the whiskey, the vodka nips, the coffee brandy— that just made me tired.You wouldn’t think a ten-year-old could be tired like that, but I was.`,
        23: `I put a Stouffer’s frozen dinner in the microwave for supper— Grandma’s Chicken Bake, our favorite— and shook him awake while it was cooking. He sat up, looked around like he didn’t know where he was, then started to make these horrible chugging sounds I’d never heard before.He wove his way to the bathroom with his hands over his mouth and I heard him puking. It seemed to me like it would never stop, but eventually it did. The microwave binged. I got the Chicken Bake out, using the oven mitts that said GOOD COOKIN’ on the left and GOOD EATIN’ on the right— you forget to use those mitts once while you’ re taking something hot out of the zapper and you never forget again. I blopped some on our plates and then went into the living room, where Dad was sitting on the couch with his head down and his hands laced together on the back of his neck.`,
        24: ` “Can you eat?”`,
        25: ` He looked up. “Maybe. If you bring me a couple of aspirin.”`,
        26: ` The bathroom stank of gin and something else, maybe bean dip, but at least he’d gotten all of it in the bowl and flushed it away. I sprayed some Glade around, then brought him the aspirin bottle and a glass of water. He took three and put the glass where the bottle of Gilbey’s had been. He looked up at me with an expression I’d never seen before, even after Mom died. I hate to say this, but I’m going to because it’s what I thought then: it was the expression of a dog that has taken a shit on the floor.`,
        27: `“I could eat if you gave me a hug.”`,
        28: `I hugged him and said I was sorry for what I said.`,
        29: `“It’s okay. Probably I deserved it.”`,
        30: `We went into the kitchen and ate as much of Grandma’s Chicken Bake as we could manage, which wasn’t very much. As he scraped our plates into the sink, he told me he was going to stop drinking, and that weekend he did. He told me that on Monday he was going to start looking
        for a job, but he didn’t. He stayed home, watched old movies on TCM, and when I came home from baseball practice and noon swim at the Y, he was pretty much blotto.`,
        31: `He saw me looking at him and just shook his head.“Tomorrow. Tomorrow. I absolutely promise.”`,
        32: `“I call bullshit,” I said, and went into my room.`,
    },
    5: {
        0: `That was the worst summer of my childhood. Was it worse than after your mother died? you could ask, and I’d say yes, because he was the only parent I had left and because it all seemed to be happening in slow motion.`,

        1: `He did make a halfhearted effort at job hunting the insurance biz, but nothing came of it, even when he shaved and bathed and dressed
        for success. Word gets around, I guess.`,
        2: `The bills came in and piled up on the table in the front hall, unopened. By him, at least. I was the one who opened them when the stack got too high. I put them in front of him and he wrote checks to cover them. I didn’t know when those checks would start to bounce back marked INSUFFICIENT FUNDS, and didn’t want to know. It was like standing on a bridge and imagining an out-of-control truck was skidding toward you. Wondering what your last thoughts would be before it squashed you to death.`,
        3: `He got a part-time job at the Jiffy Car Wash out by the turnpike extension. That lasted a week, then he either quit or got fired. He didn’t tell me which and I didn’t ask.`,
        4: `I made the All-Star Shrimp League team, but we got knocked out in the first two games of a double-elimination tournament. During the regular season I’d hit sixteen home runs, I was Star Market’s best power hitter, but in those two games I struck out seven times, once at a ball in the dirt and once sucking for a pitch so far over my head I would have needed an elevator to make contact. Coach asked what was wrong with me and I said nothing, nothing, just leave me alone. I was doing bad shit, too— some with a friend, some on my own.`,
        5: `And not sleeping very well. I wasn’t having nightmares like I did after my mother died, I just couldn’ tget to sleep, sometimes not until midnight or one in the morning. I started turning my clock around so I wouldn’t have to look at the numbers.`,
        6: `I didn’t exactly hate my father (although I’m sure I would have come to in time), but I felt contempt for him. Weak, weak, I’d think, lying in bed and listening to him snore. And of course I’d wonder what was going to happen to us. The car was paid for, which was good, but the house wasn’t and the size of those payments was horrifying to me. How long before he couldn’t make the monthly nut? That time would surely come, because the mortgage had another nine years to run, and there was no way the money would hold out that long.`,
        7: `Homeless, I thought. The bank will take the house, like in The Grapes of Wrath, and we’ ll be homeless.`,
        8: `I had seen homeless people downtown, plenty of them, and when I couldn’t sleep my mind turned to them. I thought about those urban wanderers a lot. Wearing old clothes that bagged on their skinny bods or stretched on their corpulent ones. Sneakers held together with duct tape. Crooked glasses. Long hair. Crazy eyes. Boozy breath. I thought about us sleeping in our car down by the old trainyards or in the Walmart parking lot among the RVs. I thought of my father pushing a shopping cart full of all we had left. I always saw my bedside alarm clock in that basket. I don’t know why that horrified me, but it did.`,
        9: `Pretty soon I’d be going back to school, homeless or not. Some of the kids on my team would probably start calling me Strike-Out Charlie.  Which would be better than Juicer’s Kid Charlie, but how long before that got into the mix? People on our street already knew that George Reade didn’t go to work anymore, and they almost certainly knew why. I didn’t kid myself about that.`,
        10: `We were never a churchgoing family, or religious at all in any conventional sense. Once I asked my mom why we didn’t go to church— was it because she didn’t believe in God? She told me that she did, but she didn’t need a minister (or a priest, or a rabbi) to tell her how to believe in Him. She said she only needed to open her eyes and look around to do that. Dad said he was brought up a Baptist but quit going when his church got more interested in politics than the Sermon on the Mount.`,
        11: `But one night about a week before school was scheduled to start again, it came into my mind to pray. The urge was so strong it was really a compulsion. I got down on my knees beside my bed, folded my hands, squeezed my eyes shut, and prayed that my father would quit drinking. “If you do that for me, whoever you are, I’ ll do something for you,” I said. “Promise and hope to die if I don’t keep it. You just show me what you want and I’ll do it. I swear.”`,
        12: `Then I got back into bed, and that night, at least, I slept through until morning.`,
    },
    6: {
        0: `Before he was fired, Dad worked for Overland National Insurance. It’s a big company. You’ve probably seen their ads, the ones with Bill and Jill, the talking camels. Very funny stuff. Dad used to say, “All the insurance companies use ha-ha ads to get eyeballs, but the laughing stops once the insured files a claim. That’s where I come in. I’m a claims adjuster, which means— nobody says it out loud— that I’m supposed to knock the contractual amount down. Sometimes I do, but here’s a secret— I always start out on the claimant’s side. Unless I find reasons not to be, that is.”`,
        1: `Overland’s Midwest headquarters is on the outskirts of Chicago, in what Dad called Insurance Alley. In his commuting days it was just a forty-minute drive from Sentry, an hour if the traffic was heavy. There were at least a hundred claims adjusters working out of that one office,
        and on a day in September of’ 08 one of the agents he used to work with came to see him. Lindsey Franklin was his name. Dad called him Lindy. It was in the late afternoon, and I was at the kitchen table, doing my homework.`,
        2: `That day had gotten off to a memorably shitty start. The house still smelled faintly of smoke even though I’d sprayed around the Glade. Dad had decided to make omelets for breakfast. God knows why he was up at six AM, or why he decided I needed an omelet, but he wandered away to use the bathroom or turn on the TV and forgot about what was on the stove. Still half-loaded from the night before, no doubt. I woke up to the bray of the smoke detector, ran into the kitchen in my underwear, and found smoke billowing up in a cloud.The thing in the frypan looked like a charred log.`,
        3: `I scraped it down the garbage disposer and ate Apple Jacks. Dad was still wearing an apron, which looked stupid. He tried to apologize and I mumbled something just to get him to shut up. What I remember about those weeks and months is that he was always trying to apologize and it drove me bugfuck.`,
        4: `But it was also a memorably good day, one of the best days, because of what happened that afternoon. You’re probably way ahead of me on this, but I’ ll tell you anyway, because I never stopped loving my dad, even when I didn’t like him, and this part of the story makes me happy`,
        5: `Lindy Franklin worked for Overland. He was also a recovering alcoholic. He wasn’t one of the claims agents who was particularly close to my father, probably because Lindy never stopped at Duffy’s Tavern after work with the other guys. But he knew why my dad had lost his job, and he decided to do something about it. To give it a try, at least. He made what I later learned is called a Twelfth Step visit. He had a bunch of claims appointments in our town, and once he finished with those, he decided on the spur of the moment to stop by our place. He later said he almost changed his mind because he didn’t have backup (recovering alcoholics usually make Twelfth Step visits with a partner, sort of like Mormons), but then he said what the hell and looked up our address on his phone. I don’t like to think what might have happened to us if he’d decided not to. I never would have been inside Mr.Bowditch’s shed, that’s for sure.`,
        6: `Mr.Franklin was wearing a suit and tie. He had a sharp haircut. Dad— unshaven, shirt untucked, barefoot— introduced us. Mr.Franklin shook my hand, said it was very nice to meet me, then asked if I minded going outside so he could speak to my father alone. I went willingly enough,
        but the windows were still open from the breakfast disaster and I heard quite a bit of what Mr.Franklin said. I remember two things especially. Dad said the drinking was because he still missed Janey so much. And Mr.Franklin said, “If booze would bring her back, I’d say fine. But it won’t, and how would she feel if she saw how you and your boy are living now?”`,
        7: `The other thing he said was, “Aren’t you sick and tired of being sick and tired?” That was when my father started to cry. Usually I hated it when he did that (weak, weak), but I thought maybe this crying was different.`,
    },
    7: {
        0: `You knew all that was coming, and probably you know the rest of the story as well. I’m sure you do if you’re in recovery yourself or know someone who is. Lindy Franklin took Dad to an AA meeting that night. When they got back, Mr.Franklin called his wife and said he was staying over with a friend. He slept on our pull-out couch and the next morning he took Dad to a seven AM meeting called Sober Sunrise. That became Dad’s regular meeting and it was where he got his first-year AA medallion. I skipped school so I could give it to him, and that time I was the one who did some blubbing. No one seemed to mind; there’s a lot of blubbing at those meetings. Dad gave me a hug afterward, and so did Lindy. By then I was calling him by his first name, because he was around a lot. He was my dad’s sponsor in the program.`,
        1: `That was the miracle. I know a lot about AA now, and know it happens to men and women all over the world, but it still seemed like a miracle to me.Dad didn’t get his first medallion exactly a year after Lindy’s Twelfth Step call, because he had a couple of slips, but he owned up to them and the AA people said what they always say, keep coming back, and he did, and the last slip— a single beer from a six pack he poured down the sink— was just before Halloween of 2009. When Lindy spoke at Dad’s first anniversary, he said that lots of people get offered the program but never get the program. He said Dad was one of the lucky ones. Maybe that was true, maybe my prayer was just a coincidence,
        but I chose to believe it wasn’t. In AA, you can choose to believe what you want. It’s in what recovering alkies call the Big Book.`,
        2: `And I had a promise to keep.`,
    },
    8: {
        0: `The only meetings I went to were Dad’s anniversary meetings, but as I say, Lindy was around a lot and I picked up most of the slogans AA people are always spouting. I liked you can’t turn a pickle back into a cucumber, and God don’t make junk, but the one that stuck with me— and does to this day— is something I heard Lindy tell Dad one night when Dad was talking about all the unpaid bills and how he was afraid of losing the house. Lindy said my father getting sober was a miracle. Then he added, “But miracles ain’t magic.”`,
        1: `Six months after sobering up, Dad reapplied at Overland, and with Lindy Franklin and some others backing him up— including his old boss,
        the one who pink- slipped him— he got his job back, but he was on probation and knew it. That made him work twice as hard. Then, in the fall of 2011 (two years sober), he had a discussion with Lindy that lasted so long that Lindy ended up sleeping on the pull-out couch again. Dad said he wanted to go independent, but he wouldn’t do it without Lindy’s blessing. After making sure that Dad wouldn’t start drinking again if his new business failed— as sure as he could be, anyway; recovery ain’t rocket science, either— Lindy told him to go ahead and take a shot.`,
        2: ` Dad sat me down and explained what that meant: working without a net. “So what do you think?”`,
        3: ` “I think you should say adios to those talking camels,” I told him, and that made him laugh. Then I said what I had to. “But
        if you start drinking again, you’ll screw it up.”`,
        4: `Two weeks later he gave Overland his notice, and in February of 2012 he hung out his shingle in a tiny office on Main Street: George Reade Investigator and Independent Claims Adjuster.`,
        5: `He didn’t spend much time in that hole-in-the-wall; mostly he was out pounding the pavement. He talked to cops, he talked to bail bondsmen(“Always good for leads, ”he said), but mostly he talked to lawyers. A lot of them knew him from his work at Overland, and knew he was on the square. They gave him jobs— the tough ones, where the big companies were either drastically reducing the amount they were willing to pay or denying the claim altogether. He worked long, long hours. Most nights I came home to an empty house and cooked my own dinner. I didn’t mind. At first when my dad finally did come in, I hugged him so I could surreptitiously smell his breath for the unforgettable aroma of Gilbey’s Gin.after awhile, though, I just hugged him. And he rarely missed a Sober Sunrise meeting.`,
        6: `Sometimes Lindy would come to lunch on Sundays, usually bringing take-out, and the three of us would watch the Bears on TV, or the White Sox
        if it was baseball season.On one of those afternoons, my father said business was picking up every month. “It would go faster if I got on the claimant’s side more often in slip-and-fall cases, but so many of them smell bad.”`,
        7: `“Tell me about it, ”Lindy said. “You could make short-term gains, but in the end that work would bite you on the ass.”`,
        8: `Just before the start of my junior year at Hillview High, Dad said we had to have a serious talk.I braced myself for a lecture about underage drinking, or a discussion about some of the crap I and my friend Bertie Bird had gotten up to during(and— for awhile— after) his drinking years, but neither of those were what he had in mind. It was school he wanted to talk about.He told me I had to do well if
        I wanted toget into a good college. Really well.`,
        9: `“My business is going to work. It was scary at first, there was that time when I had to reach out to my brother for a loan, but that’s almost paid back and I think I’ll be on solid ground before long. The phone rings a lot. When it comes to college, though…” He shook his head. I don’t think I’m going to be able to help you much, at least to start with. We’re damn lucky to be solvent at all. Which is my fault. I’m doing everything I can to remedy the situation—”`,
        10: `“I know.”`,
        11: `“—but you need to help yourself. You need to work.You need to score high on the SATs when you take them.”`,
        12: `I planned to take the Scholastic Aptitude in December, but didn’t say so. Dad was on a roll.`,
        13: `“You also need to think about loans, but only as a last resort— those loans’ll haunt you for a long time. Think scholarships. And play your sports, that’s also a road to scholarships, but mostly it’s grades. Grades, grades, grades. I don’t need to see you graduate valedictorian,
        but I need to see you in the top ten. Understand?”`,
        14: `“Yes, Father,” I said, and he gave me a playful swat.`,
    },
    9: {
        0: `I studied hard and made my grades. I played football in the fall and baseball in the spring. I made varsity in both sports as a sophomore.Coach Harkness wanted me to play basketball as well, but I told him no. I said I needed at least three months a year to do other things. Coach went away shaking his head at the sad state of youth in this degenerate age.`,
        1: `I went to some dances. I kissed some girls. I made some good friends, most of them jocks but not all. I discovered some metal bands I liked and played them loud. My dad never protested, but he got me EarPods for Christmas. There were terrible things in my future— I’ ll tell you about them eventually— but none of the terrible things I had lain awake imagining ever came to pass. It was still our house and my key still unlocked the front door. That was good. If you’ve ever imagined you might wind up spending cold winter nights in a car or a homeless shelter,
        you know what I’m talking about.`,
        2: `And I never forgot the deal I made with God. If you do that for me, I’ll do something for you, I’d said. On my knees I said it. You just show me what you want and I’ll do it. I swear. It had been a child’s prayer, so much magical thinking, but part of me,(most of me) didn’t believe that. Doesn’t now. I thought my prayer had been answered, just like in one of those corny Lifetime movies they show between Thanksgiving and Christmas. Which meant I had my end of the bargain to hold up. I felt that if I didn’t, God would take back the miracle and my dad would start drinking again. You have to keep in mind that high school kids— no matter how big the boys, no matter how beautiful the girls— are still mostly children inside.`,
        3: `I tried. In spite of days not just crammed with school and after-school activities but bulging with them, I did my best to pay back what I owed.`,
        4: `I joined a Key Club Adopt-A-Highway commitment. We got two miles of Highway 226, which is basically a wasteland of fast food joints, motels,
        and gas stations. I must have picked up a bazillion Big Mac boxes, two bazillion beer cans, and at least a dozen pairs of castoff undies. One Halloween I put on a stupid orange jumper and went around collecting for UNICEF. In the summer of 2012, I sat at a voter registration table downtown, although I was still a year and a half from being old enough to vote myself. I also helped out at my dad’s office on Fridays after practice, filing papers and doing computer input stuff— your basic scutwork— as it grew dark outside and we ate pizza from Giovanni’s straight out of the box.`,
        5: `Dad said all that stuff would look great on my college apps, and I agreed without telling him that wasn’t why I was doing it. I didn’ t want God deciding I wasn’t holding up my end, but sometimes I thought I could hear a heavenly whisper of disapproval: Not good enough, Charlie.Do you really think picking up roadside trash is payback for the good life you and your father are living now?`,
        6: `Which brings me— finally — to April of 2013, the year I was seventeen. And Mr.Bowditch.`,
    },
    10: {
        0: `Good old Hillview High! Seems like a long time ago to me now. In the winter I rode the bus,
        sitting at the back with Andy Chen, a friend of mine since elementary. Andy was a jock who went on to play basketball
        for Hofstra. Bertie was gone by then, moved away. Which was kind of a relief. There is such a thing as a good friend who is also a bad friend.In truth, Bertie and I were bad for each other.`,
        1: `In the fall and spring, I rode my bike because we live in a hilly town and biking was a good way to build up muscle strength in my legs and backside. It also gave me time to think and be alone, which I liked.Heading home from HHS it was Plain Street to Goff Avenue, then Willow Street to Pine. Pine Street intersected with Sycamore at the top of the hill that led down to the goddam bridge. And on the corner of Pine and Sycamore was the Psycho House, so named by Bertie Bird when we were only ten or eleven.`,
        2: `It was actually the Bowditch house, the name was right on the mailbox, faded but still legible, if you squinted. Still, Bertie had a point.We had all seen that movie(along with such other required eleven-year-old viewing as The Exorcist and The Thing), and it did look sort of like the house where Norman Bates lived with his stuffed mother. It wasn’t like any of the other neat little duplexes and ranchers on Sycamore and in the rest of our neighborhood. The Psycho House was a rambling slump - roofed Victorian, once probably white but now faded to a shade I’d call Feral Barncat Gray. There was an ancient picket fence running the length of the property, leaning forward in places and sagging back in others. A rusty waist-high gate barred the broken paving of the walk. The grass was mostly weeds that had run rampant. The porch looked like it was slowly coming detached from the house to which it belonged. All the shades were drawn, which Andy Chen said was pointless, since the Windows were too dirty to see through, anyway. Half-buried in the tall grass was a NO TRESPASSING sign. On the gate was a bigger sign reading BEWARE OF DOG.`,
        3: `Andy had a story about that dog, a German Shepherd named Radar, like the guy in the M*A*S*H TV show. We’d all heard him (not knowing this Radar was actually a her), and had gotten the occasional glimpse, but Andy was the only one who’d seen the dog up close. He said he stopped on his bike one day because Mr.Bowditch’s mailbox was open and stuffed so full of junk mail that some of it had fallen to the sidewalk and was blowing around.`,
        4: `“I picked up the litter and crammed it back in with the rest of the crap,” Andy said. “I was just trying to do him a favor, for crying out loud. Then I hear this growling and a barking that was like YABBA-YABBA-ROW-ROW, and I look up and here comes this fucking monster dog, must have weighed a hundred and twenty pounds at least, and he’s all teeth with slobber flying back and his eyes are fucking red.”`,
        5: `“Sure,” Bertie said. “Monster dog. Like Cujo in that movie. Riii-ight.”`,
        6: `“It was,” Andy said. “Swear to God. If it hadn’t been for the old guy yelling at him, he would have gone right through that gate. Which is so old it needs Medicure.”`,
        7: `“Medicare,” I said.`,
        8: ` “Whatever, dude. But the old guy came out on the porch and he yells, ‘Radar, down!’ and the dog dropped right down on its belly. Only it never stopped looking at me and it never stopped growling. Then the guy goes, he goes‘ What are you doing there, boy? Are you stealing my mail?’ So I go ‘No sir, it was blowing around and I was picking it up. Your mailbox is awful full, sir.’ And he goes, then he goes I’ll worry about my mailbox, you just get out of here.’ Which I did. ”Andy shook his head. “That dog would have torn my throat out. I know it.”`,
        9: `I was sure Andy was exaggerating, he had a habit of doing that, but I asked Dad about Mr.Bowditch that night. Dad said he didn’t know much about him, just that he was a lifelong bachelor who’d been living in that wreck of a house for longer than Dad had been living on Sycamore Street, which was going on twenty-five years.`,
        10: `“Your friend Andy isn’t the only kid he’s yelled at,” Dad said. “Bowditch is famous for his foul temper and his equally foul-tempered German Shepherd. The town council would love for him to die so they can tear that place down, but so far he’s hanging in there. I speak to him when I see him— which is rarely— and he seems civil enough, but I’m an adult. Some elderly guys have an allergy to kids. Steer clear of him would be my advice, Charlie.”`,
        11: `Which was no problem until that day in April of’ 13. Which I will now tell you about.`,
    },
    11: {
        0: `I stopped at the corner of Pine and Sycamore on my way home from baseball practice to un-peel my left hand from the handlebars of my bike and give it a shake. It was still red and throbbing from that afternoon’s drills in the gym (the field was still too muddy to be playable).Coach Harkness— who coached baseball as well as hoops— had me on first while a number of guys trying out for pitcher practiced pickoff throws. Some of those guys threw really hard. I won’t say Coach was getting back at me for refusing to play basketball— where the Hedgehogs had gone 5–20 the previous season— but I won’t say he wasn’t, either.`,
        1: `Mr.Bowditch’s slumped and rambling old Victorian was on my right, and from that angle it looked more like the Psycho House than ever. I was wrapping my hand around the left grip of my bike, ready to get going again, when I heard a dog let out a howl. It came from behind the house. I thought of the monster dog Andy had described, all big teeth and red eyes above its slavering jaws, but this was no YABBA-YABBA-ROW-ROW of a vicious attack animal; it sounded sad and scared. Maybe even desolate. I have thought back on that, wondering if it’s only hindsight, and have decided it wasn’t. Because it came again. And a third time, but low and kind of unwinding, as if the animal making it was thinking what’s the use.`,
        2: ` Then, much lower than that last unwinding howl: “Help.”`,
        3: ` If not for those howls, I would have coasted down the hill to my house and had a glass of milk and half a box of Pepperidge Farm Milanos,
        happy as a clam. Which could have been bad for Mr.Bowditch. It was getting late, the shadows drawing long toward evening, and that was a damn cold April. Mr.Bowditch could have lain there all night.`,
        4: `I got the credit for saving him— another gold star for my college applications, should I throw modesty to the winds as my father suggested and attach the newspaper article that was published a week later— but it wasn’t me, not really.`,
        5: `It was Radar that saved him, with those desolate howls.`
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

                    if (element.textContent.trim().toLowerCase().replace(/\s/g, "") == element2.id.trim().toLowerCase().replace(/\s/g, "")) {
                        element2.classList.add("show");
                        element2.classList.add("active");


                        let authorInformation = document.getElementById("authorInformation");
                        console.log(`ele 2: "${element2.textContent.trim().toLowerCase().replace(/\s/g, "")}" ==
                            "authorinformation"`);
                        if (
                            element.textContent.trim().toLowerCase().replace(/\s/g, "") ==
                            "authorinformation"
                        ) {
                            authorInformation.style.display = 'grid';
                        } else {
                            authorInformation.style.display = 'none';
                        }
                    }
                }
            }
        });
    }
}
/* 
<button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</button>
 <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">...</div> */


let buildExcerpt = (pageData, page) => {
    page++;
    let buttonsEl = document.getElementById("tabButtonsExcerpt");
    let contentEl = document.getElementById("tabContentExcerpt");

    let newButton = document.createElement('button');
    newButton.classList.add("nav-link");
    newButton.textContent = `Page: ${page}`;
    newButton.id = `excerptTabButton${page}`;
    newButton.dataset.bsTarget = `#excerptTab${page}`;
    newButton.dataset.bsToggle = "pill";
    newButton.type = "button";
    newButton.role = "tab";
    newButton.setAttribute("aria-controls", `excerptTab${page}`);
    newButton.ariaSelected = false;

    newButton.addEventListener("click", (e) => {
        let bookInfo = document.querySelector("#excerpt>div");
        bookInfo.scrollIntoView();
    })
    let newContent = document.createElement('div');
    newContent.classList.add("tab-pane");
    newContent.classList.add("fade");
    newContent.id = `excerptTab${page}`;
    newContent.setAttribute("role", "tabpanel");
    newContent.setAttribute("aria-labelledby", `excerptTabButton${page}`);

    for (const paragraph in pageData) {
        if (Object.hasOwnProperty.call(pageData, paragraph)) {
            const content = pageData[paragraph];

            let tempParagraph = document.createElement("p");
            tempParagraph.textContent = content;
            newContent.appendChild(tempParagraph);



        }
    }

    contentEl.appendChild(newContent);






    buttonsEl.appendChild(newButton);




};

for (const page in excerpt) {
    if (Object.hasOwnProperty.call(excerpt, page)) {
        const pageData = excerpt[page];
        excerptPageNumber += 1;
        buildExcerpt(pageData, page);
    }
};


let buildMediaReactions = () => {
    let mediaReactionsEl = document.getElementById("mediaReactions");


    for (const review in mediaReactions) {
        if (Object.hasOwnProperty.call(mediaReactions, review)) {
            const reviewObj = mediaReactions[review];
            let containerEl = document.createElement("article");
            containerEl.classList.add('contaier');

            let titleContainerEl = document.createElement("div");
            let reviewerEl = document.createElement("h5");
            let reviewEl = document.createElement("p");
            reviewerEl.textContent = reviewObj.reviewer;
            reviewEl.textContent = reviewObj.review;

            titleContainerEl.appendChild(reviewerEl);
            containerEl.appendChild(titleContainerEl);
            containerEl.appendChild(reviewEl);
            mediaReactionsEl.appendChild(containerEl);
        }
    }

};
buildMediaReactions();
/* 
<option value="hardCover">Hard Cover</option>
                    <option value="ebook">E-book</option> */



let topSelect = document.getElementById("topSelect");
let bottomSelect = document.getElementById("bottomSelect");

let ebook = document.querySelectorAll(".buyLinks")[0].children[2];
let ebook1 = document.querySelectorAll(".buyLinks")[1].children[2];
let hardCover = document.querySelectorAll(".buyLinks")[0].children[1];
let hardCover1 = document.querySelectorAll(".buyLinks")[1].children[1];



let selectClick = (evtValue) => {
    topSelect.value = `${evtValue}`;
    bottomSelect.value = `${evtValue}`;
    console.log(bottomSelect);
    if (evtValue == "ebook") {
        topSelect.value = "ebook";
        topSelect.selectedIndex = 1;
        bottomSelect.selectedIndex = 1;
        bottomSelect.value = "ebook";
        hardCover.style.display = "none";
        hardCover1.style.display = "none";
        ebook.style.display = "flex";
        ebook1.style.display = "flex";
    }
    if (evtValue == "hardCover") {
        topSelect.value = "hardCover";
        bottomSelect.value = "hardCover";
        topSelect.selectedIndex = 0;
        bottomSelect.selectedIndex = 0;
        hardCover.style.display = "flex";
        hardCover1.style.display = "flex";
        ebook.style.display = "none";
        ebook1.style.display = "none";
    }
}

topSelect.addEventListener('change', (e) => {
    selectClick(e.target.value)
});
bottomSelect.addEventListener("change", (e) => {
    selectClick(e.target.value)
});

selectClick("hardCover");


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
let navToHide = document.querySelector("main>nav>ul");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const intersecting = entry.isIntersecting;
        console.log(navToHide);

        for (const listItem in navToHide.children) {
            if (Object.hasOwnProperty.call(navToHide.children, listItem)) {
                const li = navToHide.children[listItem];
                console.log(
                    li.textContent.trim().toLowerCase().replace(/\s/g, "")
                );
                if (li.textContent.trim().toLowerCase().replace(/\s/g, "") == 'top' || li.textContent.trim().toLowerCase().replace(/\s/g, "") == "reviews") {
                    console.log('continued');
                    continue;
                }
                li.style.display = intersecting ? "flex" : "none";

            }
        }
    });
});

observer.observe(document.getElementById("globalNav"));


let buyNowButton = document.querySelector(".buyNowButton");
console.log(buyNowButton);
buyNowButton.addEventListener('click', (e) => {
    window.location.href = "https://www.amazon.com/exec/obidos/ASIN/1668002175?tag=simonsayscom";
});