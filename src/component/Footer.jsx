import React from 'react'
import { useTranslation } from 'react-i18next'
import { ErrorMessage, Field, Form, Formik } from "formik";
// import 'swiper/css/navigation';
import * as Yup from "yup";
import ApiCaller from '../api/ApiCaller'

export default function Footer() {
  const { t, i18n } = useTranslation()
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d352.59839730521685!2d31.338044143613175!3d30.071423976048738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e13a27d570f%3A0xaa3efa441fe3227b!2z2YLZhtiv2YrZhCDZhdi12LEgS2FuZGlsIEVneXB0!5e0!3m2!1sen!2seg!4v1686724130918!5m2!1sen!2seg"

  const schema = Yup.object({


    name: Yup.string()
        .required('Please Enter  name'),
    email: Yup.string().email("invalid Email")
        .required('Please Enter  email'),
    message: Yup.string()
        .required('Please Enter  message'),
    PhoneNumber: Yup.string()
        .required('Please Enter  Phone Number'),

})
  return (
   <>
  
  <div className='sec-six mtClass' id='contact'>

<div className='row'>
    <div className='col-md-6'>
   
        <div className='left-part'>
        <div className='row'>
            <div className='col-12'>

              <div className='company-data'>
                    <div className='address my-2'>
                        <i class="fa-solid fa-map-location mx-2 fs-5"></i>
                        {/* <span className='mx-2'>{t("Address")}:</span> */}
                        <p>{t("31 Rabaa Investment Buildings - in front of the Workers' University - Nasr City")}</p>
                    </div>
                    <div className='phone my-2'>
                    <i class="fa-solid fa-phone mx-2 fs-5"></i>
                        {/* <span className='mx-2'>{t("Phone")}:</span> */}
                        <p>24177846  - 26902534</p>
                    </div>
                    <div className='email my-2'>
                    <i class="fa-solid fa-square-envelope mx-2 fs-5"></i>
                        {/* <span className='mx-2'>{t("E-mail")}:</span> */}
                        <p>cie_contractors@yahoo.com</p>
                    </div>
              </div>

            </div>
        </div>
            <div className='container'>

                <h3>{t("Dontbeafraidtocontactusifyouhaveanyquestion")}</h3>
                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        message: "",
                        PhoneNumber: ""

                    }}
                    validationSchema={schema}
                    onSubmit={(values) => {
                        let body =
                        {
                            subject: values.name,
                            email: values.email,
                            phone: values.phoneNumber,
                            message: values.message
                        }
                        alert(JSON.stringify(body))
                        new ApiCaller(`https://api.cie-contractors.org/contact/sendmail`).postData(body).then(res => {
                            alert(res.message)
                        })

                    }}
                >

                    {({
                        values,
                        handleChange,
                        touched,
                        errors,
                        dirty,
                        isValid,
                        setFieldValue,
                    }) => (

                        <Form >
                            <div className='form-group'>
                                <Field type="text" name="name" placeholder={t("Name")} id="" />
                                <span className='text-danger'><ErrorMessage name='name' /></span>
                            </div>
                            <div className='form-group'>
                                <Field type="text" name="email" placeholder={t("Email")} id="" />
                                <span className='text-danger'><ErrorMessage name='email' /></span>
                            </div>
                            <div className='form-group'>
                                <Field type="number" name="PhoneNumber" placeholder={t("PhoneNumber")} id="" />
                                <span className='text-danger'><ErrorMessage name='PhoneNumber' /></span>
                            </div>
                            <div className='form-group'>
                                <Field as="textarea" name="message" id="" cols="30" rows="10"></Field>
                                <span className='text-danger'><ErrorMessage name='message' /></span>
                            </div>



                            <button className='send' type='submit'>{t("Getaquote")}</button>
                        </Form>
                    )}

                </Formik>

            </div>
        </div>
    </div>

    <div className='col-md-6 d-flex align-items-center justify-content-center'>

        <div className="google-map-code">

            <iframe src={mapUrl} style={{ "border": "0" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

    </div>

</div>
</div>
   <div className="container">
  
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        
      </a>
      <span className="mb-3 mb-md-0 text-muted">© 2023 Cie Contactors</span>
    
    </div>

    <ul className="nav col-md-4 justify-content-center list-unstyled d-flex">
      <li className="ms-3"><a className="text-muted" href="#"><i className="fa-brands fa-twitter"></i></a></li>
      <li className="ms-3"><a className="text-muted" href="#"><i className="fa-brands fa-instagram"></i></a></li>
      <li className="ms-3"><a className="text-muted" href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
    </ul>
    
    {/* <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><div className=' text-center'>
                    <span>01231512151215</span>
                    <p>{t("Ahmed")}</p>

                </div></li>
      <li className="ms-3"><div className=' text-center'>
                    <span>01231512151215</span>
                    <p>{t("mohamed")}</p>

                </div></li>

    </ul> */}
  </footer>
</div>
    

   </>

  )
}
