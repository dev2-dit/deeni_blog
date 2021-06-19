
import Layout from '../../components/base/layout';
import Meta from '../../components/base/meta';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";
import styles from "../../styles/Article.module.css";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import Avatar from '@material-ui/core/Avatar';
import Image from "next/image";
import Card from '@material-ui/core/Card';
import React from "react";
import Blogcard from "../../components/shared/card/blogcard";

export default function ArticleDetails() {
    return (
        <Layout>
            <Meta
                title="Article Details"
                description="Blog Tempalte 2"
            />
            <Container>
                <Grid container spacing={3} className={styles.all_blogs_section}>
                    <Grid item xs={12}>
                        <Typography variant="h3" className={styles.blog_title}>
                            Your Healthy Travel Planner: Make Any Trip Healthier
                        </Typography>
                        <div>
                            <Grid container spacing={3} className={styles.blog_info_section}>
                                <Grid item xs={12} md={6} >
                                    <div className={styles.published_info}>
                                        <Avatar alt="Remy Sharp" src="" className={styles.orange}>
                                            B
                                        </Avatar>
                                        <Typography variant="body2" className={styles.auther_name}>
                                            By Perfecto <br/>Updated at : 15 April 2020
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <div className={styles.blog_share}>

                                        <IconButton  color="inherit" className={styles.blog_shareicon}  >
                                            <FacebookIcon />
                                        </IconButton>
                                        <IconButton  color="inherit"  className={styles.blog_shareicon}>
                                            <InstagramIcon />
                                        </IconButton>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <Image
                            src="/demoimage/blog_details.jpg"
                            alt="blog_image"
                            width={1280}
                            height={640}
                            style={{borderRadius:8}}
                        />


                        <Typography variant="body1" className={styles.blog_details}>
                            এখানে আমি কিছুটা বিস্তারিতভাবে মূল হাদিসটিই উল্লেখ করছি। <br/><br/>
                            أَنَّهُ سَمِعَ أَبَا هُرَيْرَةَ، يَقُولُ قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏ "‏ اشْتَكَتِ النَّارُ إِلَى رَبِّهَا فَقَالَتْ يَا رَبِّ أَكَلَ بَعْضِي بَعْضًا ‏.‏ فَأَذِنَ لَهَا بِنَفَسَيْنِ نَفَسٍ فِي الشِّتَاءِ وَنَفَسٍ فِي الصَّيْفِ فَهُوَ أَشَدُّ مَا تَجِدُونَ مِنَ الْحَرِّ وَأَشَدُّ مَا تَجِدُونَ مِنَ الزَّمْهَرِيرِ

                            <br/><br/> অর্থঃ আবূ হুরায়রা(রা)কে বলতে শুনেছি রাসূলুল্লাহ (ﷺ) বলেছেন, "জাহান্নাম তার রবের কাছে অভিযোগ করল “হে রব, আমার কিছু অংশ কিছু অংশকে খেয়ে ফেলছে। অতঃপর তাকে অনুমতি দিলেন দুটি নিঃশ্বাসের ব্যাপারে একটি নিঃশ্বাস শীতে আর একটি নিঃশ্বাস গ্রীষ্মে। অতঃপর সেটা হল গরম থেকে যে তীব্রতা অনুভব কর আর শীত থেকে যে তীব্রতা তোমরা অনুভব কর।

                            জাহান্নামের নিঃশ্বাস, কথা বলা এগুলো কি সম্ভব?<br/><br/>
                            এই প্রশ্নের উত্তর আল কুরআনের শুরুতেই দেওয়া হয়েছে<br/><br/>

                            সুতরাং জাহান্নামের ব্যাপারে যাবতীয় সংবাদ যেহেতু ‘গায়েব’ এর অন্তর্ভুক্ত তাই বলতে পারি এগুলো আমাদের জ্ঞানবুদ্ধির আয়ত্ত্বে এখনো না আসলেও এগুলো যে সুস্থ জ্ঞানবুদ্ধির বিপরীত তা বলা অযৌক্তিক। তাই আমরা "আন নাবিউস সাদিক" সত্যবাদী নবী এর দেওয়া সংবাদ অনুসারে এসব ‘গায়েব’ সংশ্লিষ্ট বিষয় এর উপর ঈমান এনে থাকি।
                            <br/><br/>
                            হাদিসে কি শীত-গ্রীষ্ম জাহান্নামের নিঃশ্বাসের কারণে হয় বলা হয়েছে?
                            হাদিসটি একটু ভালভাবে লক্ষ করলেই এর উত্তর পেয়ে যাবেন।
                            হাদিসে বলা হচ্ছে জাহান্নামের আগুন বৃদ্ধি
                            নিঃশ্বাসের অনুমতি দেওয়া হয়েছে
                            মনে করুন আপনি খুবই বড় একটা কোম্পানির বড় কোন পদে আছেন। সারা বছরের প্রতিদিনই আপনাকে কাজ করতে হয়। কিন্তু দু’-এক বছর পর আপনি খুবই মানসিক সমস্যায় ভোগা শুরু করেছেন কারণ আপনার কোনদিনই ছুটি নেই, খুব টেনশনে থাকতে হয়। তাই আপনি কোম্পানির কাছে অনুমতি চাইলেন বছরে দু’বার যেন আপনাকে ১৫ দিনের ছুটি দেওয়া হয় যাতে আপনি স্বস্তির নিঃশ্বাস ফেলতে পারেন।
                            <br/><br/>
                            তো এখন কোন বোকা যদি মনে করে আপনি ছুটি কাটানোর কারণেই শীত গ্রীষ্ম হচ্ছে তাহলে এটি চরম ভুল অনুমান। ঠিক তেমনি হাদিস থেকে এটা বোঝাও ভুল যে - শুধুমাত্র জাহান্নামের নিঃশ্বাসের কারণে শীত গ্রীষ্ম হয়, সূর্য থেকে পৃথিবীর উপর আলোর তীর্যক বা খাড়াভাবে পতিত হওয়ার কারণে হয় না।
                        </Typography>

                        <div className={styles.force_share_blog}>
                            <Card>
                                <Typography variant="h5">
                                    If you enjoyed reading this story, then we'd love it if you would share it!
                                </Typography>
                                <div style={{padding:'0px 0px 30px 0px'}}>
                                    <IconButton  color="inherit">
                                        <FacebookIcon />
                                    </IconButton>
                                    <IconButton  color="inherit">
                                        <InstagramIcon />
                                    </IconButton>
                                </div>
                            </Card>
                        </div>
                    </Grid>
                </Grid>

                <Grid container spacing={3} className={styles.all_blogs_section}>

                    <Grid item xs={12}>

                    </Grid>


                    <Grid item xs={12}>
                        <Typography variant="body1" className={styles.section_title}>
                            <span className={styles.blog_seperator}></span>Articles
                        </Typography>
                        <Typography variant="h4" className="section_subehading" >
                            Related Articles
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Blogcard/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Blogcard/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Blogcard/>
                    </Grid>
                </Grid>
            </Container>
        </Layout>



    )
}
