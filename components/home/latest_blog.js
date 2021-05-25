import styles from '../../styles/Home.module.css';
import Typography from '@material-ui/core/Typography';
import Image from 'next/image';
import Link from "next/link";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import React from "react";


export default function LetestBLog() {
    return (
        <>

            <Card className={styles.latest_article}>
                <CardMedia>
                    <Image
                        src="/demoimage/1000x753.png"
                        alt="blog_image"
                        width={110}
                        height={90}
                    />
                </CardMedia>
                <div className={styles.details}>
                    <CardContent className={styles.content}>
                        <Link href={`/article`}><a>
                            <Typography component="h5" variant="h5" className={styles.title}>
                                Lorem ipsum dolor sit amet
                            </Typography>
                        </a></Link>
                        <Typography variant="body2">
                            Islamic
                        </Typography>
                    </CardContent>
                </div>

            </Card>
            <Card className={styles.latest_article}>
                <CardMedia>
                    <Image
                        src="/demoimage/1000x753.png"
                        alt="blog_image"
                        width={110}
                        height={90}
                    />
                </CardMedia>
                <div className={styles.details}>
                    <CardContent className={styles.content}>
                        <Link href={`/article`}><a>
                            <Typography component="h5" variant="h5" className={styles.title}>
                                Lorem ipsum dolor sit amet
                            </Typography>
                        </a></Link>
                        <Typography variant="body2">
                            Islamic
                        </Typography>
                    </CardContent>
                </div>

            </Card>
            <Card className={styles.latest_article}>
                <CardMedia>
                    <Image
                        src="/demoimage/1000x753.png"
                        alt="blog_image"
                        width={110}
                        height={90}
                    />
                </CardMedia>
                <div className={styles.details}>
                    <CardContent className={styles.content}>
                        <Link href={`/article`}><a>
                            <Typography component="h5" variant="h5" className={styles.title}>
                                Lorem ipsum dolor sit amet
                            </Typography>
                        </a></Link>
                        <Typography variant="body2">
                            Islamic
                        </Typography>
                    </CardContent>
                </div>

            </Card>
            <Card className={styles.latest_article}>
                <CardMedia>
                    <Image
                        src="/demoimage/1000x753.png"
                        alt="blog_image"
                        width={110}
                        height={90}
                    />
                </CardMedia>
                <div className={styles.details}>
                    <CardContent className={styles.content}>
                        <Link href={`/article`}><a>
                            <Typography component="h5" variant="h5" className={styles.title}>
                                Lorem ipsum dolor sit amet
                            </Typography>
                        </a></Link>
                        <Typography variant="body2">
                            Islamic
                        </Typography>
                    </CardContent>
                </div>

            </Card>
        </>
    );
}
