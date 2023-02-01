import { gql, useQuery } from "@apollo/client";
import Image from "next/image";

const query = gql`
  query getAssets {
    assets {
      url
      fileName
      width
      height
    }
  }
`;

const Blog = () => {
  const { loading, error, data } = useQuery(query);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  console.log(data);
  return (
    <main style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <header>
        <h1>Test Vercel and hygraph</h1>
      </header>
      <div
        style={{
          display: "grid",
          width: "100%",
          gridTemplateColumns: "1fr 1fr 1fr ",
        }}
      >
        {data.assets.map((assets, index) => (
          <Image
            src={assets.url}
            key={index}
            alt={assets.fileName}
            width={assets.width / 3}
            height={assets.height / 3}
            style={{ margin: "20px" }}
          />
        ))}
      </div>
    </main>
  );
};

export default Blog;

