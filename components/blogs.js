import Link from "next/link";

function Blogs() {
  return (
    <div>
      <div className="pt-8 space-y-3">
        <Link href="/blog">
          <a className="hover:underline">
            <article className="pt-3 pl-3 bg-slate-400 rounded-lg shadow-slate-900 shadow-lg">
              <h2 className="font-semibold">Blog 1</h2>
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
        <Link href="/blog">
          <a className="hover:underline">
            <article className="pt-3 pl-3 bg-slate-400 rounded-lg shadow-slate-900 shadow-lg">
              <h2 className="font-semibold">Blog 2</h2>
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
        <Link href="/blog">
          <a className="hover:underline">
            <article className="pt-3 pl-3 bg-slate-400 rounded-lg shadow-slate-900 shadow-lg">
              <h2 className="font-semibold">Blog 3</h2>
              <div className="">
                lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div className="mt-1 flex items-center space-x-2 text-zinc-500">
                <span>02.08.2022</span>
              </div>
            </article>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Blogs;
