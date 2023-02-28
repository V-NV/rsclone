import { TUserNewPost } from "../../types/api.interface";

export const DataTest = [
  {
    imgUrl:
      "https://www.peoples.ru/undertake/internet/pavel_durov/vUTy5XvJS17Ek.jpeg",
    title: "Pavel Durov",
    post: "Hello everyone, my name is Pasha. I am a rather shy person, but these courses have revealed a lot of potential in me. Now I'm programming on a par with top programmers Nikolay and Alexey. I can only wish Fedor good luck so that he gains his mind",
  },
  {
    imgUrl:
      "https://pi.tedcdn.com/r/pe.tedcdn.com/images/ted/2534551796ee0a2638b462ce82e33b65091b1d42_1600x1200.jpg?cb=20160511&quality=63&u=&w=512",
    title: "Elon Mask",
    post: "I have been following these courses for a very long time. I like the development team. They are really capable men. Homo Coderus thank you very much. Your courses are my pleasure.",
  },
  {
    imgUrl:
      "https://i.guim.co.uk/img/media/b36ce1d3e4122c3d9ea61aae97435427a2be6db7/0_314_3356_2014/master/3356.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=60ab4090e8670420d755b58c39ab63b4",
    title: "Stephen William Hawking",
    post: "Unbelievable! Incredible! The best courses in my life. Are you serious guys? How can you do such a genius thing",
  },
  {
    imgUrl:
      "https://assets.gq.ru/photos/5d9f3cee55f8500008a7f53e/16:9/w_2560%2Cc_limit/anons.jpg",
    title: "小島 秀夫",
    post: "Stuck on the sixth task in course of HTML. But later it was processed by Google and everything was decided with a bang. I hope the authors of this project are nominated for the Nobel wave",
  },
];

export function ReviewTemplate(data: TUserNewPost[]): void {
  const reviewContainer = document.querySelector(
    ".review-container"
  ) as HTMLElement;
  reviewContainer.innerHTML = "";
  reviewContainer.innerHTML = `
  <div class="section-title">Reviews</div>
  <div class="review-items-container">
  ${data
    .map((item, index) => {
      if (index % 2 === 0) {
        return `<div class="review-item">
    <div class="review-img back-img"><img src="${item.imgUrl}" alt=""></div>
    <div class="review-text-wrap">
      <p class="review-name">${item.title}</p>
      <p class="review-text">${item.post}</p>
    </div>
  </div>`;
      } else {
        return `<div class="review-item">
  <div class="review-text-wrap">
    <p class="review-name">${item.title}</p>
    <p class="review-text">${item.post}</p>
  </div>
  <div class="review-img"><img src="${item.imgUrl}" alt=""></div>
</div>`;
      }
    })
    .join("")}
  </div>`;
  if (data.length > 3) {
    document
      .querySelector(".review-items-container")
      ?.classList.add("review-items-container_scrollbar");
  }
}
