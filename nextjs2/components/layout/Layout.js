import Head from "next/head";
import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div>
      <Head>
        {/* 
        정적인 메타태그들은 _document.js 활용하기
        */}
        <title>{props.title ? `${props.title} | Meetups` : "Meetups"}</title>
      </Head>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
