import { Typography , Card ,CardMedia , CssBaseline ,Grid  , Container, Button, CardContent, Box} from '@material-ui/core';
import useStyles from './CardsLayoutStyles';
import image from '../../Assets/Images/12.jpg'
const cards = [ 1,2,3,4,5,6,7,8,9];

function Cards() {
  const classes = useStyles();
  return (
    <>
        <CssBaseline />

        <main>
          <Container className={classes.cardGrid}>
            <Grid item xs={12} className={classes.grid}>
                <Grid item xs={3}>
                    <a href="#!" className={classes.i}><i className="fas fa-th-list fa-lg " ></i></a>
                    <a href="#!" className={classes.i}><i className="fas fa-th-large fa-lg"></i></a>
                </Grid>
                <Typography>Label example</Typography>
                <Box>
                  <Button className={classes.button}><i class="fas fa-angle-left"></i></Button>
                  <Button className={classes.button}>1</Button>
                  <Button className={classes.button}>2</Button>
                  <Button className={classes.button}>3</Button>
                  <Button className={classes.button}><i class="fas fa-angle-right"></i></Button>
                </Box>
            </Grid>
            <Grid container spacing={4}>
              {cards.map((card)=>(
                <Grid item key={card} xs={12} sm={6} md={4} >
                  <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={image}
                        title='Image Title'
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant='h5'>
                          Black denim jacket
                        </Typography>
                        <Typography >
                          $99.99
                        </Typography>
                      </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>

    </>
  );
}

export default Cards;