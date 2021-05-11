
import Meta from '../components/meta';
import Layout from '../components/layout';
import Menubar2 from '../components/menubar';
import HomeBanner from '../components/home/banner';
import HomeLecture from '../components/home/home_lecture_card';
import HomeBookCard from '../components/home/home_book_card';
import Organizations from '../components/home/home_organization_card';
import Homeblog from '../components/home/home_blog_card';
import {getlecturs,getBooks,getOrganizations,getArticles,getFeaturedArticle} from '../actions';


export default function Home({lectures,books,articles,featuredArticle,organizations}) {

  return (
      <Layout>
        <Meta
            title="Home"
            description="Blog Tempalte 2"
        />
        <HomeBanner/>
        <HomeLecture lectures={lectures}/>
        <HomeBookCard books={books}/>
        <Homeblog articles={articles} featured_article={featuredArticle}/>
        <Organizations organizations={organizations}/>
      </Layout>

  )
}

export async function getStaticProps(context) {
    const lectures = await getlecturs();
    const books = await getBooks();
    const organizations = await getOrganizations();
    const articles = await getArticles();
    const featuredArticle = await getFeaturedArticle();

    return {
        props: {
            lectures,
            books,
            organizations,
            articles,
            featuredArticle

        },
    }
}