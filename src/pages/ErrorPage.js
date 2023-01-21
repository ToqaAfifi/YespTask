import { useRouteError } from "react-router-dom";
import CategoriesNavigation from "../components/navigations/CategoriesNavigation";
import InfoNavigation from "../components/navigations/InfoNavigation";
import MainNavigation from "../components/navigations/MainNavigation";

const ErrorPage = () => {

    const error = useRouteError();

    let title = "An Error Occurred!";
    let message = error.data

    if (error.status === 404) {
        title = 'Not Found!';
        message = 'Page Not Found';
    }

    if (error.status === 500) {
        message = JSON.parse(error.data).message;
    }

    return (
        <>
            <InfoNavigation />
            <MainNavigation />
            <CategoriesNavigation />

            <main>
                <h1>{title}</h1>
                <p>Status: {error.status}</p>
                <p>Message: {message}</p>
            </main>
        </>
    )
}

export default ErrorPage;