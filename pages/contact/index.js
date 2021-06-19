import Layout from "../../components/base/layout";
import Meta from "../../components/base/meta";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';
import styles from "../../styles/Contact.module.css";
import ContactForm from  '../../components/shared/contactform';




export default function ContactPage() {
    return (
        <Layout>
            <Meta
                title="About"
                description="Blog Tempalte 2"
            />
            <Container >
                <Grid container spacing={3} className={styles.contactus}>
                    <Grid item xs={12} sm={8}>
                        <Paper  className={styles.contactus_papercard}>
                            <Typography variant="h5" className={styles.section_title}>
                                <span className={styles.contact_seperator}/>যোগাযোগ করুন
                            </Typography>
                            <ContactForm/>
                        </Paper>

                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Grid container spacing={3} >
                            <Grid item xs={12}>
                                <Paper className={styles.contactus_papercard} >
                                    <Typography variant="h5" className={styles.section_title}>
                                        <span className={styles.contact_seperator}/>আমার গল্প
                                    </Typography>
                                    <Typography variant="h5" color="textSecondary" >
                                        আপনি যদি আপনার প্রশ্ন বা সমস্যার উত্তর না পেয়ে থাকেন, তবে অনুগ্রহ করে নিচের ফর্ম ব্যবহার করে আমাদের সাথে যোগাযোগ করুন এবং যত তাড়াতাড়ি সম্ভব আমরা আপনার সাথে যোগাযোগ করবো।
                                    </Typography>

                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper  className={styles.contactus_papercard}>
                                    <Typography variant="h5" className={styles.section_title}>
                                        <span className={styles.contact_seperator}/>আমার গল্প
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
