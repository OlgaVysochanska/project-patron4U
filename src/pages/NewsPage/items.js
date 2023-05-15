const items = [
  {
    imgUrl:
      'https://www.nytimes.com/images/2023/04/16/magazine/16mag-LOR/16mag-LOR-blog480.jpg',
    title: 'What I Learned Dogsitting for New York City’s Opulent Elite',
    text: 'In a city of yawning class inequality, some side hustles let you glimpse how the other half lives.',
    date: '2023-04-11T09:00:18+0000',
    url: 'https://www.nytimes.com/2023/04/11/magazine/dogsitting-rich-new-york.html',
    id: 'nyt://article/8d29f1fc-d146-509d-8ceb-5a5b17d7886b',
  },
  {
    imgUrl:
      'https://www.nytimes.com/images/2023/04/04/multimedia/00VIRTUAL-VETS-01b-fmzk/00VIRTUAL-VETS-01b-fmzk-blog480.jpg',
    title: 'The Virtual Vet Will See You Meow',
    text: 'Veterinary telemedicine could help more pet owners access much-needed care and put anxious animals at ease, but challenges remain.',
    date: '2023-04-07T09:00:46+0000',
    url: 'https://www.nytimes.com/2023/04/07/health/vet-pet-health-telemedicine.html',
    id: 'nyt://article/992f2f7f-793c-5553-b722-348625f53a4b',
  },
  {
    imgUrl:
      'https://www.nytimes.com/images/2023/04/04/travel/00tripped-up-illo/00tripped-up-illo-blog480.jpg',
    title:
      'Help! My Dog Was Rejected by the Airline Because of a Carrier Rule That Doesn’t Exist.',
    text: 'A gate agent suddenly objected to a canine who’d flown previously on the same route, saying the carrier wasn’t big enough. Our columnist tries to sort out what the actual rules for pets on planes are.',
    date: '2023-04-05T09:00:24+0000',
    url: 'https://www.nytimes.com/2023/04/05/travel/airlines-flying-with-dogs-cats.html',
    id: 'nyt://article/08d32cd1-6eb4-50f7-8126-f7bad37b098f',
  },
  {
    imgUrl: 'https://media4.giphy.com/media/h52OM8Rr5fLiZRqUBD/giphy.gif',
    title: 'On Pets, Moral Logic and Love',
    text: 'I didn’t think I was a dog person. Then Herbie showed up and taught me a lesson about love.',
    date: '2023-03-19T13:00:06+0000',
    url: 'https://www.nytimes.com/2023/03/19/opinion/pets-dogs-love.html',
    id: 'nyt://article/0dc54659-a8a1-589a-bac8-f4d8321b0f43',
  },
  {
    imgUrl:
      'https://www.nytimes.com/images/2023/03/15/nyregion/NY-FISH/NY-FISH-blog480.jpg',
    title: 'When Helpless Fish Need a Hero, She Answers the Call',
    text: 'Three hundred goldfish in a hospital basement, a suckermouth at the airport: When fish are in crisis, a Bronx beautician and a partner in Pennsylvania ride to the rescue.',
    date: '2023-03-17T09:00:35+0000',
    url: 'https://www.nytimes.com/2023/03/17/nyregion/new-york-city-fish-rescue.html',
    id: 'nyt://article/7bce8e93-e6b3-5cb7-ad38-a361fa0d2812',
  },
  {
    imgUrl:
      'https://www.nytimes.com/images/2023/03/16/multimedia/16xp-dogpoisoning2/16xp-dogpoisoning2-blog480-v2.jpg',
    title: '3 Dogs Die After Eating Poisoned Meatballs at a Race in France',
    text: 'The poisonings took place at the French canicross championships, in which people run or cycle while attached to their dogs.',
    date: '2023-03-16T16:12:57+0000',
    url: 'https://www.nytimes.com/2023/03/16/world/europe/dog-poisoning-france.html',
    id: 'nyt://article/111d57a8-01f0-5bc5-b7ac-d9056ee73b35',
  },
  {
    imgUrl:
      'https://www.nytimes.com/images/2023/03/12/magazine/12mag-ethicist-online/12mag-ethicist-online-blog480.jpg',
    title: 'Our Relatives Keep Bringing Their Dog Over. How Can We Stop Them?',
    text: 'The magazine’s Ethicist columnist on how to tell loved ones that you don’t love their pet.',
    date: '2023-03-08T16:30:04+0000',
    url: 'https://www.nytimes.com/2023/03/08/magazine/pets-ethics.html',
    id: 'nyt://article/ad5e4dfb-3387-5fc5-8087-baea15083054',
  },
  {
    imgUrl:
      'https://www.nytimes.com/images/2023/02/27/sports/27nba-suns-dogs-dip/27nba-suns-dogs-dip-blog480.jpg',
    title:
      'How a Trade Changed Everything for Two N.B.A. Players and Their Dogs',
    text: 'Professional sports can be a tough business. When Mikal Bridges was dealt from the Suns to the Nets, his friend Cam Payne had to give the news to Sonny and Uno.',
    date: '2023-02-27T05:01:09+0000',
    url: 'https://www.nytimes.com/2023/02/27/sports/basketball/nba-suns-dogs-payne-bridges.html',
    id: 'nyt://article/3282e4e2-702b-5f0c-b24c-07e3be494f83',
  },
  {
    imgUrl:
      'https://www.nytimes.com/images/2023/02/23/multimedia/00ukraine-shelter-02-jgvt/00ukraine-shelter-02-jgvt-blog480.jpg',
    title: 'For Ukraine’s Animals, a Home Is Getting Harder to Find',
    text: 'Early in the war, thousands of pets were ferried out of danger, mostly to other European countries. But now adoptions are waning.',
    date: '2023-02-28T05:00:10+0000',
    url: 'https://www.nytimes.com/2023/02/28/business/economy/ukraine-war-animals.html',
    id: 'nyt://article/9a1f03cd-a7a8-5afb-8dcc-cb5edeefb2f1',
  },
  {
    imgUrl:
      'https://www.nytimes.com/images/2023/02/21/multimedia/00ukraine-business-01-mjgv/00ukraine-business-01-mjgv-blog480.jpg',
    title:
      'How One Ukrainian Company Survived, and Thrived, Through a Year of War',
    text: 'For Kormotech and its 1,300 employees, Russia’s invasion disrupted everything. After nimble decision-making and good fortune, sales are up, providing Ukraine with much-needed tax revenue.',
    date: '2023-02-23T05:00:10+0000',
    url: 'https://www.nytimes.com/2023/02/23/business/economy/ukraine-company-kormotech.html',
    id: 'nyt://article/d7f60f7b-30a7-54ae-9926-d3f3c3b3ea30',
  },
  {
    imgUrl:
      'https://www.nytimes.com/images/2023/02/04/multimedia/00xp-high-dogs-01-pmgh/00xp-high-dogs-01-pmgh-blog480.jpg',
    title:
      'Nausea, Wobbling, Confusion: Dogs Are Getting Sick From Discarded Weed',
    text: 'In places where recreational use is legal, dogs are getting sick from eating the remains of joints and other cannabis products, veterinarians and poison-control centers say.',
    date: '2023-02-13T14:02:29+0000',
    url: 'https://www.nytimes.com/2023/02/13/nyregion/dogs-weed-nyc.html',
    id: 'nyt://article/9cda24bb-5520-587b-97aa-039cd981ea91',
  },
  {
    imgUrl:
      'https://www.nytimes.com/images/2023/02/09/multimedia/09santos-checks-jvzb/09santos-checks-jvzb-blog480.jpg',
    title:
      'George Santos, Puppies and Bad Checks: How a Theft Charge Got Expunged',
    text: 'Mr. Santos was able to get a criminal theft charge in Pennsylvania dismissed, after he told the police that someone had stolen his checkbook.',
    date: '2023-02-10T02:20:33+0000',
    url: 'https://www.nytimes.com/2023/02/09/nyregion/george-santos-checks-amish.html',
    id: 'nyt://article/f169d0fa-b6f0-5bc3-a1cd-2cd4ecef1e8a',
  },
  {
    imgUrl:
      'https://www.nytimes.com/images/2023/02/09/multimedia/09santos-charity-audio-app-hvqm/09santos-charity-audio-app-hvqm-blog480.jpg',
    title: 'About Those 2,500 Dogs That George Santos Claims He Saved',
    text: 'Several people questioned the way Mr. Santos’s charity, Friends of Pets United, handled funds that were raised to benefit the animals.',
    date: '2023-02-06T10:00:10+0000',
    url: 'https://www.nytimes.com/2023/02/06/nyregion/santos-pets-animal-charity.html',
    id: 'nyt://article/90d52055-e24a-5b27-bef9-0f00bec8c2f6',
  },
  {
    imgUrl:
      'https://www.nytimes.com/images/2023/02/05/realestate/03Dogdoors0illo/03Dogdoors0illo-blog480-v2.jpg',
    title: 'Sorry, Dogs: The Lobby Is Off-Limits.',
    text: 'The four-legged pets are welcome, but not welcome everywhere. Their owners must carry them or use a service elevator.',
    date: '2023-02-03T10:00:36+0000',
    url: 'https://www.nytimes.com/2023/02/03/realestate/dogs-service-elevator-nyc.html',
    id: 'nyt://article/104f3528-70b6-544e-a68b-0f9f0a5f20bf',
  },
  {
    imgUrl:
      'https://www.nytimes.com/images/2023/01/29/multimedia/21DOGWALKERS-01-btgf/21DOGWALKERS-01-btgf-blog480.jpg',
    title: 'How These Dog Walkers Make Over $100,000 a Year',
    text: 'It’s all those pandemic puppies.',
    date: '2023-01-22T10:00:17+0000',
    url: 'https://www.nytimes.com/2023/01/22/style/dog-walkers-six-figures-100k-nyc.html',
    id: 'nyt://article/2370993e-9e7c-5fb8-b217-56a5d5355a5c',
  },
  {
    imgUrl:
      'https://www.nytimes.com/images/2023/01/22/fashion/19PET-DECOR-01-pwlk/19PET-DECOR-01-pwlk-blog480.jpg',
    title: 'What, Your Dog Doesn’t Have Her Own Refrigerator?',
    text: 'Interior design that caters to animals has become its own niche market with the great pandemic pet boom.',
    date: '2023-01-19T10:00:28+0000',
    url: 'https://www.nytimes.com/2023/01/19/style/pet-decor-interior-design.html',
    id: 'nyt://article/f90d5e0f-cd06-5f19-9246-764900968ba1',
  },
  {
    imgUrl:
      'https://www.nytimes.com/images/2023/01/12/multimedia/12dog-gone-review-wtzp/12dog-gone-review-wtzp-blog480.jpg',
    title: '‘Dog Gone’ Review: He Let the Dog Out',
    text: 'In this Netflix family movie, based on a true story, a yellow Lab disappears on the Appalachian Trail, and Rob Lowe is tasked with finding him.',
    date: '2023-01-13T02:00:05+0000',
    url: 'https://www.nytimes.com/2023/01/12/movies/dog-gone-review.html',
    id: 'nyt://article/74c54b4f-8579-5db7-b40f-a334874d14aa',
  },
  {
    imgUrl:
      'https://www.nytimes.com/images/2023/01/12/fashion/11pitti-pet10-flhz/11pitti-pet10-flhz-blog480.jpg',
    title: 'Men’s Wear Puts on the Dog',
    text: 'A pavilion dedicated to the multibillion-dollar market in pet apparel makes its debut at the world’s largest men’s wear trade show.',
    date: '2023-01-12T08:00:08+0000',
    url: 'https://www.nytimes.com/2023/01/12/style/mens-wear-puts-on-the-dog.html',
    id: 'nyt://article/fe6a2ccd-b317-5255-9cb8-797151f0bb06',
  },
  {
    imgUrl:
      'https://www.nytimes.com/images/2022/12/29/multimedia/00nat-mass-coyote-1-1-3887/00nat-mass-coyote-1-1-3887-blog480.jpg',
    title: 'A New England Town Invaded by Coyotes Calls in the Sharpshooters',
    text: 'Compact, densely populated and surrounded by water, Nahant (and its small dogs) are on edge. It’s the first Massachusetts municipality to ask the government to kill problem animals.',
    date: '2022-12-31T10:00:23+0000',
    url: 'https://www.nytimes.com/2022/12/31/us/coyotes-sharpshooters-nahant-massachussets.html',
    id: 'nyt://article/ba810204-ae36-5dc9-b2c9-e9a9d0d64eb0',
  },
  {
    imgUrl:
      'https://www.nytimes.com/images/2022/12/15/multimedia/15ny-petstore-1-a63a/15ny-petstore-1-a63a-blog480.jpg',
    title: 'New York Bans Pet Stores From Selling Dogs, Cats and Rabbits',
    text: 'The ban, which takes effect in December 2024, is meant to prevent the sale of animals raised by commercial breeders accused of keeping them in inhumane conditions.',
    date: '2022-12-15T18:16:51+0000',
    url: 'https://www.nytimes.com/2022/12/15/nyregion/pet-store-ban-ny.html',
    id: 'nyt://article/676367e0-cf7f-5b0c-a5bb-019fab5d953e',
  },
];

export default items;
