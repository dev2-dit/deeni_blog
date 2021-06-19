import styles from "../../../styles/Home.module.css";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Image from "next/image";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import React from "react";
import Link from 'next/link'

export default function blogcard(){
    return(
        <Card className={styles.card}>
            <div className={styles.card_content}>
                <Typography variant="body2" className={styles.postdate} >
                    22 JULY 2020
                </Typography>
                <CardMedia>
                    <Image
                        src="/demoimage/1000x753.png"
                        alt="blog_image"
                        width={1000}
                        height={753}
                    />
                </CardMedia>
                <CardContent className={styles.card_content}>
                    <Typography variant="body2" className={styles.blog_tag}>
                        Lizards
                    </Typography>
                    <Link href="/articles/1"><a>
                    <Typography component="h5" className={styles.blog_title}>
                        Lizards are a widespread group of squamate reptiles,
                    </Typography>
                    </a>
                    </Link>
                </CardContent>
            </div>
        </Card>
    )
}