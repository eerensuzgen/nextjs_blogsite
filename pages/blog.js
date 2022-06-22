import Layout from "../components/masterPage";

function Blog() {
  return (
    <div className="bg-gray-100">
      <Layout>
        <div id="full">
          <h1 className="text-center text-3xl font-bold ">FPGA Teknolojisi</h1>
          <div className="pt-2">
            <h2 className="text-center text-2xl font-semibold text-zinc-800">
              "Fpga'nın günümüzde önemi, tercih sebebi ve kullanım alanları"
            </h2>
          </div>
          <div className="pt-4">
            lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Blog;
