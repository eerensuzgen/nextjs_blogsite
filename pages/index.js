import Layout from "../components/masterPage";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export const Post = () => {
  const router = useRouter();
  const { pid } = router.query;

  return <p>Post: {pid}</p>;
};

//https://nextjs-blogsite-woad.vercel.app/
function HomePage({ posts }) {
  return (
    <div className="bg-gray-100">
      <Layout className="flex-grow">
        <div className="space-y-7">
          <h1 className="text-2xl font-bold">
            I am Enes Eren Süzgen
            <br />I am a Computer Engineering Student in Yozgat
          </h1>
          <p className="text-xl pt-6">
            "I have experience in developing front-end systems. I also design
            websites as a hobby. And I love being a part of the development of
            artificial intelligence technologies."
          </p>
          <p className="text-xl pt-4">
            "We are currently working with my team on a fully autonomous drone
            using deep learning techniques. And I am currently implementing my
            FPGA based object recognition project with deep learning."
          </p>
        </div>

        <div className="flex space-x-3 mt-10 mb-16">
          <a
            href="https://www.google.com/intl/tr/gmail/about/"
            target="_blank"
            className="flex items-center rounded-full bg-zinc-200 p-3 text-zinc-600 transition-colors hover:bg-opacity-75"
          >
            Email
          </a>
          <a
            href="https://github.com/eerensuzgen"
            className="flex items-center rounded-full bg-zinc-200 p-3 text-zinc-600 transition-colors hover:bg-opacity-75"
            target="_blank"
          >
            <svg
              width="32px"
              height="32px"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/eerensuzgen/"
            className="flex items-center rounded-full bg-zinc-200 p-3 text-zinc-600 transition-colors hover:bg-opacity-75"
            target="_blank"
          >
            <svg
              width="32px"
              height="32px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g data-name="Layer 2">
                <g data-name="linkedin">
                  <rect
                    width="24"
                    height="24"
                    transform="rotate(180 12 12)"
                    opacity="0"
                  />
                  <path d="M15.15 8.4a5.83 5.83 0 0 0-5.85 5.82v5.88a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a1.94 1.94 0 0 1 2.15-1.93 2 2 0 0 1 1.75 2v5.81a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a5.83 5.83 0 0 0-5.85-5.82z" />
                  <rect
                    x="3"
                    y="9.3"
                    width="4.5"
                    height="11.7"
                    rx=".9"
                    ry=".9"
                  />
                  <circle cx="5.25" cy="5.25" r="2.25" />
                </g>
              </g>
            </svg>
          </a>
          <a
            href="https://twitter.com/home?lang=tr"
            target="_blank"
            className="flex items-center rounded-full bg-zinc-200 p-3 text-zinc-600 transition-colors hover:bg-opacity-75"
          >
            <svg
              width="32px"
              height="32px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
            >
              <path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/?hl=tr"
            className="flex items-center rounded-full bg-zinc-200 p-3 text-zinc-600 transition-colors hover:bg-opacity-75"
            target="_blank"
          >
            <svg
              width="32px"
              height="32px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z"
                stroke="currentColor"
                stroke-width="1.5"
              />
              <path
                d="M17.5 6.51L17.51 6.49889"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>

        <div>
          <h1 className="text-highlight text-4xl font-bold text-center ">
            Doodles
          </h1>
        </div>
        {/* <Blog /> */}
        <div id="zaa">
          {posts.map((post) => (
            <div className="pt-8 ">
              <Link
                href={{
                  pathname: "/[postId]",
                  query: { postId: post.slug },
                }}
              >
                <a className="hover:underline">
                  <article className="pt-3 pl-3 bg-slate-400 rounded-lg shadow-slate-900 shadow-lg">
                    <h2 className="font-semibold">{post.title}</h2>
                    <div className="">{post.details}</div>
                    <div className="mt-1 flex items-center space-x-2 text-zinc-500">
                      <span>{post.date}</span>
                    </div>
                  </article>
                </a>
              </Link>
            </div>
          ))}
        </div>

        {/* <style jsx>{``}</style>
        <style global jsx>{``}</style> */}
      </Layout>
    </div>
  );
}

HomePage.getInitialProps = async () => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("http://localhost:3000/api/posts");
  const json = await res.json();
  return { posts: json.posts };
};

export default HomePage;
