import { useRouter } from "next/router";

const meetUp = () => {
  const router = useRouter();

  return <h1>{router.query.meetupId}</h1>;
};

export default meetUp;
