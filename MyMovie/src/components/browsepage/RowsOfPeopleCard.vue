<template>
<section class="p-8">
    <div class="flex justify-between mb-3 items-center">
    <h2 class="text-white text-lg">Popular people</h2>
    </div>
    <div v-if="isLoading">
        LOADING ...
    </div>
    <div v-else-if="error"></div>
    <div v-else class="flex flex-wrap justify-between">
        <PeopleCard v-for="person in data.results.slice(0,6)" :key="person.id" 
            :name="person.name"
            :image-path="person.profile_path"
            :known-credit="person.popularity"
        />
    </div>
</section>    
</template>

<script setup>
import {API_BASE_URL} from '@/constants/api-constants'
import PeopleCard from './PeopleCard.vue';
import {useFetch} from '@/composable/useFetch.js'
const {data ,isLoading, error, fetchWrapper} = useFetch(); 

fetchWrapper(`${API_BASE_URL}3/person/popular`);

// const resp = {
//   "page": 1,
//   "results": [
//     {
//       "adult": false,
//       "gender": 2,
//       "id": 1806659,
//       "known_for": [
//         {
//           "adult": false,
//           "backdrop_path": "/u6vFOUjFoPOLDH1f2fG2WQqyHch.jpg",
//           "genre_ids": [
//             35,
//             18
//           ],
//           "id": 806067,
//           "media_type": "movie",
//           "original_language": "ta",
//           "original_title": "மண்டேலா",
//           "overview": "An underprivileged hairdresser becomes the game changer in a local body election in a village where caste politics rules the roost. Will he be able to bring some changes to people's lives?",
//           "poster_path": "/t9A7nv8ac8VrXDt6tgu4UXi2zAq.jpg",
//           "release_date": "2021-04-05",
//           "title": "Mandela",
//           "video": false,
//           "vote_average": 7.1,
//           "vote_count": 15
//         },
//         {
//           "adult": false,
//           "genre_ids": [
//             18
//           ],
//           "id": 814397,
//           "media_type": "movie",
//           "original_language": "ta",
//           "original_title": "தர்மம்",
//           "overview": "A small boy dresses up as a beggar for a fancy dress contest. In the meanwhile, there is a man who joins as a traffic police officer and finds his immediate reporting cop to take money from the poor.",
//           "release_date": "2012-06-28",
//           "title": "Dharmam",
//           "video": false,
//           "vote_average": 0,
//           "vote_count": 0
//         },
//         {
//           "adult": false,
//           "backdrop_path": "/c8UbDSvpMNUdLGCFkSF3mjJsu8c.jpg",
//           "genre_ids": [
//             18,
//             28
//           ],
//           "id": 987895,
//           "media_type": "movie",
//           "original_language": "ta",
//           "original_title": "மாவீரன்",
//           "overview": "A cartoonist for a local Tamil newspaper is reluctant to face violence. Despite his fears, he is compelled to confront a corrupt politician. But the scared cartoonist has more to him than meets the eye.",
//           "poster_path": "/8w59pbhQRvLXuKNdBaKu51iJzoP.jpg",
//           "release_date": "2023-07-14",
//           "title": "Maaveeran",
//           "video": false,
//           "vote_average": 0,
//           "vote_count": 0
//         }
//       ],
//       "known_for_department": "Directing",
//       "name": "Madonne Ashwin",
//       "popularity": 414.631,
//       "profile_path": "/6P363mtxwZFcwzwRdJDxyKX1d9J.jpg"
//     },
//     {
//       "adult": false,
//       "gender": 1,
//       "id": 556356,
//       "known_for": [
//         {
//           "adult": false,
//           "backdrop_path": "/hpgda6P9GutvdkDX5MUJ92QG9aj.jpg",
//           "genre_ids": [
//             28,
//             12,
//             35
//           ],
//           "id": 384018,
//           "media_type": "movie",
//           "original_language": "en",
//           "original_title": "Fast & Furious Presents: Hobbs & Shaw",
//           "overview": "Ever since US Diplomatic Security Service Agent Hobbs and lawless outcast Shaw first faced off, they just have traded smack talk and body blows. But when cyber-genetically enhanced anarchist Brixton's ruthless actions threaten the future of humanity, they join forces to defeat him.",
//           "poster_path": "/qRyy2UmjC5ur9bDi3kpNNRCc5nc.jpg",
//           "release_date": "2019-08-01",
//           "title": "Fast & Furious Presents: Hobbs & Shaw",
//           "video": false,
//           "vote_average": 6.9,
//           "vote_count": 6487
//         },
//         {
//           "adult": false,
//           "backdrop_path": "/7jjwdoIVPJp7gcDo9uE1sVZi2Rs.jpg",
//           "genre_ids": [
//             18,
//             10749
//           ],
//           "id": 296096,
//           "media_type": "movie",
//           "original_language": "en",
//           "original_title": "Me Before You",
//           "overview": "A small town girl is caught between dead-end jobs. A high-profile, successful man becomes wheelchair bound following an accident. The man decides his life is not worth living until the girl is hired for six months to be his new caretaker. Worlds apart and trapped together by circumstance, the two get off to a rocky start. But the girl becomes determined to prove to the man that life is worth living and as they embark on a series of adventures together, each finds their world changing in ways neither of them could begin to imagine.",
//           "poster_path": "/Ia3dzj5LnCj1ZBdlVeJrbKJQxG.jpg",
//           "release_date": "2016-06-01",
//           "title": "Me Before You",
//           "video": false,
//           "vote_average": 7.9,
//           "vote_count": 11263
//         },
//         {
//           "adult": false,
//           "backdrop_path": "/izNpxVcjKbF9BiYF4GVqxCOfewL.jpg",
//           "genre_ids": [
//             18
//           ],
//           "id": 641662,
//           "media_type": "movie",
//           "original_language": "en",
//           "original_title": "Pieces of a Woman",
//           "overview": "When a young mother's home birth ends in unfathomable tragedy, she begins a year-long odyssey of mourning that fractures relationships with loved ones in this deeply personal story of a woman learning to live alongside her loss.",
//           "poster_path": "/OgUfLlhfBFx5BPK6LzBWFvBW1w.jpg",
//           "release_date": "2020-12-30",
//           "title": "Pieces of a Woman",
//           "video": false,
//           "vote_average": 7,
//           "vote_count": 1088
//         }
//       ],
//       "known_for_department": "Acting",
//       "name": "Vanessa Kirby",
//       "popularity": 287.53,
//       "profile_path": "/5fbvIkZ02RdcXfZHUUk4cQ9kILK.jpg"
//     },
//     {
//       "adult": false,
//       "gender": 1,
//       "id": 169337,
//       "known_for": [
//         {
//           "adult": false,
//           "backdrop_path": "/3gsn2rViobMWbyJ0M20Zpur20w0.jpg",
//           "genre_ids": [
//             35
//           ],
//           "id": 77953,
//           "media_type": "movie",
//           "original_language": "en",
//           "original_title": "The Campaign",
//           "overview": "Two rival politicians compete to win an election to represent their small North Carolina congressional district in the United States House of Representatives.",
//           "poster_path": "/jMWjJ13sFTT07DwjNlqh8VY4sK6.jpg",
//           "release_date": "2012-08-09",
//           "title": "The Campaign",
//           "video": false,
//           "vote_average": 5.8,
//           "vote_count": 1571
//         },
//         {
//           "adult": false,
//           "backdrop_path": "/xLW4UQ4zYf7fHrei9pqx4fJsfKy.jpg",
//           "genre_ids": [
//             53,
//             80
//           ],
//           "id": 199373,
//           "media_type": "movie",
//           "original_language": "en",
//           "original_title": "The Frozen Ground",
//           "overview": "An Alaska State Trooper partners with a young woman who escaped the clutches of serial killer Robert Hansen to bring the murderer to justice. Based on actual events.",
//           "poster_path": "/kf9tssa2uIy4ka7pU6DdmdfG3ul.jpg",
//           "release_date": "2013-07-11",
//           "title": "The Frozen Ground",
//           "video": false,
//           "vote_average": 6.3,
//           "vote_count": 1316
//         },
//         {
//           "adult": false,
//           "backdrop_path": "/sNsANx5OxYifdcW7UXbyL9GoMCO.jpg",
//           "genre_ids": [
//             35,
//             10749
//           ],
//           "id": 32856,
//           "media_type": "movie",
//           "original_language": "en",
//           "original_title": "Valentine's Day",
//           "overview": "More than a dozen Angelenos navigate Valentine's Day from early morning until midnight. Three couples awake together, but each relationship will sputter. A grade-school boy wants flowers for his first true love. Two high school seniors plan first-time sex at noon. A TV sports reporter gets the assignment to find romance in LA. A star quarterback contemplates his future. Two strangers meet on a plane. Grandparents, together for years, face a crisis. An 'I Hate Valentine's Day' dinner beckons the lonely and the lied to.",
//           "poster_path": "/qOTcfD2DdnOTmhH0r1TOE09VvNh.jpg",
//           "release_date": "2010-02-10",
//           "title": "Valentine's Day",
//           "video": false,
//           "vote_average": 5.9,
//           "vote_count": 2846
//         }
//       ],
//       "known_for_department": "Acting",
//       "name": "Katherine LaNasa",
//       "popularity": 274.558,
//       "profile_path": "/a1T5Smn7sCEtV8NHvTa5WaxgOML.jpg"
//     },
//     {
//       "adult": false,
//       "gender": 1,
//       "id": 933238,
//       "known_for": [
//         {
//           "adult": false,
//           "backdrop_path": "/jYEW5xZkZk2WTrdbMGAPFuBqbDc.jpg",
//           "genre_ids": [
//             878,
//             12
//           ],
//           "id": 438631,
//           "media_type": "movie",
//           "original_language": "en",
//           "original_title": "Dune",
//           "overview": "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
//           "poster_path": "/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
//           "release_date": "2021-09-15",
//           "title": "Dune",
//           "video": false,
//           "vote_average": 7.8,
//           "vote_count": 9099
//         },
//         {
//           "adult": false,
//           "backdrop_path": "/4SO6pbGJTpM9YYovYxFLY3MXqZn.jpg",
//           "genre_ids": [
//             53,
//             9648,
//             18
//           ],
//           "id": 346685,
//           "media_type": "movie",
//           "original_language": "en",
//           "original_title": "The Girl on the Train",
//           "overview": "Rachel Watson, devastated by her recent divorce, spends her daily commute fantasizing about the seemingly perfect couple who live in a house that her train passes every day, until one morning she sees something shocking happen there and becomes entangled in the mystery that unfolds.",
//           "poster_path": "/AhTO2QWG0tug7yDoh0XoaMhPt3J.jpg",
//           "release_date": "2016-10-05",
//           "title": "The Girl on the Train",
//           "video": false,
//           "vote_average": 6.4,
//           "vote_count": 5364
//         },
//         {
//           "adult": false,
//           "backdrop_path": "/jvUKejL9uZtI0yi2aoQZ2oykRTA.jpg",
//           "genre_ids": [
//             27,
//             878,
//             9648,
//             53
//           ],
//           "id": 395992,
//           "media_type": "movie",
//           "original_language": "en",
//           "original_title": "Life",
//           "overview": "The six-member crew of the International Space Station is tasked with studying a sample from Mars that may be the first proof of extra-terrestrial life, which proves more intelligent than ever expected.",
//           "poster_path": "/wztfli5NgYDgurVgShNflvnyA3Z.jpg",
//           "release_date": "2017-03-22",
//           "title": "Life",
//           "video": false,
//           "vote_average": 6.4,
//           "vote_count": 6707
//         }
//       ],
//       "known_for_department": "Acting",
//       "name": "Rebecca Ferguson",
//       "popularity": 255.962,
//       "profile_path": "/lJloTOheuQSirSLXNA3JHsrMNfH.jpg"
//     },
//     {
//       "adult": false,
//       "gender": 1,
//       "id": 3194176,
//       "known_for": [
//         {
//           "adult": false,
//           "backdrop_path": "/27bkw4o1zhjQAM4WIFQPohiph1X.jpg",
//           "genre_ids": [
//             18,
//             53
//           ],
//           "id": 931599,
//           "media_type": "movie",
//           "original_language": "tl",
//           "original_title": "Silip Sa Apoy",
//           "overview": "Take a peek at the life of an unhappy housewife who finds passionate love from her neighbor and how their affair brings them closer to fire.",
//           "poster_path": "/9grG4PVppBWqKs2hrKMEr6j3RWS.jpg",
//           "release_date": "2022-01-28",
//           "title": "Silip Sa Apoy",
//           "video": false,
//           "vote_average": 6.1,
//           "vote_count": 25
//         },
//         {
//           "adult": false,
//           "backdrop_path": "/ru5zAV1Ij6bQGedBkczqhiBmjzn.jpg",
//           "genre_ids": [
//             18
//           ],
//           "id": 1029446,
//           "media_type": "movie",
//           "original_language": "tl",
//           "original_title": "Selina's Gold",
//           "overview": "Selina's father sells her to Tiago who makes her a sex slave. With the help of Domeng, Tiago's blind slave, she plans their way out of this living hell.",
//           "poster_path": "/4a0X2GKDmhhp1U2FUKtKY6uNQHL.jpg",
//           "release_date": "2022-10-28",
//           "title": "Selina's Gold",
//           "video": false,
//           "vote_average": 7.2,
//           "vote_count": 23
//         },
//         {
//           "adult": false,
//           "backdrop_path": "/ougkufYSiruP8jrEHQanXN7DxRv.jpg",
//           "genre_ids": [
//             18,
//             10749
//           ],
//           "id": 893694,
//           "media_type": "movie",
//           "original_language": "tl",
//           "original_title": "Eva",
//           "overview": "When Eva gets involved in a steamy threesome with a houseboy and her lady boss, she realizes she has to choose only one between them.",
//           "poster_path": "/bXZ3j3kQgCRZj7KD4Q5F9m5ABaQ.jpg",
//           "release_date": "2021-12-24",
//           "title": "Eva",
//           "video": false,
//           "vote_average": 5.7,
//           "vote_count": 10
//         }
//       ],
//       "known_for_department": "Acting",
//       "name": "Angeli Khang",
//       "popularity": 184.594,
//       "profile_path": "/fpZfoK4ANjaRegAcAZkKVIj94kR.jpg"
//     },
//     {
//       "adult": false,
//       "gender": 1,
//       "id": 39459,
//       "known_for": [
//         {
//           "adult": false,
//           "backdrop_path": "/4NWWpT0jiMUak8r6jfpvG4eBgFU.jpg",
//           "genre_ids": [
//             28,
//             12,
//             878
//           ],
//           "id": 1771,
//           "media_type": "movie",
//           "original_language": "en",
//           "original_title": "Captain America: The First Avenger",
//           "overview": "During World War II, Steve Rogers is a sickly man from Brooklyn who's transformed into super-soldier Captain America to aid in the war effort. Rogers must stop the Red Skull – Adolf Hitler's ruthless head of weaponry, and the leader of an organization that intends to use a mysterious device of untold powers for world domination.",
//           "poster_path": "/vSNxAJTlD0r02V9sPYpOjqDZXUK.jpg",
//           "release_date": "2011-07-22",
//           "title": "Captain America: The First Avenger",
//           "video": false,
//           "vote_average": 7,
//           "vote_count": 20019
//         },
//         {
//           "backdrop_path": "/wZMY9X8jtSS5GXFue2lvhgaJkii.jpg",
//           "first_air_date": "2011-12-04",
//           "genre_ids": [
//             10765,
//             18,
//             9648
//           ],
//           "id": 42009,
//           "media_type": "tv",
//           "name": "Black Mirror",
//           "origin_country": [
//             "GB"
//           ],
//           "original_language": "en",
//           "original_name": "Black Mirror",
//           "overview": "Over the last ten years, technology has transformed almost every aspect of our lives before we've had time to stop and question it. In every home; on every desk; in every palm - a plasma screen; a monitor; a smartphone - a black mirror of our 21st Century existence.",
//           "poster_path": "/5UaYsGZOFhjFDwQh6GuLjjA1WlF.jpg",
//           "vote_average": 8.3,
//           "vote_count": 4219
//         },
//         {
//           "adult": false,
//           "backdrop_path": "/1RWLMyC9KcFfcaoViMiJGSSZzzr.jpg",
//           "genre_ids": [
//             28,
//             12,
//             878
//           ],
//           "id": 100402,
//           "media_type": "movie",
//           "original_language": "en",
//           "original_title": "Captain America: The Winter Soldier",
//           "overview": "After the cataclysmic events in New York with The Avengers, Steve Rogers, aka Captain America is living quietly in Washington, D.C. and trying to adjust to the modern world. But when a S.H.I.E.L.D. colleague comes under attack, Steve becomes embroiled in a web of intrigue that threatens to put the world at risk. Joining forces with the Black Widow, Captain America struggles to expose the ever-widening conspiracy while fighting off professional assassins sent to silence him at every turn. When the full scope of the villainous plot is revealed, Captain America and the Black Widow enlist the help of a new ally, the Falcon. However, they soon find themselves up against an unexpected and formidable enemy—the Winter Soldier.",
//           "poster_path": "/tVFRpFw3xTedgPGqxW0AOI8Qhh0.jpg",
//           "release_date": "2014-03-20",
//           "title": "Captain America: The Winter Soldier",
//           "video": false,
//           "vote_average": 7.7,
//           "vote_count": 17469
//         }
//       ],
//       "known_for_department": "Acting",
//       "name": "Hayley Atwell",
//       "popularity": 178.111,
//       "profile_path": "/jm5pDDjsbgizhxSd7baDxbGYMtW.jpg"
//     },
//     {
//       "adult": false,
//       "gender": 2,
//       "id": 64,
//       "known_for": [
//         {
//           "adult": false,
//           "backdrop_path": "/dqK9Hag1054tghRQSqLSfrkvQnA.jpg",
//           "genre_ids": [
//             18,
//             28,
//             80,
//             53
//           ],
//           "id": 155,
//           "media_type": "movie",
//           "original_language": "en",
//           "original_title": "The Dark Knight",
//           "overview": "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
//           "poster_path": "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
//           "release_date": "2008-07-14",
//           "title": "The Dark Knight",
//           "video": false,
//           "vote_average": 8.5,
//           "vote_count": 30054
//         },
//         {
//           "adult": false,
//           "backdrop_path": "/Yrpb32j3eMpMVX7ND3TnOkHnbl.jpg",
//           "genre_ids": [
//             28,
//             80,
//             18,
//             53
//           ],
//           "id": 49026,
//           "media_type": "movie",
//           "original_language": "en",
//           "original_title": "The Dark Knight Rises",
//           "overview": "Following the death of District Attorney Harvey Dent, Batman assumes responsibility for Dent's crimes to protect the late attorney's reputation and is subsequently hunted by the Gotham City Police Department. Eight years later, Batman encounters the mysterious Selina Kyle and the villainous Bane, a new terrorist leader who overwhelms Gotham's finest. The Dark Knight resurfaces to protect a city that has branded him an enemy.",
//           "poster_path": "/85cWkCVftiVs0BVey6pxX8uNmLt.jpg",
//           "release_date": "2012-07-16",
//           "title": "The Dark Knight Rises",
//           "video": false,
//           "vote_average": 7.8,
//           "vote_count": 21019
//         },
//         {
//           "adult": false,
//           "backdrop_path": "/zXwFJMwvQcJFitP9GcHZvHAHGe8.jpg",
//           "genre_ids": [
//             18,
//             36
//           ],
//           "id": 399404,
//           "media_type": "movie",
//           "original_language": "en",
//           "original_title": "Darkest Hour",
//           "overview": "In May 1940, the fate of World War II hangs on Winston Churchill, who must decide whether to negotiate with Adolf Hitler or fight on knowing that it could mean the end of the British Empire.",
//           "poster_path": "/z0K8uoNbrYKkbaP7wIeadJ4BmSL.jpg",
//           "release_date": "2017-11-22",
//           "title": "Darkest Hour",
//           "video": false,
//           "vote_average": 7.4,
//           "vote_count": 4695
//         }
//       ],
//       "known_for_department": "Acting",
//       "name": "Gary Oldman",
//       "popularity": 173.77,
//       "profile_path": "/2v9FVVBUrrkW2m3QOcYkuhq9A6o.jpg"
//     },
//     {
//       "adult": false,
//       "gender": 1,
//       "id": 2994460,
//       "known_for": [
//         {
//           "adult": false,
//           "backdrop_path": "/iy9uFMJvzlDC3kMFPI2Fk2HJZ2x.jpg",
//           "genre_ids": [
//             28,
//             35,
//             18
//           ],
//           "id": 628241,
//           "media_type": "movie",
//           "original_language": "te",
//           "original_title": "అల వైకుంఠపురములో",
//           "overview": "Fate plays a vital role in connecting the life of Bantu, a son who seeks validation from his cold-hearted father with the life of Raj, whose millionaire father wishes that he was more assertive.",
//           "poster_path": "/48DIQOSEgpoWUFBrmHW2En6aNZQ.jpg",
//           "release_date": "2020-01-12",
//           "title": "Ala Vaikunthapurramuloo",
//           "video": false,
//           "vote_average": 6.8,
//           "vote_count": 66
//         },
//         {
//           "adult": false,
//           "backdrop_path": "/tKBDhCFlnA3wAH39pnhIBlb8O46.jpg",
//           "genre_ids": [
//             28,
//             80,
//             53
//           ],
//           "id": 640484,
//           "media_type": "movie",
//           "original_language": "ta",
//           "original_title": "வலிமை",
//           "overview": "A honest cop tries to track down the brain behind a series of robberies and murders, but things turn personal when his family become pawns in the criminal's game.",
//           "poster_path": "/xa5USFw4I2SQPlD3wZ9kRn9shtB.jpg",
//           "release_date": "2022-02-24",
//           "title": "Valimai",
//           "video": false,
//           "vote_average": 5.7,
//           "vote_count": 20
//         },
//         {
//           "adult": false,
//           "backdrop_path": "/4OWjaj13K6gRFMuE9SnjfQp00Eg.jpg",
//           "genre_ids": [
//             10751,
//             10749,
//             18
//           ],
//           "id": 801505,
//           "media_type": "movie",
//           "original_language": "te",
//           "original_title": "వరుడు కావలెను",
//           "overview": "Bhoomi’s mother wants her to get married soon but she’s particular about what she wants. Akash returns to India after a successful stint abroad and while these opposite poles attract, will they make it work?",
//           "poster_path": "/4J7zfkZBUDADKQdehSwFync1BR0.jpg",
//           "release_date": "2021-10-29",
//           "title": "Varudu Kaavalenu",
//           "video": false,
//           "vote_average": 7.7,
//           "vote_count": 5
//         }
//       ],
//       "known_for_department": "Acting",
//       "name": "Vaishnavi Chaitanya",
//       "popularity": 165.179,
//       "profile_path": "/k1f5Si5olBdtxVa17m1eTvfZC4b.jpg"
//     },
//     {
//       "adult": false,
//       "gender": 2,
//       "id": 2786960,
//       "known_for": [
//         {
//           "adult": false,
//           "backdrop_path": "/lntyt4OVDbcxA1l7LtwITbrD3FI.jpg",
//           "genre_ids": [
//             10749,
//             18
//           ],
//           "id": 1010581,
//           "media_type": "movie",
//           "original_language": "es",
//           "original_title": "Culpa mía",
//           "overview": "Noah must leave her city, boyfriend, and friends to move into William Leister's mansion, the flashy and wealthy husband of her mother Rafaela. As a proud and independent 17 year old, Noah resists living in a mansion surrounded by luxury. However, it is there where she meets Nick, her new stepbrother, and the clash of their strong personalities becomes evident from the very beginning.",
//           "poster_path": "/w46Vw536HwNnEzOa7J24YH9DPRS.jpg",
//           "release_date": "2023-06-08",
//           "title": "My Fault",
//           "video": false,
//           "vote_average": 8.3,
//           "vote_count": 1164
//         },
//         {
//           "adult": false,
//           "backdrop_path": "/pmygxuqpZQmDAzGAba6wbDsHbR0.jpg",
//           "genre_ids": [
//             35
//           ],
//           "id": 1029528,
//           "media_type": "movie",
//           "original_language": "es",
//           "original_title": "Mañana es hoy",
//           "overview": "A family is on holiday in 1991 when their teenage daughter decides to elope with her boyfriend. Their parents travel forward in time to 2022 and see how much Spain has changed in three decades.",
//           "poster_path": "/1rgf4MomMFjOdkskY6NYoHSy6uz.jpg",
//           "release_date": "2022-11-29",
//           "title": "Tomorrow is Today",
//           "video": false,
//           "vote_average": 6.2,
//           "vote_count": 70
//         },
//         {
//           "backdrop_path": "/ccVoMjBMA9SMsDVJ58UV6Old6pV.jpg",
//           "first_air_date": "2022-09-02",
//           "genre_ids": [
//             35,
//             10765,
//             18
//           ],
//           "id": 115033,
//           "media_type": "tv",
//           "name": "You're Nothing Special",
//           "origin_country": [
//             "ES"
//           ],
//           "original_language": "es",
//           "original_name": "Tú no eres especial",
//           "overview": "Amaia's life, according to her, just sucks. Overnight, she has to say goodbye to her life in Barcelona, where she has all her friends and her day to day already established, to go live in her mother's village, where NOTHING ever happens. However, she will soon discover something that could turn her life around... that perhaps she has inherited the powers of her grandmother: a woman she never met, but with the reputation of being the only witch that has ever lived in the town of Salabarria.",
//           "poster_path": "/mol99NhNlwNMcQs5vExIIXzpe3Q.jpg",
//           "vote_average": 5.8,
//           "vote_count": 13
//         }
//       ],
//       "known_for_department": "Acting",
//       "name": "Gabriel Guevara",
//       "popularity": 159.505,
//       "profile_path": "/pviRYKEEmoPUfLYwP1VHJ6LQcRg.jpg"
//     },
//     {
//       "adult": false,
//       "gender": 1,
//       "id": 1767250,
//       "known_for": [
//         {
//           "adult": false,
//           "backdrop_path": "/lA5fOBqTOQBQ1s9lEYYPmNXoYLi.jpg",
//           "genre_ids": [
//             35,
//             28,
//             12,
//             14
//           ],
//           "id": 590223,
//           "media_type": "movie",
//           "original_language": "en",
//           "original_title": "Love and Monsters",
//           "overview": "Seven years since the Monsterpocalypse began, Joel Dawson has been living underground in order to survive. But after reconnecting over radio with his high school girlfriend Aimee, Joel decides to venture out to reunite with her, despite all the dangerous monsters that stand in his way.",
//           "poster_path": "/718NnyxyQuBQcGWt9sdelA1Zc3h.jpg",
//           "release_date": "2020-10-16",
//           "title": "Love and Monsters",
//           "video": false,
//           "vote_average": 7.3,
//           "vote_count": 3563
//         },
//         {
//           "adult": false,
//           "backdrop_path": "/eEF40Xk2twM3WjRNZftfo771gjv.jpg",
//           "genre_ids": [
//             878,
//             53,
//             18
//           ],
//           "id": 700391,
//           "media_type": "movie",
//           "original_language": "en",
//           "original_title": "65",
//           "overview": "65 million years ago, the only 2 survivors of a spaceship from Somaris that crash-landed on Earth, must fend off dinosaurs to reach the escape vessel in time before an imminent asteroid strike threatens to destroy the planet.",
//           "poster_path": "/rzRb63TldOKdKydCvWJM8B6EkPM.jpg",
//           "release_date": "2023-03-02",
//           "title": "65",
//           "video": false,
//           "vote_average": 6.2,
//           "vote_count": 1371
//         },
//         {
//           "adult": false,
//           "backdrop_path": "/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg",
//           "genre_ids": [
//             12,
//             28,
//             878
//           ],
//           "id": 299536,
//           "media_type": "movie",
//           "original_language": "en",
//           "original_title": "Avengers: Infinity War",
//           "overview": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
//           "poster_path": "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
//           "release_date": "2018-04-25",
//           "title": "Avengers: Infinity War",
//           "video": false,
//           "vote_average": 8.3,
//           "vote_count": 27224
//         }
//       ],
//       "known_for_department": "Acting",
//       "name": "Ariana Greenblatt",
//       "popularity": 154.378,
//       "profile_path": "/rm6yLSvxHsmyHUmKy10DmBrB4SH.jpg"
//     },
//     {
//       "adult": false,
//       "gender": 1,
//       "id": 6161,
//       "known_for": [
//         {
//           "adult": false,
//           "backdrop_path": "/vVBcIN68kFq681b4lObiNJhEVro.jpg",
//           "genre_ids": [
//             18,
//             10749
//           ],
//           "id": 453,
//           "media_type": "movie",
//           "original_language": "en",
//           "original_title": "A Beautiful Mind",
//           "overview": "John Nash is a brilliant but asocial mathematician fighting schizophrenia. After he accepts secret work in cryptography, his life takes a turn for the nightmarish.",
//           "poster_path": "/zwzWCmH72OSC9NA0ipoqw5Zjya8.jpg",
//           "release_date": "2001-12-11",
//           "title": "A Beautiful Mind",
//           "video": false,
//           "vote_average": 7.9,
//           "vote_count": 9334
//         },
//         {
//           "adult": false,
//           "backdrop_path": "/7jR6xSOqnWCrm3OGhm06Y8jGCYS.jpg",
//           "genre_ids": [
//             80,
//             18
//           ],
//           "id": 641,
//           "media_type": "movie",
//           "original_language": "en",
//           "original_title": "Requiem for a Dream",
//           "overview": "The hopes and dreams of four ambitious people are shattered when their drug addictions begin spiraling out of control. A look into addiction and how it overcomes the mind and body.",
//           "poster_path": "/nOd6vjEmzCT0k4VYqsA2hwyi87C.jpg",
//           "release_date": "2000-10-06",
//           "title": "Requiem for a Dream",
//           "video": false,
//           "vote_average": 8,
//           "vote_count": 8993
//         },
//         {
//           "adult": false,
//           "backdrop_path": "/5z75Q6nqgwgYfpMB9fVHQcw9gMz.jpg",
//           "genre_ids": [
//             18,
//             12
//           ],
//           "id": 86834,
//           "media_type": "movie",
//           "original_language": "en",
//           "original_title": "Noah",
//           "overview": "A man who suffers visions of an apocalyptic deluge takes measures to protect his family from the coming flood.",
//           "poster_path": "/vVLkHabnF5lVpCpqyhZBI5iCYMA.jpg",
//           "release_date": "2014-03-07",
//           "title": "Noah",
//           "video": false,
//           "vote_average": 5.6,
//           "vote_count": 5772
//         }
//       ],
//       "known_for_department": "Acting",
//       "name": "Jennifer Connelly",
//       "popularity": 150.15,
//       "profile_path": "/p17ymzw1sb9eo2SOp88jnwyryan.jpg"
//     },
//     {
//       "adult": false,
//       "gender": 1,
//       "id": 3458667,
//       "known_for": [
//         {
//           "adult": false,
//           "backdrop_path": "/nTFleA0vJNfphRaurvDoItnzTkr.jpg",
//           "genre_ids": [
//             18
//           ],
//           "id": 613703,
//           "media_type": "movie",
//           "original_language": "ta",
//           "original_title": "கடைசி விவசாயி",
//           "overview": "Maayandi, the only farmer in a village that has abandoned farming, is charged with a petty case that leads to his imprisonment.",
//           "poster_path": "/8TNnEojAEc8Kt6HMWgQNRPcL9J3.jpg",
//           "release_date": "2022-02-11",
//           "title": "Kadaisi Vivasayi",
//           "video": false,
//           "vote_average": 8.6,
//           "vote_count": 9
//         },
//         {
//           "adult": false,
//           "backdrop_path": "/gAv25JelDgr0w2P1q6gcmJ6MSzh.jpg",
//           "genre_ids": [
//             18,
//             35
//           ],
//           "id": 620637,
//           "media_type": "movie",
//           "original_language": "ta",
//           "original_title": "துக்ளக் தர்பார்",
//           "overview": "A budding politician has devious plans to rise in the ranks — until an unexpected new presence begins to interfere with his every crooked move.",
//           "poster_path": "/Ajxa9eE4vojurvYqSmRQVLSh6bt.jpg",
//           "release_date": "2021-09-10",
//           "title": "Tughlaq Durbar",
//           "video": false,
//           "vote_average": 6.3,
//           "vote_count": 8
//         },
//         {
//           "adult": false,
//           "backdrop_path": "/vuwEQmvlcJbMkBNxb84yq3Ov43C.jpg",
//           "genre_ids": [
//             35,
//             18
//           ],
//           "id": 1090969,
//           "media_type": "movie",
//           "original_language": "ta",
//           "original_title": "குட் நைட்",
//           "overview": "Mohan, an IT youngster with a snoring issue starts his life with Anu, the girl of his dreams, hiding his issue. However, trouble begins, when his snoring starts affecting his life and the health of his partner.",
//           "poster_path": "/aFTO0tCTxXazstWfhOQHPb3kcMT.jpg",
//           "release_date": "2023-05-12",
//           "title": "Good Night",
//           "video": false,
//           "vote_average": 9.2,
//           "vote_count": 3
//         }
//       ],
//       "known_for_department": "Acting",
//       "name": "Raichal Rabecca Philip",
//       "popularity": 149.396,
//       "profile_path": "/gLnsgnEMLcTwk4JJoVg9a2fDhd5.jpg"
//     },
//     {
//       "adult": false,
//       "gender": 2,
//       "id": 1136406,
//       "known_for": [
//         {
//           "adult": false,
//           "backdrop_path": "/fn4n6uOYcB6Uh89nbNPoU2w80RV.jpg",
//           "genre_ids": [
//             28,
//             12,
//             878,
//             18
//           ],
//           "id": 315635,
//           "media_type": "movie",
//           "original_language": "en",
//           "original_title": "Spider-Man: Homecoming",
//           "overview": "Following the events of Captain America: Civil War, Peter Parker, with the help of his mentor Tony Stark, tries to balance his life as an ordinary high school student in Queens, New York City, with fighting crime as his superhero alter ego Spider-Man as a new threat, the Vulture, emerges.",
//           "poster_path": "/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
//           "release_date": "2017-07-05",
//           "title": "Spider-Man: Homecoming",
//           "video": false,
//           "vote_average": 7.3,
//           "vote_count": 20203
//         },
//         {
//           "adult": false,
//           "backdrop_path": "/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg",
//           "genre_ids": [
//             28,
//             12,
//             878
//           ],
//           "id": 634649,
//           "media_type": "movie",
//           "original_language": "en",
//           "original_title": "Spider-Man: No Way Home",
//           "overview": "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
//           "poster_path": "/5weKu49pzJCt06OPpjvT80efnQj.jpg",
//           "release_date": "2021-12-15",
//           "title": "Spider-Man: No Way Home",
//           "video": false,
//           "vote_average": 8,
//           "vote_count": 17808
//         },
//         {
//           "adult": false,
//           "backdrop_path": "/ng6SSB3JhbcpKTwbPDsRwUYK8Cq.jpg",
//           "genre_ids": [
//             28,
//             12,
//             878
//           ],
//           "id": 429617,
//           "media_type": "movie",
//           "original_language": "en",
//           "original_title": "Spider-Man: Far From Home",
//           "overview": "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",
//           "poster_path": "/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg",
//           "release_date": "2019-06-28",
//           "title": "Spider-Man: Far From Home",
//           "video": false,
//           "vote_average": 7.5,
//           "vote_count": 14209
//         }
//       ],
//       "known_for_department": "Acting",
//       "name": "Tom Holland",
//       "popularity": 146.431,
//       "profile_path": "/rPxkwzxge5a4DkVyZWWau989zhc.jpg"
//     },
//     {
//       "adult": false,
//       "gender": 1,
//       "id": 139820,
//       "known_for": [
//         {
//           "adult": false,
//           "backdrop_path": "/aJn9XeesqsrSLKcHfHP4u5985hn.jpg",
//           "genre_ids": [
//             878,
//             12,
//             28
//           ],
//           "id": 283995,
//           "media_type": "movie",
//           "original_language": "en",
//           "original_title": "Guardians of the Galaxy Vol. 2",
//           "overview": "The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage.",
//           "poster_path": "/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
//           "release_date": "2017-04-19",
//           "title": "Guardians of the Galaxy Vol. 2",
//           "video": false,
//           "vote_average": 7.6,
//           "vote_count": 20049
//         },
//         {
//           "adult": false,
//           "backdrop_path": "/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg",
//           "genre_ids": [
//             12,
//             28,
//             878
//           ],
//           "id": 299536,
//           "media_type": "movie",
//           "original_language": "en",
//           "original_title": "Avengers: Infinity War",
//           "overview": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
//           "poster_path": "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
//           "release_date": "2018-04-25",
//           "title": "Avengers: Infinity War",
//           "video": false,
//           "vote_average": 8.3,
//           "vote_count": 27238
//         },
//         {
//           "adult": false,
//           "backdrop_path": "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
//           "genre_ids": [
//             12,
//             878,
//             28
//           ],
//           "id": 299534,
//           "media_type": "movie",
//           "original_language": "en",
//           "original_title": "Avengers: Endgame",
//           "overview": "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
//           "poster_path": "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
//           "release_date": "2019-04-24",
//           "title": "Avengers: Endgame",
//           "video": false,
//           "vote_average": 8.3,
//           "vote_count": 23477
//         }
//       ],
//       "known_for_department": "Acting",
//       "name": "Pom Klementieff",
//       "popularity": 139.51,
//       "profile_path": "/hfUKAI2kXTMMWjno0i4sLPJud5N.jpg"
//     },
//     {
//       "adult": false,
//       "gender": 1,
//       "id": 224513,
//       "known_for": [
//         {
//           "adult": false,
//           "backdrop_path": "/uKbX1ha7KWyTecvpPpRCB3iFfj3.jpg",
//           "genre_ids": [
//             878,
//             18
//           ],
//           "id": 335984,
//           "media_type": "movie",
//           "original_language": "en",
//           "original_title": "Blade Runner 2049",
//           "overview": "Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. K's discovery leads him on a quest to find Rick Deckard, a former LAPD blade runner who has been missing for 30 years.",
//           "poster_path": "/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
//           "release_date": "2017-10-04",
//           "title": "Blade Runner 2049",
//           "video": false,
//           "vote_average": 7.5,
//           "vote_count": 12053
//         },
//         {
//           "adult": false,
//           "backdrop_path": "/4HWAQu28e2yaWrtupFPGFkdNU7V.jpg",
//           "genre_ids": [
//             35,
//             80,
//             9648
//           ],
//           "id": 546554,
//           "media_type": "movie",
//           "original_language": "en",
//           "original_title": "Knives Out",
//           "overview": "When renowned crime novelist Harlan Thrombey is found dead at his estate just after his 85th birthday, the inquisitive and debonair Detective Benoit Blanc is mysteriously enlisted to investigate. From Harlan's dysfunctional family to his devoted staff, Blanc sifts through a web of red herrings and self-serving lies to uncover the truth behind Harlan's untimely death.",
//           "poster_path": "/pThyQovXQrw2m0s9x82twj48Jq4.jpg",
//           "release_date": "2019-11-27",
//           "title": "Knives Out",
//           "video": false,
//           "vote_average": 7.9,
//           "vote_count": 10892
//         },
//         {
//           "adult": false,
//           "backdrop_path": "/3Mnbw4gOYz5BNZB9PhZ2cyBSQum.jpg",
//           "genre_ids": [
//             35,
//             80,
//             18
//           ],
//           "id": 308266,
//           "media_type": "movie",
//           "original_language": "en",
//           "original_title": "War Dogs",
//           "overview": "Based on the true story of two young men, David Packouz and Efraim Diveroli, who won a $300 million contract from the Pentagon to arm America's allies in Afghanistan.",
//           "poster_path": "/uH9qGH5XS1iZXCSb3tgu40dxQoh.jpg",
//           "release_date": "2016-08-17",
//           "title": "War Dogs",
//           "video": false,
//           "vote_average": 6.9,
//           "vote_count": 4405
//         }
//       ],
//       "known_for_department": "Acting",
//       "name": "Ana de Armas",
//       "popularity": 129.075,
//       "profile_path": "/xRk889LiJsKlijIVp8KfHiZWw7X.jpg"
//     },
//     {
//       "adult": false,
//       "gender": 2,
//       "id": 976,
//       "known_for": [
//         {
//           "adult": false,
//           "backdrop_path": "/ysKahAEPP8h6MInuLjr0xuZOTjh.jpg",
//           "genre_ids": [
//             80,
//             35
//           ],
//           "id": 107,
//           "media_type": "movie",
//           "original_language": "en",
//           "original_title": "Snatch",
//           "overview": "Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.",
//           "poster_path": "/56mOJth6DJ6JhgoE2jtpilVqJO.jpg",
//           "release_date": "2000-09-01",
//           "title": "Snatch",
//           "video": false,
//           "vote_average": 7.8,
//           "vote_count": 8135
//         },
//         {
//           "adult": false,
//           "backdrop_path": "/2uSCHUsmzb6KkQPFSxBQ7bgfJLE.jpg",
//           "genre_ids": [
//             28,
//             878,
//             27
//           ],
//           "id": 345940,
//           "media_type": "movie",
//           "original_language": "en",
//           "original_title": "The Meg",
//           "overview": "A deep sea submersible pilot revisits his past fears in the Mariana Trench, and accidentally unleashes the seventy foot ancestor of the Great White Shark believed to be extinct.",
//           "poster_path": "/xqECHNvzbDL5I3iiOVUkVPJMSbc.jpg",
//           "release_date": "2018-08-09",
//           "title": "The Meg",
//           "video": false,
//           "vote_average": 6.2,
//           "vote_count": 6560
//         },
//         {
//           "adult": false,
//           "backdrop_path": "/kWt1OcPgwO1ssu57wgTKmq38JYw.jpg",
//           "genre_ids": [
//             28,
//             80,
//             53
//           ],
//           "id": 4108,
//           "media_type": "movie",
//           "original_language": "en",
//           "original_title": "The Transporter",
//           "overview": "Former Special Forces officer, Frank Martin will deliver anything to anyone for the right price, and his no-questions-asked policy puts him in high demand. But when he realizes his latest cargo is alive, it sets in motion a dangerous chain of events. The bound and gagged Lai is being smuggled to France by a shady American businessman, and Frank works to save her as his own illegal activities are uncovered by a French detective.",
//           "poster_path": "/v3QIFUWgtVN4wejVuDZowuyJ20W.jpg",
//           "release_date": "2002-10-02",
//           "title": "The Transporter",
//           "video": false,
//           "vote_average": 6.7,
//           "vote_count": 4803
//         }
//       ],
//       "known_for_department": "Acting",
//       "name": "Jason Statham",
//       "popularity": 128.53,
//       "profile_path": "/whNwkEQYWLFJA8ij0WyOOAD5xhQ.jpg"
//     },
//     {
//       "adult": false,
//       "gender": 2,
//       "id": 2037,
//       "known_for": [
//         {
//           "backdrop_path": "/wiE9doxiLwq3WCGamDIOb2PqBqc.jpg",
//           "first_air_date": "2013-09-12",
//           "genre_ids": [
//             18,
//             80
//           ],
//           "id": 60574,
//           "media_type": "tv",
//           "name": "Peaky Blinders",
//           "origin_country": [
//             "GB"
//           ],
//           "original_language": "en",
//           "original_name": "Peaky Blinders",
//           "overview": "A gangster family epic set in 1919 Birmingham, England and centered on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby, who means to move up in the world.",
//           "poster_path": "/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
//           "vote_average": 8.5,
//           "vote_count": 8579
//         },
//         {
//           "adult": false,
//           "backdrop_path": "/veUl0QT8swshQ9Dz0fQ1k6ZkthD.jpg",
//           "genre_ids": [
//             27,
//             53,
//             878
//           ],
//           "id": 170,
//           "media_type": "movie",
//           "original_language": "en",
//           "original_title": "28 Days Later",
//           "overview": "Twenty-eight days after a killer virus was accidentally unleashed from a British research facility, a small group of London survivors are caught in a desperate struggle to protect themselves from the infected. Carried by animals and humans, the virus turns those it infects into homicidal maniacs -- and it's absolutely impossible to contain.",
//           "poster_path": "/sQckQRt17VaWbo39GIu0TMOiszq.jpg",
//           "release_date": "2002-10-31",
//           "title": "28 Days Later",
//           "video": false,
//           "vote_average": 7.2,
//           "vote_count": 5964
//         },
//         {
//           "adult": false,
//           "backdrop_path": "/ztZ4vw151mw04Bg6rqJLQGBAmvn.jpg",
//           "genre_ids": [
//             28,
//             878,
//             12
//           ],
//           "id": 27205,
//           "media_type": "movie",
//           "original_language": "en",
//           "original_title": "Inception",
//           "overview": "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
//           "poster_path": "/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
//           "release_date": "2010-07-15",
//           "title": "Inception",
//           "video": false,
//           "vote_average": 8.4,
//           "vote_count": 34003
//         }
//       ],
//       "known_for_department": "Acting",
//       "name": "Cillian Murphy",
//       "popularity": 127.948,
//       "profile_path": "/4lgJr8m5V7hihtH2LODxlMKSdcQ.jpg"
//     },
//     {
//       "adult": false,
//       "gender": 1,
//       "id": 115440,
//       "known_for": [
//         {
//           "backdrop_path": "/9KnIzPCv9XpWA0MqmwiKBZvV1Sj.jpg",
//           "first_air_date": "2019-06-16",
//           "genre_ids": [
//             18,
//             80
//           ],
//           "id": 85552,
//           "media_type": "tv",
//           "name": "Euphoria",
//           "origin_country": [
//             "US"
//           ],
//           "original_language": "en",
//           "original_name": "Euphoria",
//           "overview": "A group of high school students navigate love and friendships in a world of drugs, sex, trauma, and social media.",
//           "poster_path": "/5mi3aRl16yKmfpQJMzvqN5TXkdA.jpg",
//           "vote_average": 8.4,
//           "vote_count": 8863
//         },
//         {
//           "adult": false,
//           "backdrop_path": "/3rwszCm4XyBtIWSjbUbgNwJOidu.jpg",
//           "genre_ids": [
//             53
//           ],
//           "id": 645710,
//           "media_type": "movie",
//           "original_language": "en",
//           "original_title": "The Voyeurs",
//           "overview": "When Pippa and Thomas move into their dream apartment, they notice that their windows look directly into the apartment opposite – inviting them to witness the volatile relationship of the attractive couple across the street. But what starts as a simple curiosity turns into full-blown obsession with increasingly dangerous consequences.",
//           "poster_path": "/8Y4XOIWhpOvSOEn8XrxbkH9yAXO.jpg",
//           "release_date": "2021-08-25",
//           "title": "The Voyeurs",
//           "video": false,
//           "vote_average": 6.6,
//           "vote_count": 655
//         },
//         {
//           "adult": false,
//           "backdrop_path": "/oRiUKwDpcqDdoLwPoA4FIRh3hqY.jpg",
//           "genre_ids": [
//             35,
//             18,
//             53
//           ],
//           "id": 466272,
//           "media_type": "movie",
//           "original_language": "en",
//           "original_title": "Once Upon a Time… in Hollywood",
//           "overview": "Los Angeles, 1969. TV star Rick Dalton, a struggling actor specializing in westerns, and stuntman Cliff Booth, his best friend, try to survive in a constantly changing movie industry. Dalton is the neighbor of the young and promising actress and model Sharon Tate, who has just married the prestigious Polish director Roman Polanski…",
//           "poster_path": "/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg",
//           "release_date": "2019-07-24",
//           "title": "Once Upon a Time… in Hollywood",
//           "video": false,
//           "vote_average": 7.4,
//           "vote_count": 11956
//         }
//       ],
//       "known_for_department": "Acting",
//       "name": "Sydney Sweeney",
//       "popularity": 127.697,
//       "profile_path": "/qoFGtNZu0OSd1xggj1VyClxwuF7.jpg"
//     },
//     {
//       "adult": false,
//       "gender": 1,
//       "id": 2527414,
//       "known_for": [
//         {
//           "adult": false,
//           "backdrop_path": "/lntyt4OVDbcxA1l7LtwITbrD3FI.jpg",
//           "genre_ids": [
//             10749,
//             18
//           ],
//           "id": 1010581,
//           "media_type": "movie",
//           "original_language": "es",
//           "original_title": "Culpa mía",
//           "overview": "Noah must leave her city, boyfriend, and friends to move into William Leister's mansion, the flashy and wealthy husband of her mother Rafaela. As a proud and independent 17 year old, Noah resists living in a mansion surrounded by luxury. However, it is there where she meets Nick, her new stepbrother, and the clash of their strong personalities becomes evident from the very beginning.",
//           "poster_path": "/w46Vw536HwNnEzOa7J24YH9DPRS.jpg",
//           "release_date": "2023-06-08",
//           "title": "My Fault",
//           "video": false,
//           "vote_average": 8.3,
//           "vote_count": 1164
//         },
//         {
//           "backdrop_path": "/hrVF15fXneZcLwXO861j7Q32BgB.jpg",
//           "first_air_date": "2018-09-16",
//           "genre_ids": [
//             18,
//             35
//           ],
//           "id": 82424,
//           "media_type": "tv",
//           "name": "SKAM Spain",
//           "origin_country": [
//             "ES"
//           ],
//           "original_language": "es",
//           "original_name": "Skam España",
//           "overview": "The series accompanies a group of 16-year-olds on the journey of their life following their day to day in real time. Dependence on social media, how they face sex, love and ruptures, religion, the search of their identity and the need to fit in.",
//           "poster_path": "/3xSZP2yHNMPJqlDipVzRTP1yhkm.jpg",
//           "vote_average": 7.8,
//           "vote_count": 420
//         },
//         {
//           "backdrop_path": "/3CBoVqMolsvdIYqhuegvJHhiQKb.jpg",
//           "first_air_date": "2021-05-28",
//           "genre_ids": [
//             9648,
//             80,
//             10768,
//             18
//           ],
//           "id": 121898,
//           "media_type": "tv",
//           "name": "Parot",
//           "origin_country": [
//             "ES"
//           ],
//           "original_language": "es",
//           "original_name": "Parot",
//           "overview": "Many prisoners convicted of rape, murder and terrorism are released before serving their full sentences. Hours later, one of them is killed. Detectives Mora and Nieto take on the case.",
//           "poster_path": "/5MJaTFzA8RCH7UU8cFROsmAyIoz.jpg",
//           "vote_average": 6.5,
//           "vote_count": 38
//         }
//       ],
//       "known_for_department": "Acting",
//       "name": "Nicole Wallace",
//       "popularity": 127.16,
//       "profile_path": "/seJS4k9g462i7bIal7Z9DiWW5se.jpg"
//     },
//     {
//       "adult": false,
//       "gender": 1,
//       "id": 2049994,
//       "known_for": [
//         {
//           "backdrop_path": "/6vmPJRxhGi8jdILY7yCIs41zAGZ.jpg",
//           "first_air_date": "2019-01-28",
//           "genre_ids": [
//             18
//           ],
//           "id": 87299,
//           "media_type": "tv",
//           "name": "I Hear You",
//           "origin_country": [
//             "CN"
//           ],
//           "original_language": "zh",
//           "original_name": "最动听的事",
//           "overview": "Bei Er Duo, a girl from an ordinary family, dreams about studying in Japan to be a professional voice actor. However, her mother wants her to marry rich whilst she is young, leading to continuous blind dates which irritate Bei Er Duo. In her desperation to raise funds for studying overseas as well as helping her best friend Tang Li out of a crisis, Bei Er Duo joins a couple reality program, encountering top violin maker Ye Shu Wei.",
//           "poster_path": "/2wVMh3vqvt1IgAhextxwUKxaOAH.jpg",
//           "vote_average": 7.8,
//           "vote_count": 60
//         },
//         {
//           "backdrop_path": "/h2DgIielVx96VctWIKn7UMQJhWS.jpg",
//           "first_air_date": "2022-04-18",
//           "genre_ids": [
//             18
//           ],
//           "id": 127323,
//           "media_type": "tv",
//           "name": "Who Rules The World",
//           "origin_country": [
//             "CN"
//           ],
//           "original_language": "zh",
//           "original_name": "且试天下",
//           "overview": "A legendary wuxia romance that focuses on the decade-long romance between Hei Fengxi and Bai Fengxi, and the adventures they embark on together.",
//           "poster_path": "/nlqrwsSYPhmv86omOS2sRuBABDr.jpg",
//           "vote_average": 7.3,
//           "vote_count": 29
//         },
//         {
//           "backdrop_path": "/4pXvxsAcCHoPZDiwHUWeSFN3or.jpg",
//           "first_air_date": "2020-05-18",
//           "genre_ids": [
//             35
//           ],
//           "id": 103635,
//           "media_type": "tv",
//           "name": "The Romance of Tiger and Rose",
//           "origin_country": [
//             "CN"
//           ],
//           "original_language": "zh",
//           "original_name": "传闻中的陈芊芊",
//           "overview": "A screenwriter finds herself becoming a character in the script of her own creation. However, she is not meant to live past three episodes! Chen Xiaoqian is a writer who poured blood, sweat and tears into creating a big female-centric drama. What could have started filming smoothly quickly turned south because of actor Han Mingxing's reservations about the script. Feeling wronged, Chen Xiaoqian vows to prove herself yet she accidentally gets stuck in a parallel world where her story has come to life. Now known as the 3rd princess Chen Qianqian, she is an insignificant side character with a horrid reputation that is not meant to live long in the story. In order to live, she starts on a road to reverse her fate. She also gets caught in between the arrogant and black-bellied prince Han Shuo and the practically perfect Pei Heng.",
//           "poster_path": "/mCsidkxf6ji8e71T07dYff3FjCF.jpg",
//           "vote_average": 7.6,
//           "vote_count": 14
//         }
//       ],
//       "known_for_department": "Acting",
//       "name": "Zhao Lusi",
//       "popularity": 124.073,
//       "profile_path": "/5ThmlRlXM6xqWtljHwb3Whgsoi5.jpg"
//     }
//   ],
//   "total_pages": 500,
//   "total_results": 10000
// }
// const people = resp.results;
</script>