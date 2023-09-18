import { FunctionComponent, useState } from "react";
import Cards from "./Cards";

interface HomeProps {

}

const Home: FunctionComponent<HomeProps> = () => {
    let [userInfo, setUserInfo] = useState(
        JSON.parse(sessionStorage.getItem("userInfo") as string) == null
            ? { email: false, isAdmin: false }
            : JSON.parse(sessionStorage.getItem("userInfo") as string)
    );

    return (
        <>
            <Cards userInfo={userInfo} setUserInfo={setUserInfo} />
        </>);
};

export default Home;
