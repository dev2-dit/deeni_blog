import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import styles from '../../../styles/Book.module.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Image from "next/image";
import Link from 'next/link'


export default function BookCard() {

    return (
        <Card className={styles.cardroot}>
            <CardMedia className={styles.bookcardimage}>
                <Image
                    src="/demoimage/book.jpg"
                    alt="blog_image"
                    width={170}
                    height={250}
                    border-radius={25}
                />
            </CardMedia>
            <div className={styles.bookinfo}>
                <CardContent>
                    <Link href='/books/1'><a>
                    <Typography component="h5" variant="h5">
                        Keller Reality
                    </Typography>
                    </a></Link>
                    <Typography variant="subtitle1" color="textSecondary">
                        Jane Mclane best author in this week
                    </Typography>
                </CardContent>
            </div>
        </Card>
    );
}
