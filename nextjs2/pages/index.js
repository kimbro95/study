import excuteQuery from "../lib/dbConnect";
import MeetupList from "../components/meetups/MeetupList";

const index = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

/**
 *  getServerSideProps
 *  getStaticProps와 차이점 빌드 프로세스 중에는 실행되지 않음
 */
// export const getServerSideProps = async (context) => {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };

export const getStaticProps = async () => {
  const meetups = await excuteQuery({
    query: "SELECT * FROM meetups",
    values: [],
  });

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup.idx,
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
      })),
    },
    revalidate: 1, // 이 페이지에 요청이 들어오면 1초마다 서버에서 페이지를 다시 생성한다.
  };
};

export default index;
