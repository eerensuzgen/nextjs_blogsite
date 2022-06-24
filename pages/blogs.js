import Link from "next/link";
import React from "react";
import fetch from "isomorphic-unfetch";

function Blogs({ posts }) {
  return (
    <div id="zaa">
      {console.log(posts)}
      {posts.map((post) => (
        <div className="pt-8 space-y-3">
          <Link
            href={{
              pathname: "/[postId]",
              query: { postId: "post-1" },
            }}
          >
            <a className="hover:underline">
              <article className="pt-3 pl-3 bg-slate-400 rounded-lg shadow-slate-900 shadow-lg">
                <h2 className="font-semibold">{post.title}</h2>
                <div className="">
                  lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div className="mt-1 flex items-center space-x-2 text-zinc-500">
                  <span>02.08.2022</span>
                </div>
              </article>
            </a>
          </Link>
          <hr />
        </div>
      ))}
      ;
    </div>
  );
}

export default Blogs;
