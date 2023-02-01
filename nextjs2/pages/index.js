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

const index = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export const getStaticProps = async () => {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1, // 이 페이지에 요청이 들어오면 1초마다 서버에서 페이지를 다시 생성한다.
  };
};

export default index;
