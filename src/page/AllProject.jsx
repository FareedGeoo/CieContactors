import React, { useEffect, useState } from 'react'
import Images from '../component/Images';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate, Link, createSearchParams } from 'react-router-dom';
import ApiCaller from '../api/ApiCaller';




export default function AllProject() {
  const { t, i18n } = useTranslation()

  const location = useLocation()

  const navigate = useNavigate()
  const [allProjectType1, setAllProjectType1] = useState([])
  const [allProjectType2, setAllProjectType2] = useState([])
  const [allProjectType3, setAllProjectType3] = useState([])
  const [typeNum, setTypeNum] = useState(1)
  async function getAllProject() {
    let response = await new ApiCaller(`https://api.cie-contractors.org/project/GetByType/${typeNum}`).getData()
    if (response.Status) {
      if (typeNum === 1) {
        setAllProjectType1(response.Result)
      } else if (typeNum === 2) {
        setAllProjectType2(response.Result)
      } else {
        setAllProjectType3(response.Result)
      }

    }

  }

  useEffect(() => {
    getAllProject()
  }, [typeNum])


  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-12'>
          <div className='all-project'>
            <div className='row'>
              <div className='col-12'>
                <div className='title text-center my-5'>
                  <h1>{t("Allprojects")}</h1>
                </div>
              </div>
            </div>
            <div className='row '>
              <div className='col-12 d-flex justify-content-center'>
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" onClick={() => { setTypeNum(1) }}>{t("Resident")}</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" onClick={() => { setTypeNum(2) }}>{t("Admin")}</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" onClick={() => { setTypeNum(3) }}>{t("Industrial")}</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" onClick={() => { setTypeNum(4) }}>{t("Hotels")}</button>
                  </li>
                </ul>
              </div>
            </div>
            <div className='row'>
              <div className='col-12'>
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                    <div className='row d-flex align-items-center justify-content-center w-100'>
                      {

                        allProjectType1.map((item) => (
                          <div className='col-lg-4 col-md-6 my-2 d-flex justify-content-center'>
                            <div className='item' key={item.Id}>

                              <img src={"https://cie-contractors.org/images/" + item.MainImage} style={{ position: "relative", width: "100%", height: "20rem" }} alt="" />
                              <div className='layout' >
                                <button className='project-btn' onClick={() => { navigate(`/viewproject?${createSearchParams({id:item.Id})}`)}}></button>
                                <h6>{item.titleEn}</h6>
                                <p>{item.ShortDescEn}</p>
                              </div>
                            </div>
                          </div>

                        ))

                      }
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                    <div className='row d-flex align-items-center justify-content-center'>
                      {

                        allProjectType2.map((item) => (
                          <div className='col-lg-4 col-md-6 my-2 d-flex justify-content-center'>
                            <div className='item' key={item.Id}>

                              <img src={"https://cie-contractors.org/images/" + item.MainImage} style={{ position: "relative", width: "100%", height: "20rem" }} alt="" />
                              <div className='layout' >
                                <button className='project-btn' onClick={() => { navigate(`/viewproject?${createSearchParams({id:item.Id})}`) }}></button>
                                <h6>{item.titleEn}</h6>
                                <p>{item.ShortDescEn}</p>
                              </div>
                            </div>
                          </div>

                        ))

                      }
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">
                    <div className='row '>
                      {

                        allProjectType3.map((item) => (
                          <div className='col-lg-4 col-md-6 my-2 d-flex justify-content-center'>
                            <div className='item' key={item.Id}>

                              <img src={"https://cie-contractors.org/images/" + item.MainImage} style={{ position: "relative", width: "100%", height: "20rem" }} alt="" />
                              <div className='layout' >
                                <button className='project-btn' onClick={() => { navigate(`/viewproject?${createSearchParams({id:item.Id})}`)}}></button>
                                <h6>{item.titleEn}</h6>
                                <p>{item.ShortDescEn}</p>
                              </div>
                            </div>
                          </div>

                        ))

                      }
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
