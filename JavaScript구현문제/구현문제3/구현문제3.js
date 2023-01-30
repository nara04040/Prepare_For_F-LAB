/**
 * 구현목록
 *
 * 화살표를 누르면 img, author, job, info,가 바뀐다.
 *
 * suprise me를 누르면 랜덤으로 바뀐다.
 */

const image = document.querySelector(".img-container");
const author = document.querySelector("#author");
const job = document.querySelector("#job");
const info = document.querySelector("#info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentReview = 0;

const reviewsObj = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

prevBtn.addEventListener("click", () => {
  if (currentReview === -1) {
    currentReview = 3;
  }

  image.textContent = reviewsObj[currentReview].img;
  author.textContent = reviewsObj[currentReview].name;
  job.textContent = reviewsObj[currentReview].job;
  info.textContent = reviewsObj[currentReview].text;
  currentReview--;
  console.log(currentReview);
});

nextBtn.addEventListener("click", () => {
  if (currentReview === 4) {
    currentReview = 0;
  }

  image.textContent = reviewsObj[currentReview].img;
  author.textContent = reviewsObj[currentReview].name;
  job.textContent = reviewsObj[currentReview].job;
  info.textContent = reviewsObj[currentReview].text;
  currentReview++;
  console.log(currentReview);
});

randomBtn.addEventListener("click", () => {
  randomCurrentNumber = Math.floor(Math.random() * reviewsObj.length);

  image.textContent = reviewsObj[randomCurrentNumber].img;
  author.textContent = reviewsObj[randomCurrentNumber].name;
  job.textContent = reviewsObj[randomCurrentNumber].job;
  info.textContent = reviewsObj[randomCurrentNumber].text;
});
