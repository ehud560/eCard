import { FunctionComponent } from "react";

interface AboutProps {

}

const About: FunctionComponent<AboutProps> = () => {
    return (<>
        <div className="container">
            <h1>Welcome to Our World: Where Dreams Come to Life!</h1>
            <p>At OurWorld, we believe in turning dreams into reality. We are a passionate team of creators, innovators, and problem solvers on a mission to make a positive impact. Our diverse range of products and services caters to every aspect of life.

                From cutting-edge technology solutions to immersive entertainment experiences, we strive to bring joy, convenience, and inspiration to our customers. Our commitment to quality and customer satisfaction drives everything we do.

                Beyond our products, we are dedicated to social responsibility, sustainability, and giving back to communities worldwide. Together, we can build a brighter future for generations to come.

                Join us in this exciting journey as we continue to shape a world where imagination knows no bounds. Together, let's embrace the extraordinary!</p>
        </div>
    </>);
}

export default About;