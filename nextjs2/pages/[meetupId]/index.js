import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="http://eqsquare.co.kr/assets/images/patent/patent2023-01-11_z43lVkCHb9qWYcD8.png"
      title="A First Meetup"
      address="First Meetup Address"
      description="This is a first meetup!"
    />
  );
};
export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;

  console.log(meetupId);
  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "http://eqsquare.co.kr/assets/images/patent/patent2023-01-11_z43lVkCHb9qWYcD8.png",
        title: "A First Meetup",
        address: "First Meetup Address",
        description: "This is a first meetup!",
      },
    },
  };
};

export default MeetupDetails;
