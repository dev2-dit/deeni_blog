import Layout from "../../components/base/layout";
import Meta from "../../components/base/meta";
import {getlecturs,getlecturcategory} from '../../actions';
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Categorysidebar from "../../components/shared/lecture/category_sidebar";
import Typography from "@material-ui/core/Typography";
import Alllecturelist from "../../components/shared/lecture/all_lecture";
import Container from "@material-ui/core/Container";
import styles from "../../styles/Lecture.module.css";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

export default function Lectures({ lectures,lecturecategories }) {
    const classes = useStyles();

    const [state, setState] = useState({
        filter: '',
        playlist_category:"UU3kG-1vBavgcATRxs0XRFQw",
        lectures : lectures,
    })

    const changeCategory =async (category,id)=>{
        const data = await getlecturs(id)
        console.log(data,"sdsd")
        setState({
            filter: category ,
            playlist_category :id,
            lectures :data
        })
    }
    const router = useRouter()
    useEffect(() => {
        router.push('?playlist='+`${state.playlist_category}`, undefined, { shallow: true })
    }, [])

    // const {playlist} = router.query


    return (
        <div className="lecture_page">
        <Layout className="lecture_page">
            <Meta
                title="Lecture"
                description="Blog Tempalte 2 - Lecture"
            />

            <Container>
                <div className={styles.lectures}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={3}>
                            <Categorysidebar category ={lecturecategories || []}
                                             changecat ={changeCategory}
                                             activecategory={state.filter}
                            />

                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Typography variant="h4" style={{padding:'10px 0px 10px 15px'}}>
                                {state.filter ? state.filter : "All Categories" }
                            </Typography>
                            <Grid container spacing={0}>
                                <Alllecturelist lecturelist={state.lectures}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Container>


        </Layout>
        </div>
    )

}


export async function getStaticProps(context) {

    const playlistId ="UU3kG-1vBavgcATRxs0XRFQw"
    const lectures = await getlecturs(playlistId);
    const lecturecategories = await getlecturcategory();
    return {
        props: {
            lectures,
            lecturecategories
        },
    }
}