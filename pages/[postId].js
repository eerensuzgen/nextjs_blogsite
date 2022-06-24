import Layout from "../components/masterPage";
import fetch from "isomorphic-unfetch";

function Blog({ post }) {
  return (
    <div className="bg-gray-100">
      <Layout>
        <div id="full">
          <h1 className="text-center text-3xl font-bold ">{post.title}</h1>
          <div className="pt-2">
            <h2 className="text-center text-2xl font-semibold text-zinc-800">
              {post.details}
            </h2>
          </div>
          <div className="pt-4">{post.date}</div>
        </div>
      </Layout>
    </div>
  );
}

Blog.getInitialProps = async ({ req, query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch(`http://localhost:3000/api/post/${query.postId}`);
  const json = await res.json();
  return { post: json.post };
};

export default Blog;
