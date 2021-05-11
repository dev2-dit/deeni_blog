import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Typography from "@material-ui/core/Typography";
import Link from 'next/link'

export default function BookCard(props) {
    const data= props.book;
    return (
        <>
            <div className={styles.bookcard}>
                <div className={styles.bookcard_image}>
                    <Image
                        src="/images/book.jpg"
                        alt="blog_image"
                        width={120}
                        height={170}
                    />
                </div>
                <div className={styles.bookcard_content}>
                    <Link href={`/book/${data.bookSlug}`}>
                        <a>
                            <Typography variant="h5">
                                {data.book_title}
                            </Typography >
                            <Typography variant="body1">
                                {data.book_subtitle}
                            </Typography>
                        </a>
                    </Link>
                </div>
            </div>
        </>
    )
}