import React, { useEffect } from 'react'
import avater from '../assets/images/avatar.jpg'
import logo from '../assets/images/logo.png'
import Service1Img from '../assets/images/Icon - House.png'
import Service2Img from '../assets/images/Layer 2.png'
import Service3Img from '../assets/images/Icon - Building.png'
import { useTranslation } from 'react-i18next'
import { createSearchParams, useNavigate } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Images from '../component/Images';
import ApiCaller from '../api/ApiCaller'
import { useState } from 'react'
import { useRef } from 'react'
import Slider_Two from '../component/Slider_Two'
// import OwlCarousel from 'react-owl-carousel';
import OwlCarousel from 'react-owl-carousel-rtl';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectCoverflow, Pagination, Navigation } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import * as Yup from "yup";


import Carousel from 'react-bootstrap/Carousel';
import { ErrorMessage, Field, Form, Formik } from "formik";


export default function Home() {




    const [landingProjectsType1, setLandingProjectsType1] = useState([])
    const [landingProjectsType2, setLandingProjectsType2] = useState([])
    const [landingProjectsType3, setLandingProjectsType3] = useState([])
    const [landingProjectsType4, setLandingProjectsType4] = useState([])


    const carouselItems = landingProjectsType1.map((item) => (
        <div className='item' key={item.Id}>

            <img src={"https://cie-contractors.org/images/" + item.MainImage} style={{ position: "relative" }} alt="" />
            <div className='layout' >
                <button className='project-btn' onClick={() => { navigate('viewproject', { state: item.Id }) }}></button>
                {window.localStorage.i18nextLng == "en" &&
                    <> <h6>{item.titleEn}</h6>
                        <p>{item.ShortDescEn}</p></>

                }
                {window.localStorage.i18nextLng == "ar" &&
                    <> <h6>{item.titleAr}</h6>
                        <p>{item.ShortDescAr}</p></>

                }
            </div>
        </div>
    ))


    async function getProjectInLanding() {
        let response = await new ApiCaller(`https://api.cie-contractors.org/project/Site/GetForLanding`).getData()
        if (response.Status) {
            setLandingProjectsType1(response.Result.Type1)
            setLandingProjectsType2(response.Result.Type2)
            setLandingProjectsType3(response.Result.Type3)
            setLandingProjectsType4(response.Result.Type4)

        }

    }




    const { t, i18n } = useTranslation()
    const navigate = useNavigate()
    const settings = {
        dots: true,
        className: "carousel",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        slidesToShow: landingProjectsType1.length <= 2 ? 1 : 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        afterChange: function (index) {

        }

    };
 
    function s() {
        let options = {
            items: 3,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                }
            }
        };
        return options
    }

    useEffect(() => {
        getProjectInLanding()
        s()
    }, [])

    //   setTimeout(options,1000)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [phoneNumber, setphoneNumber] = useState(0)


    // async function formSubmit() {


    //     if (name === '' && email === '' && message === '' && phoneNumber === 0) {
    //         alert('Please fill all fields')

    //     } else {
    //         let body =
    //         {
    //             subject: name,
    //             email: email,
    //             phone: phoneNumber,
    //             message: message
    //         }
    //         let res = await new ApiCaller(`https://api.cie-contractors.org/contact/sendmail`).postData(body)
    //         alert(res.message)

    //     }

    // }

    const containerStyles = {
        width: "500px",
        height: "280px",
        margin: "0 auto",
    };

    const items1 = landingProjectsType1?.reduce((result, photo, index) => {
        if (index % 2 === 0) {
            result.push(
                <Carousel.Item key={photo.id}>
                    <div className="d-flex justify-content-center g-2">
                        <div className='item m-2' >
                            <img className="slider-img" src={"https://cie-contractors.org/images/" + photo.MainImage} alt={photo.MainImage} />
                            <div className='layout' >
                                <button className='project-btn' onClick={() => { navigate(`/viewproject?${createSearchParams({ id: photo.Id })}`) }}></button>
                                {window.localStorage.i18nextLng == "en" &&
                                    <> <h6>{photo.titleEn}</h6>
                                        <p>{photo.ShortDescEn}</p></>

                                }
                                {window.localStorage.i18nextLng == "ar" &&
                                    <> <h6>{photo.titleAr}</h6>
                                        <p>{photo.ShortDescAr}</p></>

                                }
                            </div>
                        </div>
                        {landingProjectsType1[index + 1] && (
                            <div className='item m-2' >
                                <img
                                    className="slider-img"
                                    src={"https://cie-contractors.org/images/" + landingProjectsType1[index + 1].MainImage}
                                    alt={landingProjectsType1[index + 1].MainImage}
                                />
                                <div className='layout' >
                                    <button className='project-btn' onClick={() => { navigate(`/viewproject?${createSearchParams({ id: landingProjectsType1[index + 1].Id })}`) }}></button>
                                    <h6>{landingProjectsType1[index + 1].titleEn}</h6>
                                    <p>{landingProjectsType1[index + 1].ShortDescEn}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </Carousel.Item>
            );
        }
        return result;
    }, []);

    const items2 = landingProjectsType2?.reduce((result, photo, index) => {
        if (index % 2 === 0) {
            result.push(
                <Carousel.Item key={photo.id}>
                    <div className="d-flex justify-content-center g-2">
                        <div className='item m-2' >
                            <img className="slider-img" src={"https://cie-contractors.org/images/" + photo.MainImage} alt={photo.MainImage} />
                            <div className='layout' >
                                <button className='project-btn' onClick={() => { navigate(`/viewproject?${createSearchParams({ id: photo.Id })}`) }}></button>
                                {window.localStorage.i18nextLng == "en" &&
                                    <> <h6>{photo.titleEn}</h6>
                                        <p>{photo.ShortDescEn}</p></>

                                }
                                {window.localStorage.i18nextLng == "ar" &&
                                    <> <h6>{photo.titleAr}</h6>
                                        <p>{photo.ShortDescAr}</p></>

                                }
                            </div>
                        </div>
                        {landingProjectsType2[index + 1] && (
                            <div className='item m-2' >
                                <img
                                    className="slider-img"
                                    src={"https://cie-contractors.org/images/" + landingProjectsType2[index + 1].MainImage}
                                    alt={landingProjectsType2[index + 1].MainImage}
                                />
                                <div className='layout' >
                                    <button className='project-btn' onClick={() => { navigate(`/viewproject?${createSearchParams({ id: landingProjectsType2[index + 1].Id })}`) }}></button>
                                    <h6>{landingProjectsType2[index + 1].titleEn}</h6>
                                    <p>{landingProjectsType2[index + 1].ShortDescEn}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </Carousel.Item>
            );
        }
        return result;
    }, []);

    const items3 = landingProjectsType3?.reduce((result, photo, index) => {
        if (index % 2 === 0) {
            result.push(
                <Carousel.Item key={photo.id}>
                    <div className="d-flex justify-content-center g-2">
                        <div className='item m-2' >
                            <img className="slider-img" src={"https://cie-contractors.org/images/" + photo.MainImage} alt={photo.MainImage} />
                            <div className='layout' >
                                <button className='project-btn' onClick={() => { navigate(`/viewproject?${createSearchParams({ id: photo.Id })}`) }}></button>
                                {window.localStorage.i18nextLng == "en" &&
                                    <> <h6>{photo.titleEn}</h6>
                                        <p>{photo.ShortDescEn}</p></>

                                }
                                {window.localStorage.i18nextLng == "ar" &&
                                    <> <h6>{photo.titleAr}</h6>
                                        <p>{photo.ShortDescAr}</p></>

                                }
                            </div>
                        </div>
                        {landingProjectsType3[index + 1] && (
                            <div className='item m-2' >
                                <img
                                    className="slider-img"
                                    src={"https://cie-contractors.org/images/" + landingProjectsType3[index + 1].MainImage}
                                    alt={landingProjectsType3[index + 1].MainImage}
                                />
                                <div className='layout' >
                                    <button className='project-btn' onClick={() => { navigate(`/viewproject?${createSearchParams({ id: landingProjectsType3[index + 1].Id })}`) }}></button>
                                    <h6>{landingProjectsType3[index + 1].titleEn}</h6>
                                    <p>{landingProjectsType3[index + 1].ShortDescEn}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </Carousel.Item>
            );
        }
        return result;
    }, []);
    const items4 = landingProjectsType4?.reduce((result, photo, index) => {
        if (index % 2 === 0) {
            result.push(
                <Carousel.Item key={photo.id}>
                    <div className="d-flex justify-content-center g-2">
                        <div className='item m-2' >
                            <img className="slider-img" src={"https://cie-contractors.org/images/" + photo.MainImage} alt={photo.MainImage} />
                            <div className='layout' >
                                <button className='project-btn' onClick={() => { navigate(`/viewproject?${createSearchParams({ id: photo.Id })}`) }}></button>
                                {window.localStorage.i18nextLng == "en" &&
                                    <> <h6>{photo.titleEn}</h6>
                                        <p>{photo.ShortDescEn}</p></>

                                }
                                {window.localStorage.i18nextLng == "ar" &&
                                    <> <h6>{photo.titleAr}</h6>
                                        <p>{photo.ShortDescAr}</p></>

                                }
                            </div>
                        </div>
                        {landingProjectsType4[index + 1] && (
                            <div className='item m-2' >
                                <img
                                    className="slider-img"
                                    src={"https://cie-contractors.org/images/" + landingProjectsType4[index + 1].MainImage}
                                    alt={landingProjectsType4[index + 1].MainImage}
                                />
                                <div className='layout' >
                                    <button className='project-btn' onClick={() => { navigate(`/viewproject?${createSearchParams({ id: landingProjectsType4[index + 1].Id })}`) }}></button>
                                    <h6>{landingProjectsType4[index + 1].titleEn}</h6>
                                    <p>{landingProjectsType4[index + 1].ShortDescEn}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </Carousel.Item>
            );
        }
        return result;
    }, []);
  

    return (<>
   


        <div className='home w3l-main-slider' id='home'>
        <OwlCarousel className='owl-theme owl-one owl-carousel owl-rtl' items={1} loop margin={0} nav rtlClass="owl-rtl" rtl={window.localStorage.i18nextLng == "ar"}>
        <div className="item">
          <li>
            <div className="slider-info banner-view " > 
              <div className="banner-info">
                <div className="container">
                  <div className="banner-info-bg text-left">
                    
                    <h5>BUILDING A BETTER WORLD</h5>
                    <a  className="view" href="#about">Read More <span className="fa fa-long-arrow-right ml-1"
                        aria-hidden="true" ></span></a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </div>
        <div className="item">
          <li>
            <div className="slider-info banner-view " > 
              <div className="banner-info">
                <div className="container">
                  <div className="banner-info-bg text-left">
                    
                    <h5>BUILDING A BETTER WORLD</h5>
                    <a  className="view" >Read More <span className="fa fa-long-arrow-right ml-1"
                        aria-hidden="true"></span></a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </div>
        <div className="item">
          <li>
            <div className="slider-info banner-view "> 
              <div className="banner-info">
                <div className="container">
                  <div className="banner-info-bg text-left">
                    
                    <h5>leading cement producer and seller in Egypt.</h5>
                    <a  className="view" > Read More<span className="fa fa-long-arrow-right ml-1"
                        aria-hidden="true"></span></a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </div>
        <div className="item">
          <li>
            <div className="slider-info banner-view " > 
              <div className="banner-info">
                <div className="container">
                  <div className="banner-info-bg text-left">
                    
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic odio voluptatem.</h5>
                    <a  className="view" > Read More <span className="fa fa-long-arrow-right ml-1"
                        aria-hidden="true"></span></a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </div>

</OwlCarousel>
            {/* <div className='row'>
                <div className='col-12'>
                    <div className='title'>
                        <h1>{t("CieContactors")}</h1>
                    </div>
                </div>
            </div>
            <div className='row my-5'>
                <div className='col-6 d-flex-end'>
                    <div className='home-card'>
                        <div className='img-container'>
                            <img src={avater} alt="" />
                        </div>
                        <div className='card-body text-center my-5'>
                            <h5>{t("Ahmed")}</h5>
                            <span>{t("CO")}</span>
                        </div>
                    </div>
                </div>
                <div className='col-6 d-flex-start'>
                    <div className='home-card'>
                        <div className='img-container'>
                            <img src={avater} alt="" />
                        </div>
                        <div className='card-body text-center my-5'>
                            <h5>{t("mohamed")}</h5>
                            <span>{t("CO")}</span>
                        </div>
                    </div>
                </div>
            </div> */}



        </div>

        <div className='sec-two'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 '>
                        <div className='img-sec-two '>
                            <img src={logo} alt="" />
                        </div>

                    </div>
                    <div className='col-md-6 '>
                        <div className='sec-two-content'>
                            <h2>{t("CieContactorshelpyoubuildyournextbeatifulplacetostay")}</h2>
                            <p>{t("Wealwaysprovidingthebestsolutionforourclients,wedesignthebestbuildingtoreachyourhighestexpectation")}</p>
                        </div>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-md-4'>
                        <div className='title-number'>
                            <p>{t("Yearsexperience")}</p>
                            <span>{t("10")}</span>
                        </div>

                    </div>
                    <div className='col-md-4'>
                        <div className='title-number'>
                            <p>{t("previousprojects")}</p>
                            <span>{t("48+")}</span>
                        </div>

                    </div>


                    <div className='col-md-4'>
                        <div className='title-number'>
                            <p>{t("SATISFIEDCLIENTS")}</p>
                            <span>{t("95%")}</span>
                        </div>
                    </div>


                </div>
            </div>
        </div>



        <div className='sec-three'>
            <div className='container'>
                <div className='row my-5 text-center'>
                    <div className='col-12'>
                        <div className='title'>
                            <h1>{t("services")}</h1>
                        </div>
                    </div>
                </div>

                <div className='row align-items-center'>
                    <div className='col-lg-4 col-md-6'>
                        <div className='sce-s'>
                            <div className='img-sec-s'>
                                <img src={Service2Img} alt="" />
                            </div>
                            <h4>{t("ServiceOne")}</h4>
                            <p>{t("ServiceOneDesc")}</p>
                            <button className='learn-more' onClick={() => {
                                navigate('services', {
                                    state: {
                                        imgPath: Service2Img,
                                        title: t("ServiceOne"),
                                        desc: t("ServiceOneDesc")

                                    }
                                })
                            }}>{t("LearnMore")}</button>

                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                        <div className='sce-s'>
                            <div className='img-sec-s'>
                                <img src={Service1Img} alt="" />
                            </div>
                            <h4>{t("ServiceTwo")}</h4>
                            <p>{t("ServiceTwoDesc")}</p>
                            <button className='learn-more' onClick={() => {
                                navigate('services', {
                                    state: {
                                        imgPath: Service1Img,
                                        title: t("ServiceTwo"),
                                        desc: t("ServiceTwoDesc")

                                    }
                                })
                            }}>{t("LearnMore")}</button>

                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                        <div className='sce-s'>
                            <div className='img-sec-s'>
                                <img src={Service3Img} className='img-handle' alt="" />
                            </div>

                            <h4>{t("ServiceThree")}</h4>
                            <p>{t("ServiceThreeDesc")}</p>
                            <button className='learn-more' onClick={() => {
                                navigate('services', {
                                    state: {
                                        imgPath: Service3Img,
                                        title: t("ServiceThree"),
                                        desc: t("ServiceThreeDesc")

                                    }
                                })
                            }}>{t("LearnMore")}</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='sec-four mt-5' id='projects'>
            <div className='title  d-flex align-items-center justify-content-center my-5'>
                <h1>{t("projects")}</h1>
                <button className='btn-all ' onClick={() => { navigate('../allproject') }}>{t("All")} <i className={`fa-solid ${i18n.language === "ar" ? "fa-arrow-left" : "fa-arrow-right"} `}></i></button>
            </div>

            <div className='row'>
                <div className='col-12 d-flex justify-content-center'>
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">{t("Resident")}</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">{t("Industrial")}</button>
                        </li>

                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">{t("Admin")}</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-contact-tab-four" data-bs-toggle="pill" data-bs-target="#pills-contact-four" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">{t("Hotels")}</button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">


                    <div className='row'>
                        <div className='col-12 w-100 d-flex flex-column align-items-center'>

                            <Carousel >
                                {
                                    items1
                                }
                                {/* {
                                    landingProjectsType1.map((item) => (
                                        <Carousel.Item>
                                            <div className='item' key={item.Id}>

                                                <img src={"https://cie-contractors.org/images/" + item.MainImage} className='slider-img' alt="" />
                                                <div className='layout' >
                                                    <button className='project-btn' onClick={() => { navigate(`/viewproject?${createSearchParams({id:item.Id})}`) }}></button>
                                                    <h6>{item.titleEn}</h6>
                                                    <p>{item.ShortDescEn}</p>
                                                </div>
                                            </div>

                                        </Carousel.Item>

                                    ))
                                } */}


                            </Carousel>



                        </div>

                    </div>

                </div>

                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                    <div className='row'>
                        <div className='col-12 w-100 d-flex flex-column align-items-center'>

                            <Carousel>

                                {
                                    items2
                                }
                                {/* {
                                    landingProjectsType2.map((item) => (
                                        <Carousel.Item>
                                            <div className='item' key={item.Id}>

                                                <img src={"https://cie-contractors.org/images/" + item.MainImage} className='slider-img' alt="" />
                                                <div className='layout' >
                                                    <button className='project-btn' onClick={() => { navigate(`/viewproject?${createSearchParams({ id: item.Id })}`) }}></button>
                                                    <h6>{item.titleEn}</h6>
                                                    <p>{item.ShortDescEn}</p>
                                                </div>
                                            </div>

                                        </Carousel.Item>

                                    ))
                                } */}
                            </Carousel>



                        </div>

                    </div>
                </div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">
                    <div className='row'>
                        <div className='col-12 w-100 d-flex flex-column align-items-center'>

                            <Carousel>
                                {
                                    items3
                                }

                                {/* {
                                    landingProjectsType3.map((item) => (
                                        <Carousel.Item>
                                            <div className='item' key={item.Id}>

                                                <img src={"https://cie-contractors.org/images/" + item.MainImage} className='slider-img' alt="" />
                                                <div className='layout' >
                                                    <button className='project-btn' onClick={() => { navigate(`/viewproject?${createSearchParams({ id: item.Id })}`) }}></button>
                                                    <h6>{item.titleEn}</h6>
                                                    <p>{item.ShortDescEn}</p>
                                                </div>
                                            </div>

                                        </Carousel.Item>

                                    ))
                                } */}
                            </Carousel>



                        </div>

                    </div>
                </div>
                <div className="tab-pane fade" id="pills-contact-four" role="tabpanel" aria-labelledby="pills-contact-tab-four" tabIndex="0">
                    <div className='row'>
                        <div className='col-12 w-100 d-flex flex-column align-items-center'>

                            <Carousel>
                                {
                                    items4
                                }

                                {/* {
                                    landingProjectsType3.map((item) => (
                                        <Carousel.Item>
                                            <div className='item' key={item.Id}>

                                                <img src={"https://cie-contractors.org/images/" + item.MainImage} className='slider-img' alt="" />
                                                <div className='layout' >
                                                    <button className='project-btn' onClick={() => { navigate(`/viewproject?${createSearchParams({ id: item.Id })}`) }}></button>
                                                    <h6>{item.titleEn}</h6>
                                                    <p>{item.ShortDescEn}</p>
                                                </div>
                                            </div>

                                        </Carousel.Item>

                                    ))
                                } */}
                            </Carousel>



                        </div>

                    </div>
                </div>
            </div>



        </div>


        <div className='sec-five my-5' id='about'>
            <div className='container'>
                <div className='row my-5'>
                    <div className='col-12'>
                        <div className='title text-center'>
                            <h1>{t("Aboutcompany")}</h1>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-12'>
                        <div className='about-content'>
                            {/* <h2>{t("ServiceOne")}</h2> */}
                            <p>{t("AboutcompanyDesc")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


       


    </>
    )
}
