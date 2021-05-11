import styles from '../../styles/Home.module.css';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import BookCard from '../cards/book_card'



export default function HomeBookCard(props) {
    const books=props.books;
    return (
        <>
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
                    </Grid>
                </div>
            </Container>
        </>
    );
}
