import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "http://eqsquare.co.kr/assets/images/patent/patent2023-01-11_z43lVkCHb9qWYcD8.png",
    address: "First Meetup Address",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "http://eqsquare.co.kr/assets/images/patent/patent2023-01-11_z43lVkCHb9qWYcD8.png",
    address: "Second Meetup Address",
    description: "This is a second meetup!",
  },
];

const index = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default index;
