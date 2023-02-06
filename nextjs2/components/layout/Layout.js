import Head from "next/head";
import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div>
      <Head>
        {/* 
        ������ ��Ÿ�±׵��� _document.js Ȱ���ϱ�
        */}
        <title>{props.title ? `${props.title} | Meetups` : "Meetups"}</title>
      </Head>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
