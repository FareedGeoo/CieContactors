import React, { useEffect, useState } from 'react'
import Images from '../component/Images'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import ApiCaller from '../api/ApiCaller'
import { useTranslation } from 'react-i18next'
import Carousel from 'react-bootstrap/Carousel';

export default function ProjectDetails() {

    const { state } = useLocation()
    const [projectData, setProjectData] = useState({})


 const [searchParams, setSearchParams] = useSearchParams();
 let id = searchParams.get('id')

    async function getProjectDetails() {

            let response = await new ApiCaller(`https://api.cie-contractors.org/project/${id}`).getData()
            if (response.Status) {


                setProjectData(response.Result)



            }

    

    }


    useEffect(() => {
      
            getProjectDetails()
     

    }, [])


    const { t, i18n } = useTranslation()
    const navigate = useNavigate()
    return (
        <div className='container'>
            <div className='project-Details text-center'>
                <div className='title text-center'>
                    <h1>
                        {
                            i18n.language === "ar" ? projectData.titleAr : projectData.titleEn

                        }
                    </h1>
                </div>
                <div className='projects-slider'>
                    <Carousel>



                        <Carousel.Item>
                            <div className='item'>

                                <img src={"https://cie-contractors.org/images/" + projectData.MainImage} className='slider-img' alt="" />

                            </div>

                        </Carousel.Item>
                        {
                            projectData?.Images?.split(',').map((item) => (
                                <Carousel.Item>
                                    <div className='item'>

                                        <img src={"https://cie-contractors.org/images/" + item} className='slider-img' alt="" />

                                    </div>

                                </Carousel.Item>
                            ))
                        }


                    </Carousel>

                </div>
                <div className='project-details-contnet'>
                    <p>
                        {
                            i18n.language === "ar" ? projectData.LongDescAr : projectData.LongDescEn

                        }
                    </p>
                </div>
            </div>
        </div>
    )
}
