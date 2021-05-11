
import Meta from '../../components/meta';
import Layout from '../../components/layout';
import HomeBanner from '../../components/home/banner';
import HomeLecture from '../../components/home/home_lecture_card';
import HomeBookCard from '../../components/home/home_book_card';
import Organizations from '../../components/home/home_organization_card';
import Homeblog from '../../components/home/home_blog_card';
import Menubar from "../../components/menubar";

export default function Home() {
    return (
        <>
            <Meta
                title="Home"
                description="Blog Tempalte 2"
            />
            <Menubar/>
            <HomeBanner/>
            <HomeLecture/>
            <HomeBookCard/>
            <Homeblog/>
            <Organizations/>
        </>

    )
}
