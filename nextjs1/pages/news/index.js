import Link from "next/link";
import { Fragment } from "react";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/one">NextJS li one</Link>
        </li>
        <li>
          <Link href="/news/two">NextJS li two</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
