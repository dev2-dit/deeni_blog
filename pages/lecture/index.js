import Layout from '../../components/layout';
import Meta from '../../components/meta';
import LectureList from '../../components/lecture/lecture_category_list';
import {getlecturs,getlecturcategory} from '../../actions/index';

export default function AllLecture({ lectures,lecturecategories }) {

    return (
        <Layout>
            <Meta
                title="Lecture"
                description="Blog Tempalte 2"
            />
            <LectureList
                lectures={lectures}
                lecturecategories={lecturecategories}
            />
        </Layout>
    )
}


export async function getStaticProps(context) {
    const lectures = await getlecturs();
    const lecturecategories = await getlecturcategory();
    return {
        props: {
            lectures,
            lecturecategories
        },
    }
}