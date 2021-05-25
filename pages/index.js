import Layout from "../components/base/layout";
import Meta from "../components/base/meta";
import Blogs from  '../components/home/blogs'
import Blogs2 from  '../components/home/blog_section2'
import Blogs3 from  '../components/home/blog_section3'
import Blogs4 from  '../components/home/blog_section4'
import Blogs5 from  '../components/home/blog_section5'
import Share from  '../components/home/homeshare'

export default function Home() {
  return (
      <Layout>
          <Meta
              title="Home"
              description="Blog Tempalte 2"
          />

          <Blogs/>
          <Blogs2/>
          <Blogs3/>
          <Blogs4/>
          <Blogs5/>
          <Share/>
      </Layout>
  )

}