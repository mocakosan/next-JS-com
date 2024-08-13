import style from "./home.module.css";
import TabProvider from "@/app/(afterLogin)/home/_component/TabProvider";
import Tab from "@/app/(afterLogin)/home/_component/Tab";
import PostForm from "@/app/(afterLogin)/home/_component/PostForm";
import Post from "@/app/(afterLogin)/_component/Post";
import TabDecider from "./_component/TabDecider";
import { auth } from "@/auth";
import { Suspense } from "react";
import TabDeciderSuspense from "./_component/TabDeciderSuspense";
import Loading from "./loading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "홈 /JS ",
  description: "홈",
};

export default async function Home() {
  const session = await auth();
  return (
    <main className={style.main}>
      <TabProvider>
        <Tab />
        <PostForm me={session} />
        <Suspense fallback={<Loading />}>
          <TabDeciderSuspense />
        </Suspense>
      </TabProvider>
    </main>
  );
}
