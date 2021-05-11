import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Image from "next/image";
import Rating from '@material-ui/lab/Rating';
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        border:'none',
        boxShadow:'none',
        borderRadius:'0',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
}));

export default function BookCardSecond() {
    const classes = useStyles();


    return (
        <Card className={classes.root}>
            <CardMedia>
                <Image
                    src="/images/book.jpg"
                    alt="blog_image"
                    width={130}
                    height={190}
                />
            </CardMedia>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="body1" variant="span" style={{fontWeight:'bold'}}>
                        The Stag By The Cabin
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Emily Robbins
                    </Typography>
                    <Rating name="read-only" value={4} readOnly />
                    <Link href='/book/book_name'>
                        <a>
                            <Button href="#text-buttons" color="primary" className="readmore_button">
                                Read More
                                <ChevronRightIcon/>
                            </Button>
                        </a>
                    </Link>
                </CardContent>
            </div>
        </Card>
    );
}
