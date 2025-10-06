export interface GuestSpeaker {
  id: number
  name: string
  description: string
  image: string
  youtubeLink: string
  isDeceased?: boolean
  tribute?: string
}

export const guestSpeakers: GuestSpeaker[] = [
  {
    id: 11,
    name: 'Bhogi Santha Rao garu',
    description: 'Power of God Ministries',
    image: '/images/guest-speakers/BogiShantharaoGaru.webp',
    youtubeLink: 'https://www.youtube.com/watch?v=Br7xsEv3O20'
  },
  {
    id: 0,
    name: 'Gantela Prakash garu',
    description: 'Beloved Bible teacher, Christian apologist',
    image: '/images/guest-speakers/PrakashGantela.jpeg',
    youtubeLink: 'https://www.youtube.com/watch?v=cu_JtxTH4_o',
    isDeceased: true,
    tribute: 'A wise and humble servant of God with deep biblical knowledge. His eye-opening teachings and wisdom live on through his sermons, inspiring and transforming lives through the Gospel.'
  },
  {
    id: 12,
    name: "Joseph Lawrence",
    description: "Director of theological institute in Jamaica/Cayman Islands",
    image: "/images/guest-speakers/PJLawrence.png",
    youtubeLink: "https://www.youtube.com/watch?v=j1hj0rdYg7o"
  },
  {
    id: 1,
    name: 'P.Natarajan Lazarus garu',
    description: 'Telugu Christian Ministry',
    image: '/images/guest-speakers/Natarajan.jpeg',
    youtubeLink: 'https://www.youtube.com/watch?v=9CNPytfefwI'
  },
  {
    id: 2,
    name: 'John Mangacharyulu garu',
    description: 'Holy Church, Pedalanka',
    image: '/images/guest-speakers/Mangacharyulu.png',
    youtubeLink: 'https://www.youtube.com/watch?v=P7dPQ2d-W6k'
  },
  {
    id: 21,
    name: 'Sudharani garu',
    description: ' ',
    image: '/images/guest-speakers/Sudharanigaru.png',
    youtubeLink: 'https://www.youtube.com/watch?v=AJwEfwASqBU'
  },
  {
    id: 3,
    name: 'Auto Raja garu',
    description: 'New Ark Mission of India, Bangalore',
    image: '/images/guest-speakers/AutoRaja.jpeg',
    youtubeLink: 'https://www.youtube.com/watch?v=P9fAi6MuWvw'
  },
  {
    id: 5,
    name: 'Naresh garu',
    description: 'Church of Christ, Idupulapaya',
    image: '/images/guest-speakers/Naresh.jpeg',
    youtubeLink: 'https://www.youtube.com/watch?v=O3J1khimfPI'
  },
  {
    id: 6,
    name: 'Srimanth Katamala garu',
    description: 'Worship Leader | Gospel Songwriter | Founder of Yireh Ministry.',
    image: '/images/guest-speakers/Sreemanth.jpg',
    youtubeLink: 'https://www.youtube.com/watch?v=8IK1AwtsbtA'
  },
  {
    id: 7,
    name: 'Deva Prasad garu',
    description: ' ',
    image: '/images/guest-speakers/DevaPrasad.png',
    youtubeLink: 'https://www.youtube.com/watch?v=e3tVQNOIPRM'
  },
] 