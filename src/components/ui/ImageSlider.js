import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import classes from './ImageSlider.module.scss'

const settings = {
    autoPlay: true,
    animation: "slide",
    indicators: true,
    duration: 500,
    navButtonsAlwaysVisible: true,
    navButtonsAlwaysInvisible: false,
    cycleNavigation: true,
    fullHeightHover: true,
    swipe: true,
    height: 300
}

const ImageSlider = ({ images }) => {
    return (
        <Carousel {...settings}>
            {
                images.map((image, i) => <Paper key={i} className={classes.paper}>
                    <img src={image} alt="product" className={classes.image} />
                </Paper>)
            }
        </Carousel>
    )
}

export default ImageSlider;