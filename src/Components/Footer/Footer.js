import { Box, Container, Grid, Typography } from "@material-ui/core";
import useStyles from "./FooterStyles";


function FooterLayout() {
  const classes = useStyles();

  return (
    <div>
            <Grid container className={classes.banner}  >
                <Container className={classes.column}>
                    <Grid item xs={12} sm={6} className={classes.col} >
                        <Typography variant='h6'>Get connected with us on social networks!</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.col} >
                        <Box display='flex' justifyContent='flex-end' >
                            <Typography variant='h6' className={classes.mr}><i class="fab fa-facebook-f white-text mr-4"> </i></Typography>
                            <Typography variant='h6' className={classes.mr}><i class="fab fa-twitter white-text mr-4"> </i></Typography>
                            <Typography variant='h6' className={classes.mr}><i class="fab fa-google-plus-g white-text mr-4"> </i></Typography>
                            <Typography variant='h6' className={classes.mr}> <i class="fab fa-linkedin-in white-text mr-4"> </i></Typography>
                            <Typography variant='h6'> <i class="fab fa-twitter white-text mr-4"> </i></Typography>
                        </Box>
                    </Grid>
                </Container>
            </Grid>
            <footer className={classes.footer}>
                <Container>
                <Box className={classes.col} display='flex' >
                    <Grid container wrap >
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant='h6' >Products </Typography>
                            <Typography variant='h6' className={classes.line}> </Typography>
                            <Typography variant='h6' className={classes.mt}>MDBootstrap </Typography>
                            <Typography variant='h6' className={classes.mt} >MDWordPress </Typography>
                            <Typography variant='h6' className={classes.mt} >BrandFlow </Typography>
                            <Typography variant='h6' className={classes.mt} >Bootstrap Angular </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant='h6' >Products </Typography>
                            <Typography variant='h6' className={classes.line}> </Typography>
                            <Typography variant='h6' className={classes.mt} >MDBootstrap </Typography>
                            <Typography variant='h6' className={classes.mt} >MDWordPress </Typography>
                            <Typography variant='h6' className={classes.mt} >BrandFlow </Typography>
                            <Typography variant='h6' className={classes.mt} >Bootstrap Angular </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant='h6' >Useful links</Typography>
                            <Typography variant='h6' className={classes.line}> </Typography>
                            <Typography variant='h6' className={classes.mt} >Your Account</Typography>
                            <Typography variant='h6' className={classes.mt} >Become an Affiliate</Typography>
                            <Typography variant='h6' className={classes.mt} >Shipping Rates</Typography>
                            <Typography variant='h6' className={classes.mt} >Help</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant='h6' >Useful links</Typography>
                            <Typography variant='h6' className={classes.line}> </Typography>
                            <Typography variant='h6' className={classes.mt} >Your Account</Typography>
                            <Typography variant='h6' className={classes.mt} >Become an Affiliate</Typography>
                            <Typography variant='h6' className={classes.mt} >Shipping Rates</Typography>
                            <Typography variant='h6' className={classes.mt} >Help</Typography>
                        </Grid>
                    </Grid>
                </Box>
                </Container>
            </footer>
    </div>
  );
}

export default FooterLayout;
