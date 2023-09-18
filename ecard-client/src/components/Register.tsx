import { useFormik } from "formik";
import { FunctionComponent } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { addUser, getTokenDetails } from "../services/usersServices";
import { successMsg } from "../services/feedbacksServices";

interface RegisterProps {
    setUserInfo: Function;
}

const Register: FunctionComponent<RegisterProps> = ({ setUserInfo }) => {
    let navigate = useNavigate();
    let formik = useFormik({
        initialValues: {
            firstName: "",
            middleName: "",
            lastName: "",
            phone: "",
            email: "",
            password: "",
            image_url: "https://img.freepik.com/premium-photo/workplace-concept-with-laptop-computer-cup-coffee-books-top-view_44344-1532.jpg",
            image_alt: "https://img.freepik.com/premium-photo/workplace-concept-with-laptop-computer-cup-coffee-books-top-view_44344-1532.jpg",
            state: "",
            country: "",
            city: "",
            street: "",
            housenumber: "",
            zip: "",
            buisness: false,
            isAdmin: false
        },
        validationSchema: yup.object({
            firstName: yup.string().required().min(1),
            middleName: yup.string().min(0),
            lastName: yup.string().required().min(1),
            phone: yup.string().required().min(10),
            email: yup.string().required().email(),
            password: yup.string().required().min(8),
            image_url: yup.string().min(1),
            image_alt: yup.string().min(1),
            state: yup.string().required().min(1),
            country: yup.string().required().min(1),
            city: yup.string().required().min(1),
            street: yup.string().required().min(1),
            housenumber: yup.string().required().min(1),
            zip: yup.string().required().min(1),
            isAdmin: yup.boolean(),
            buisness: yup.boolean().required(),
        }),
        onSubmit(values) {
            addUser({ ...values, isAdmin: false })
                .then((res) => {
                    navigate("/home");
                    sessionStorage.setItem("token", JSON.stringify({ token: res.data }))
                    sessionStorage.setItem(
                        "userInfo",
                        JSON.stringify({
                            email: (getTokenDetails() as any).email,
                            isAdmin: (getTokenDetails() as any).isAdmin,
                            userId: (getTokenDetails() as any).userId,
                        })
                    );
                    setUserInfo(JSON.parse(sessionStorage.getItem("userInfo") as string));
                    successMsg(`${values.email} wes registered and logged in`);
                })
                .catch((err) => console.log(err));
        },
    });
    return (
        <>
            <div className="container col-md-10">
                <form onSubmit={formik.handleSubmit}>
                    <h3 className="display-3">REGISTER</h3>
                    <div className="row">
                        <div className="container col-md-5">
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    placeholder="John"
                                    name="firstName"
                                    value={formik.values.firstName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <label htmlFor="firstName">First Name</label>
                                {formik.touched.firstName && formik.errors.firstName && (
                                    <small className="text-danger">{formik.errors.firstName}</small>
                                )}
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="middleName"
                                    placeholder=""
                                    name="middleName"
                                    value={formik.values.middleName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <label htmlFor="firstName">Middle Name</label>
                                {formik.touched.middleName && formik.errors.middleName && (
                                    <small className="text-danger">{formik.errors.middleName}</small>
                                )}
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    placeholder="Doe"
                                    name="lastName"
                                    value={formik.values.lastName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <label htmlFor="firstName">Last Name</label>
                                {formik.touched.lastName && formik.errors.lastName && (
                                    <small className="text-danger">{formik.errors.lastName}</small>
                                )}
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="phone"
                                    placeholder=""
                                    name="phone"
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <label htmlFor="firstName">Phone</label>
                                {formik.touched.phone && formik.errors.phone && (
                                    <small className="text-danger">{formik.errors.phone}</small>
                                )}
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="floatingEmail"
                                    placeholder="name@example.com"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <label htmlFor="floatingInput">Email address</label>
                                {formik.touched.email && formik.errors.email && (
                                    <small className="text-danger">{formik.errors.email}</small>
                                )}
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="floatingPassword"
                                    placeholder="Password"
                                    name="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <label htmlFor="floatingPassword">Password</label>
                                {formik.touched.password && formik.errors.password && (
                                    <small className="text-danger">{formik.errors.password}</small>
                                )}
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="floatingImageURL"
                                    placeholder=""
                                    name="image"
                                    value={formik.values.image_url}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <label htmlFor="floatingPassword">Image Url</label>
                                {formik.touched.image_url && formik.errors.image_url && (
                                    <small className="text-danger">{formik.errors.image_url}</small>
                                )}
                            </div>
                        </div>
                        <div className="container col-md-5">
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="floatingImageALT"
                                    placeholder="Image"
                                    name="image"
                                    value={formik.values.image_alt}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <label htmlFor="floatingPassword">Image Alt</label>
                                {formik.touched.image_alt && formik.errors.image_alt && (
                                    <small className="text-danger">{formik.errors.image_alt}</small>
                                )}
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="floatingState"
                                    placeholder="floatingState"
                                    name="state"
                                    value={formik.values.state}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <label htmlFor="floatingPassword">State</label>
                                {formik.touched.state && formik.errors.state && (
                                    <small className="text-danger">{formik.errors.state}</small>
                                )}
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="floatingCountry"
                                    placeholder="Country"
                                    name="country"
                                    value={formik.values.country}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <label htmlFor="floatingPassword">Country</label>
                                {formik.touched.country && formik.errors.country && (
                                    <small className="text-danger">{formik.errors.country}</small>
                                )}
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="floatingCity"
                                    placeholder="City"
                                    name="city"
                                    value={formik.values.city}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <label htmlFor="floatingPassword">City</label>
                                {formik.touched.city && formik.errors.city && (
                                    <small className="text-danger">{formik.errors.city}</small>
                                )}
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="floatingStreet"
                                    placeholder="Street"
                                    name="street"
                                    value={formik.values.street}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <label htmlFor="floatingPassword">Street</label>
                                {formik.touched.street && formik.errors.street && (
                                    <small className="text-danger">{formik.errors.street}</small>
                                )}
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="floatingHousenumber"
                                    placeholder="Housenumber"
                                    name="housenumber"
                                    value={formik.values.housenumber}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <label htmlFor="floatingPassword">Housenumber</label>
                                {formik.touched.housenumber && formik.errors.housenumber && (
                                    <small className="text-danger">{formik.errors.housenumber}</small>
                                )}
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="floatingZip"
                                    placeholder="Zip"
                                    name="zip"
                                    value={formik.values.zip}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <label htmlFor="floatingPassword">ZIP</label>
                                {formik.touched.zip && formik.errors.zip && (
                                    <small className="text-danger">{formik.errors.zip}</small>
                                )}
                            </div>
                        </div>
                        <div className="mb-3">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="buisness"
                                name="buisness"
                                checked={formik.values.buisness}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <label className="form-check-label" htmlFor="buisness">
                                Business Account
                            </label>
                            {formik.touched.buisness && formik.errors.buisness && (
                                <small className="text-danger">{formik.errors.buisness}</small>
                            )}
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary my-3 w-100"
                        disabled={!formik.isValid || !formik.dirty}
                    >
                        Register
                    </button>
                </form>
                <Link to="/">Already have user? Login here</Link>
            </div>
        </>
    );
};

export default Register;