import styles from "../../styles/Home.module.css";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Image from "next/image";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import React from "react";
import Link from 'next/link'

export default function BlogCard(props){
    const blogdata =props.articledata;
    return (
        <Card className={styles.card}>
            <Typography variant="body2" className={styles.postdate} >
                22 JULY 2020
            </Typography>
            <div className={styles.card_content}>
                <CardMedia>
                    <Image
                        src={blogdata.image}
                        alt="blog_image"
                        width={480}
                        height={360}
                    />
                </CardMedia>
                <CardContent className={styles.card_content}>
                    <Typography variant="body2" className={styles.blog_tag}>
                        {blogdata.category}
                    </Typography>
                    <Link href={`/article/${blogdata.slug}`}>
                        <a>
                            <Typography component="h5" className={styles.blog_title}>
                                {blogdata.title}
                            </Typography>
                        </a>
                    </Link>
                </CardContent>
            </div>
        </Card>
    )
}