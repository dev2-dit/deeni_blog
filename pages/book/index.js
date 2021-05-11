import Meta from "../../components/meta";
import Layout from "../../components/layout";
import Container from "@material-ui/core/Container";
import styles from "../../styles/Home.module.css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import BookCard from "../../components/cards/book_card";
import BookCardSecond from "../../components/cards/book_card_second";
import {getBooks} from '../../actions';


export default function AllBook(props){
    const books=props.books;
    return(
        <div>
            <Layout>
                <Meta
                    title="Book"
                    description="Blog Tempalte 2"
                />
                    <Container>
                        <div className={styles.home_blogs}>
                            <Grid container spacing={3} className={styles.home_booksection}>
                                <Grid item xs={12}>
                                    <Typography variant="body1" className={styles.section_title}>
                                        <span className={styles.blog_seperator}/>Books
                                    </Typography>
                                    <Typography variant="h4" className="section_subehading" >
                                        Recently Published
                                    </Typography>
                                </Grid>
                                {
                                    books && books.length && books.map((book,i)=>{
                                        return(
                                            <Grid item xs={12} md={4} key={i}>
                                                <BookCard book={book}/>
                                            </Grid>
                                        )
                                    })

                                }

                                <Grid item xs={12} md={4}>
                                    <BookCardSecond/>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <BookCardSecond/>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>

            </Layout>
        </div>
    )
}

export async function getStaticProps(context) {
    const books = await getBooks();
    return {
        props: {
            books,
        },
    }
}