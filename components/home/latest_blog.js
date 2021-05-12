import styles from '../../styles/Home.module.css';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Image from 'next/image';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import React from "react";
import Link from 'next/link'



export default function LetestBLog(props) {
    const articledata=props.article
    return (
        <>

                <Button variant="outlined" className={styles.button_view_all} >
                    View All
                </Button>


            {
                articledata && articledata.length && articledata.map((data,i)=>{
                    return(
                        <Card className={styles.latest_article} key={i}>
                            <CardMedia>
                                <Image
                                    src={data.image}
                                    alt="blog_image"
                                    width={110}
                                    height={90}
                                />
                            </CardMedia>
                            <div className={styles.details}>
                                <CardContent className={styles.content}>
                                    <Link href={`/article/${data.slug}`}><a>
                                    <Typography component="h5" variant="h5" className={styles.title}>
                                        {data.title}
                                    </Typography>
                                    </a></Link>
                                    <Typography variant="body2">
                                        {data.category}
                                    </Typography>
                                </CardContent>
                            </div>

                        </Card>

                    )
                })

            }


        </>
    );
}
