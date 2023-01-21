import { Button } from "@mui/material";

const SecondaryButton = ({ children, styles, onClick }) => {
    return (
        <Button style={styles} onClick={onClick}>{children}</Button>
    );
}

export default SecondaryButton;