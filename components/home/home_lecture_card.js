import styles from '../../styles/Home.module.css';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import LectureCard from '../cards/lecture_card'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        maxWidth:200,
        borderRadius:0,
        border:0,
        backgroundColor:'red',
    },
    media: {
        height: 140,
    },
    content: {
        padding:0,
        paddingTop:0,
        border:0,
        "&:hover": {
            backgroundColor: 'rgb(7, 177, 77, 0.42)'
        }
    },
});

export default function HomeLecture(props) {
    const classes = useStyles();
    const lectures =props.lectures;

    return (
           <>
                <div className={styles.section_gap}/>
                <Container>
                    <div className={styles.home_blogs}>
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <Typography variant="body1" className={styles.section_title}>
                                    <span className={styles.blog_seperator}/>Video
                                </Typography>
                                <Typography variant="h4" className="section_subehading" >
                                    Most Popular
                                </Typography>
                            </Grid>
                            { lectures && lectures.length && lectures.map((lecturedata,i)=>{
                                return(
                                    <Grid item xs={12} md={3} key={i}>
                                        <LectureCard lecturedata={ lecturedata } />
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </div>
                </Container>
            </>
    );
}
