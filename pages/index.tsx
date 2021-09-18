import React from "react";
import Link from "next/link";
import { GetStaticProps } from "next";
import Head from "next/head";
import NavBar from "@/components/NavBar";
import PostGridList from "@/components/PostGridList";
import { getSortedPostsMeta } from "@/lib/getPosts";
import { PostMeta } from "@/lib/types";
import Typing from "@/components/Typing";

export default function Home({ posts }: { posts: PostMeta[] }) {
  const postsRef = React.useRef<HTMLDivElement>();
  return (
    <div>
      <Head>
        <title>Maggie's Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar page="home" />
      <div className={"bg-dark-100 dark:bg-dark-800"}>
        <div
          /*className={
          "bg-gradient-to-b from-primary-100 via-secondary-100 to-contrast-50 dark:from-secondary-900 dark:to-contrast-900 min-w-full min-h-screen p-20 flex flex-1 flex-col justify-center items-center"
        }*/
          className={
            "w-full max-w-5xl mx-auto min-h-screen p-20 flex flex-col justify-center items-center"
          }
        >
          <div className={"w-full self-start text-dark-900 dark:text-gray-50"}>
            <h2
              className={
                "translate-x-1 text-lg sm:text-xl md:text-2xl 2xl:text-3xl font-medium"
              }
            >
              Hello, world!
            </h2>
            <h1
              className={
                "text-5xl sm:text-6xl md:text-7xl 2xl:text-9xl font-bold"
              }
            >
              I'm{" "}
              <span
                className={
                  "bg-gradient-to-br from-primary-600 dark:from-primary-400 via-secondary-500 dark:via-secondary-500 to-contrast-300 bg-clip-text text-transparent"
                }
              >
                Maggie
              </span>
              .
            </h1>
            <h3 className={"text-4xl sm:text-5xl 2xl:text-7xl mt-3"}>
              <Typing>
                {[
                  "I'm a competitive programmer.",
                  "I do math.",
                  "I'm an artist.",
                  "I'm a problem solver.",
                ]}
              </Typing>
            </h3>
          </div>
          <Link href={"#posts"}>
            <a
              onClick={(e) => {
                e.preventDefault();
                postsRef.current.scrollIntoView({ behavior: "smooth" });
              }}
              className={
                "focus-invisible text-gray-400 dark:text-gray-500 w-12 h-12 absolute top-3/4 animate-bounce"
              }
            >
              <svg
                className=""
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                />
              </svg>
            </a>
          </Link>
        </div>
        <PostGridList posts={posts} ref={postsRef} />
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getSortedPostsMeta();
  return {
    props: {
      posts,
    },
  };
};
