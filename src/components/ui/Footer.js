import { Divider } from '@mui/material';
import { TbSend } from 'react-icons/tb';
import SecondaryButton from './SecondaryButton';
import classes from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.container}>
                <h2>Yashtery</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div className={classes.container}>
                <h3>Subscribe to our newsletter</h3>
                <form className={classes.search}>
                    <SecondaryButton styles={{ position: 'absolute', margin: "0px 0px 0px 12rem", borderRadius: '35px', backgroundColor: "var(--secondary-color)", color: 'black', fontSize: "12px" }}>
                        Subscribe
                        <TbSend size={18} />
                    </SecondaryButton>
                    <input type='text' className={classes.emailInput} placeholder="Enter Your E-mail" />
                </form>

                <Divider />

                <div className={classes.socials}>
                    <div className={classes.image}><img src={`${process.env.PUBLIC_URL}/images/facebook.png`} alt='facebook' /> <span>/Yashtery</span></div>
                    <div className={classes.image}><img src={`${process.env.PUBLIC_URL}/images/linkedin.png`} alt='linkedin' /> <span>/Yashtery</span></div>
                    <div className={classes.image}><img src={`${process.env.PUBLIC_URL}/images/instagram.png`} alt='instagram' /> <span>/Yashtery</span></div>
                    <div className={classes.image}><img src={`${process.env.PUBLIC_URL}/images/twitter.png`} alt='twitter' /> <span>/Yashtery</span></div>
                </div>

            </div>

            <Divider />
        </footer>
    )
}

export default Footer;