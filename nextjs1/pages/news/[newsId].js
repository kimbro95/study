import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();

  return <h1>The DetailPage {router.query.newsId} Page</h1>;
};

export default DetailPage;
