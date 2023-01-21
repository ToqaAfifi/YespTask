import { Button } from "@mui/material";

const PrimaryButton = ({ children, styles, onClick }) => {
    return (
        <Button style={styles} onClick={onClick}>{children}</Button>
    );
}

export default PrimaryButton;