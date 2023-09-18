import { FunctionComponent, useContext } from "react";
import { useFormik } from "formik";
import * as yup from "yup"
import { successMsg } from "../services/feedbacksServices";
import Card from "../interfaces/Card";
import { addCard } from "../services/cardsServices";
import { SiteTheme } from "../App";

interface NewCardProps {
    onHide: Function;
    render: Function;
    userInfo: any;
}
const NewCard: FunctionComponent<NewCardProps> = ({ onHide, render, userInfo }) => {
    let theme = useContext(SiteTheme);
    let formik = useFormik({
        initialValues: {
            title: "", subtitle: "", description: "", phone: "", email: "", web: "", image_url: "", image_alt: "", country: "", state: "", city: "", street: "", housenumber: "", zip: "", creatorId: `${userInfo.email}`
        },
        validationSchema: yup.object({
            title: yup.string().required().min(2),
            subtitle: yup.string().min(0),
            description: yup.string().required().min(0),
            phone: yup.string().required().min(10),
            email: yup.string().required().email(),
            web: yup.string().min(0),
            image_url: yup.string().min(0),
            image_alt: yup.string().min(0),
            state: yup.string().required().min(0),
            country: yup.string().required().min(0),
            city: yup.string().required().min(0),
            street: yup.string().required().min(0),
            housenumber: yup.string().required().min(0),
            zip: yup.string().required().min(0),
            creatorId: yup.string().min(2)
        }),
        onSubmit(values: Card) {
            addCard(values)
                .then((res) => {
                    render();
                    onHide();
                    successMsg("The card was created successfully");
                })
                .catch((err) => console.log(err));
        }
    });

    return (<div className={`container ${theme}`}  >
        <form className="form-floating mb-3 mt-3" onSubmit={formik.handleSubmit}>
            <div className="row g-2 border rounded-4 border-primary mt-1">
                <div className="form-floating col-6 mb-3 mt-3">
                    <input type="text" className="form-control border-primary" id="floatingTitle" placeholder="title"
                        name="title"
                        onChange={formik.handleChange}
                        value={formik.values.title}
                        onBlur={formik.handleBlur} ></input>
                    <label htmlFor="floatingTitle">Title</label>
                    {formik.touched.title && formik.errors.title && (
                        <p className="text-danger">{formik.errors.title}</p>)}
                </div>
                <div className="form-floating col-6 mb-3 mt-3">
                    <input type="text" className="form-control border-primary" id="floatingSubtitle" placeholder="subtitle"
                        name="subtitle"
                        onChange={formik.handleChange}
                        value={formik.values.subtitle}
                        onBlur={formik.handleBlur} ></input>
                    <label htmlFor="floatingSubtitle">Subtitle</label>
                    {formik.touched.subtitle && formik.errors.subtitle && (
                        <p className="text-danger">{formik.errors.subtitle}</p>)}
                </div>
                <div className="form-floating col-6 mb-3">
                    <input type="text" className="form-control border-primary"
                        id="floatingDescription"
                        placeholder="Description"
                        name="description"
                        onChange={formik.handleChange}
                        value={formik.values.description}
                        onBlur={formik.handleBlur} ></input>
                    <label htmlFor="floatingDescription">description</label>
                    {formik.touched.description && formik.errors.description && (
                        <p className="text-danger">{formik.errors.description}</p>)}
                </div>
                <div className="form-floating col-6 mb-3">
                    <input type="text" className="form-control border-primary" id="floatingPhone" placeholder="Phone"
                        name="phone"
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                        onBlur={formik.handleBlur} ></input>
                    <label htmlFor="floatingPhone">Phone</label>
                    {formik.touched.phone && formik.errors.phone && (
                        <p className="text-danger">{formik.errors.phone}</p>)}
                </div>
                <div className="form-floating col-6 mb-3">
                    <input type="text" className="form-control border-primary" id="floatingEmail" placeholder="name@example.com"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur} ></input>
                    <label htmlFor="floatingEmail">email address</label>
                    {formik.touched.email && formik.errors.email && (
                        <p className="text-danger">{formik.errors.email}</p>)}
                </div>
                <div className="form-floating col-6">
                    <input type="text" className="form-control border-primary" id="floatingWeb" placeholder="Web"
                        name="web"
                        onChange={formik.handleChange}
                        value={formik.values.web}
                        onBlur={formik.handleBlur} ></input>
                    <label htmlFor="floatingWeb">Web</label>
                    {formik.touched.web && formik.errors.web && (
                        <p className="text-danger">{formik.errors.web}</p>)}
                </div>
            </div>
            <h6 className="mt-4">Image</h6>
            <div className="row g-2 border rounded-4 border-primary mt-1 ">
                <div className="form-floating col-6 mb-3 mt-3">
                    <input
                        type="text" className="form-control border-primary" id="floatingimage_url" placeholder="Business Image"
                        name="image_url"
                        onChange={formik.handleChange}
                        value={formik.values.image_url}
                        onBlur={formik.handleBlur} ></input>
                    <label htmlFor="floatingimage_url">Image_URL</label>
                    {formik.touched.image_url && formik.errors.image_url && (
                        <p className="text-danger">{formik.errors.image_url}</p>)}
                </div>
                <div className="form-floating col-6 mb-3 mt-3">
                    <input
                        type="text" className="form-control border-primary" id="floatingimage_alt" placeholder="Image_alt"
                        name="image_alt"
                        onChange={formik.handleChange}
                        value={formik.values.image_alt}
                        onBlur={formik.handleBlur} ></input>
                    <label htmlFor="floatingimage_alt">Image_alt</label>
                    {formik.touched.image_alt && formik.errors.image_alt && (
                        <p className="text-danger">{formik.errors.image_alt}</p>)}
                </div>
            </div>
            <h6 className="mt-4">Address</h6>
            <div className="row g-2 border rounded-4 border-primary mt-1">
                <div className="form-floating col-6 mb-3 mt-3">
                    <input type="text" className="form-control border-primary" id="floatingState" placeholder="State"
                        name="state"
                        onChange={formik.handleChange}
                        value={formik.values.state}
                        onBlur={formik.handleBlur} ></input>
                    <label htmlFor="floatingState">State</label>
                    {formik.touched.state && formik.errors.state && (
                        <p className="text-danger">{formik.errors.state}</p>)}
                </div>
                <div className="form-floating col-6 mb-3 mt-3">
                    <input type="text" className="form-control border-primary" id="floatingCountry" placeholder="Country"
                        name="country"
                        onChange={formik.handleChange}
                        value={formik.values.country}
                        onBlur={formik.handleBlur} ></input>
                    <label htmlFor="floatingCountry">Country</label>
                    {formik.touched.country && formik.errors.country && (
                        <p className="text-danger">{formik.errors.country}</p>)}
                </div>
                <div className="form-floating col-6 mb-3">
                    <input type="text" className="form-control border-primary" id="floatingCity" placeholder="City"
                        name="city"
                        onChange={formik.handleChange}
                        value={formik.values.city}
                        onBlur={formik.handleBlur} ></input>
                    <label htmlFor="floatingCity">City</label>
                    {formik.touched.city && formik.errors.city && (
                        <p className="text-danger">{formik.errors.city}</p>)}
                </div>
                <div className="form-floating col-6 mb-3">
                    <input type="text" className="form-control border-primary" id="floatingStreet" placeholder="Street"
                        name="street"
                        onChange={formik.handleChange}
                        value={formik.values.street}
                        onBlur={formik.handleBlur} ></input>
                    <label htmlFor="floatingStreet">Street</label>
                    {formik.touched.street && formik.errors.street && (
                        <p className="text-danger">{formik.errors.street}</p>)}
                </div>
                <div className="form-floating col-6 mb-3">
                    <input
                        type="text" className="form-control border-primary" id="floatingHousenumber" placeholder="housenumber"
                        name="housenumber"
                        onChange={formik.handleChange}
                        value={formik.values.housenumber}
                        onBlur={formik.handleBlur} ></input>
                    <label htmlFor="floatingHousenumber">HouseNumber</label>
                    {formik.touched.housenumber && formik.errors.housenumber && (
                        <p className="text-danger">{formik.errors.housenumber}</p>)}
                </div>
                <div className="form-floating col-6 mb-3">
                    <input type="text" className="form-control border-primary" id="floatingZip" placeholder="Zip"
                        name="zip"
                        onChange={formik.handleChange}
                        value={formik.values.zip}
                        onBlur={formik.handleBlur} ></input>
                    <label htmlFor="floatingZip">Zip</label>
                    {formik.touched.zip && formik.errors.zip && (
                        <p className="text-danger">{formik.errors.zip}</p>)}
                </div>
            </div>
            <button className="btn btn-primary w-100 mt-3" type="submit">Create Card</button>
        </form>
    </div>);
}

export default NewCard;