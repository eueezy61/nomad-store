import Head from "next/head";
import withLayout from "../lib/withLayout";

const About = () => (
  <div>
    <Head>
      <title>About | Nomad Store</title>
    </Head>
    <h1>About page</h1>
    <p>This is about page</p>
  </div>
);

export default withLayout(About);
