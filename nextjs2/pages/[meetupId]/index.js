import excuteQuery from "../../lib/dbConnect";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  const { image, title, address, description } = props.meetupData;
  return (
    <MeetupDetail
      image={image}
      title={title}
      address={address}
      description={description}
    />
  );
};

export const getStaticPaths = async () => {
  const meetups = await excuteQuery({
    query: "SELECT idx FROM meetups",
    values: [],
  });

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup.idx.toString() },
    })),
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;
  const selectedMeetup = await excuteQuery({
    query: "SELECT * FROM meetups WHERE idx = ?",
    values: [meetupId],
  });
  const result = selectedMeetup[0];

  return {
    props: {
      meetupData: {
        id: result.idx,
        image: result.image,
        title: result.title,
        address: result.address,
        description: result.description,
      },
    },
  };
};

export default MeetupDetails;
