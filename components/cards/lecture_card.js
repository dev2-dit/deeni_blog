import styles from "../../styles/Home.module.css";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Image from "next/image";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import React from "react";
import Link from 'next/link'

export default function LectureCard(props){
    const data=props.lecturedata;
    return (
        <Card className={styles.card}>
            <Typography variant="body2" className={styles.postdate} >
                22 JULY 2020
            </Typography>
            <div className={styles.card_content}>
                <CardMedia>
                    <Image
                        src="/images/lecture.jpg"
                        alt="blog_image"
                        width={480}
                        height={360}
                    />
                </CardMedia>
                <CardContent className={styles.card_content}>
                    <Typography variant="body2" className={styles.blog_tag}>
                        549 views
                    </Typography>
                    <Link href={`/lecture/${data.id}`}>
                        <a>
                            <Typography component="h5" className={styles.blog_title}>
                               {data.name}
                            </Typography>
                        </a>
                    </Link>

                </CardContent>
            </div>
        </Card>
    )
}