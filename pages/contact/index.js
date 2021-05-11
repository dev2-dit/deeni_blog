import Layout from '../../components/layout';
import Meta from '../../components/meta';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';
import styles from "../../styles/Contact.module.css";
import { makeStyles } from '@material-ui/core/styles';
import ContactForm from '../../components/form/contactform'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        boxShadow:'none',
    },
    paper: {
        padding:'30px 40px',
        textAlign: 'left',
        color: theme.palette.text.secondary,

    },
}));

export default function ContactPage() {

    const classes = useStyles();

    return (
        <Layout>
            <Meta
                title="About"
                description="Blog Tempalte 2"
            />
            <Container >
                <Grid container spacing={3} className={styles.aboutus}>
                    <Grid item xs={12} sm={8}>
                        <Paper className={classes.paper}>
                            <Typography variant="h5" className={styles.section_title}>
                                <span className={styles.blog_seperator}/>যোগাযোগ করুন
                            </Typography>
                            <ContactForm/>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Grid container spacing={3} >
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                    <Typography variant="h5" className={styles.section_title}>
                                        <span className={styles.blog_seperator}/>আমার গল্প
                                    </Typography>
                                    <Typography variant="h5" color="textSecondary" >
                                        আপনি যদি আপনার প্রশ্ন বা সমস্যার উত্তর না পেয়ে থাকেন, তবে অনুগ্রহ করে নিচের ফর্ম ব্যবহার করে আমাদের সাথে যোগাযোগ করুন এবং যত তাড়াতাড়ি সম্ভব আমরা আপনার সাথে যোগাযোগ করবো।
                                    </Typography>

                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                    <Typography variant="h5" className={styles.section_title}>
                                        <span className={styles.blog_seperator}/>আমার গল্প
                                    </Typography>
                                    <Typography variant="h5" color="textSecondary" >
                                        আপনি যদি আপনার প্রশ্ন বা সমস্যার উত্তর না পেয়ে থাকেন, তবে অনুগ্রহ করে নিচের ফর্ম ব্যবহার করে আমাদের সাথে যোগাযোগ করুন এবং যত তাড়াতাড়ি সম্ভব আমরা আপনার সাথে যোগাযোগ করবো।
                                    </Typography>

                                </Paper>
                            </Grid>
                        </Grid>


                    </Grid>

                </Grid>
            </Container>
        </Layout>



    )
}
