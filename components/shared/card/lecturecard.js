import styles from "../../../styles/Home.module.css";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Image from "next/image";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import React from "react";
import Link from 'next/link'

export default function Lecturecard(props){
    const data=props.lecturedata;
    return(
        <Card className={styles.card}>
            <div className={styles.card_content}>
                <Typography variant="body2" className={styles.postdate} >
                    22 JULY 2020
                </Typography>
                <CardMedia>
                    <img
                        src={data.image}
                        alt="blog_image"
                        layout="fill"
                        className={'image'}
                    />
                </CardMedia>
                <CardContent className={styles.card_content}>
                    <Typography variant="body2" className={styles.blog_tag}>
                        Lizards
                    </Typography>
                    <Link href={`/lectures/${data.id}`}><a>
                        <Typography component="h5" className={styles.blog_title}>
                            {data.title.substr(0, 35,)}
                        </Typography>
                    </a>
                    </Link>
                </CardContent>
            </div>
        </Card>
    )
}