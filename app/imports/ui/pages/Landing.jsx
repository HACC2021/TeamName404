import React from 'react';
import 'bootstrap/dist/css/bootstrap';

import { Container, Grid, Image, Card, Icon, Button } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
      <div class="container-fluid mx-0 px-0">
        <nav class="navbar navbar-expand-lg navbar-dark py-1 bg-custom sticky-top">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"><img class="img-custom ps-3" src="/images/logo.png"></img></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse ms-auto pe-3" id="navbarText">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item text-white">
                  <a class="nav-link active" aria-current="page" href="https://www.oha.org/about/">About</a>
                </li>
                <li class="nav-item text-white">
                  <a class="nav-link" href="https://www.oha.org/our-foundations/">Our Foundations</a>
                </li>
                <li class="nav-item text-white">
                  <a class="nav-link" href="https://www.oha.org/education/">Our Directions</a>
                </li>
                <li class="nav-item text-white">
                  <a class="nav-link" href="https://www.oha.org/our-roles">Our Roles</a>
                </li>
                <li class="nav-item text-white">
                  <a class="nav-link" href="https://www.oha.org/resources/">Resources</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="px-0 mx-0 py-0 my-0 container-fluid mx-0 px-0">
          <div class="row">
            <div class="col my-auto">
              <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active item1">
                    <div class="carousel-caption d-none d-md-block">
                      <div class="col-lg-6 col-10">
                        <h1>Advocate for Native Hawaiians</h1>
                        <p>OHA is focused on the strategic directions of education, health, housing and economics to improve the wellbeing of Native Hawaiians.</p>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item item2">
                    <div class="carousel-caption d-none d-md-block">
                      <div class="col-lg-6 col-10">
                        <h1>Provide Resources</h1>
                        <p>Among the key ways OHA fulfills its purpose is by providing resources towards improving conditions for Native Hawaiians.</p>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item item3">
                    <div class="carousel-caption d-none d-md-block">
                      <div class="col-lg-6 col-10">
                        <h1>Facilitate Collaboration</h1>
                        <p>At OHA, facilitating collaboration is among its core values.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid pb-5" id="custom-cards">
          <div class="row justify-content-center">
            <div class="col-10">
              <h2 class="pb-2 border-bottom">SPOTLIGHT</h2>

              <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                <div class="col">
                  <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg sl-custom1">
                    <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                      <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Put Your Skills to Work</h2>
                      <ul class="d-flex list-unstyled mt-auto">
                        <li class="d-flex align-items-center me-3">
                          <svg class="bi me-2" width="1em" height="1em"></svg>
                          <small>View Current Job Opportunities</small>
                        </li>
                        <li class="d-flex align-items-center">
                          <svg class="bi me-2" width="1em" height="1em"></svg>
                          <small>3d</small>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="col">
                  <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg sl-custom2">
                    <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                      <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Ka Wailele Emergency Financial Assistance Program</h2>
                      <ul class="d-flex list-unstyled mt-auto">
                        <li class="d-flex align-items-center me-3">
                          <svg class="bi me-2" width="1em" height="1em"></svg>
                          <small>Apply Here for Emergency Financial Services</small>
                        </li>
                        <li class="d-flex align-items-center">
                          <svg class="bi me-2" width="1em" height="1em"></svg>
                          <small>4d</small>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="col">
                  <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg sl-custom3">
                    <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                      <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Increase Your Financial Capacity</h2>
                      <ul class="d-flex list-unstyled mt-auto">
                        <li class="d-flex align-items-center me-3">
                          <svg class="bi me-2" width="1em" height="1em"></svg>
                          <small>Mana I Mauli Ola Workshop</small>
                        </li>
                        <li class="d-flex align-items-center">
                          <svg class="bi me-2" width="1em" height="1em"></svg>
                          <small>5d</small>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid pb-5" id="icon-grid">
          <div class="row justify-content-center">
            <div class="col-10">
              <h2 class="pb-2 border-bottom">MORE RESOURCES</h2>
              <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
                <div class="col-lg-4 d-flex align-items-start">
                  <h1><i class="bi bi-bookmark-heart"></i></h1>
                  <div>
                    <h4 class="ps-2 fw-bold mb-0">Popular Links & Services</h4>
                    <p class="ps-2">Board Meetings, Emergency Aid, Grants, Hawaiian Registry, Housing, Loans, Scholarships, Working for OHA.</p>
                  </div>
                </div>
                <div class="col-lg-4 d-flex align-items-start">
                  <h1><i class="bi bi-stack"></i></h1>
                  <div>
                    <h4 class="ps-2 fw-bold mb-0">Our Directions</h4>
                    <p class="ps-2">Economic Stability, Educational Pathways, Quality Housing, Health Outcomes.</p>
                  </div>
                </div>
                <div class="col-lg-4 d-flex align-items-start">
                  <h1><i class="bi bi-calendar3-week"></i></h1>
                  <div>
                    <h4 class="ps-2 fw-bold mb-0">Upcoming Events</h4>
                    <p class="ps-2">Resource Management, Board of Trustees Meetings.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="container-fluid bg-dark">
          <footer class="row py-5 my-5 border-top">
            <div class="row justify-content-center">
              <div class="col-lg-3 col-12">
                <img src="/images/logo.png"></img>
              </div>
              <div class="col-lg-5 col-12">
                <div class="row">
                  <div class="col-lg-6 col-12text-white">
                    <b>Site Information</b><br /><hr/>
                    Public Notices<br />
                    Media Kit<br />
                    Terms of Use Policy<br />
                    Privacy Policy<br />
                  </div>
                  <div class="col-lg-6 col-12 text-white">
                    <b>Contact Us</b><br /><hr/>
                    Email Us<br />
                    Office Locations<br />
                    (808) 594-1835<br />
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
        {/*
      <div class="skw-pages">
      <div class="skw-page skw-page-1 active">
        <div class="skw-page__half skw-page__half--left">
          <div class="skw-page__skewed">
            <div class="skw-page__content"></div>
          </div>
        </div>
        <div class="skw-page__half skw-page__half--right">
          <div class="skw-page__skewed">
            <div class="skw-page__content">
              <h2 class="skw-page__heading firstTitle alignRight">Office of Hawaiian Affairs</h2>
              <p class="skw-page__description">OHA is a semi-autonomous state agency responsible for improving the wellbeing of all Native Hawaiians, regardless of blood quantum</p>
              <p class="skw-page__description">This is achieved through advocacy, research, community engagement, land management and the funding of community programs.</p>

            </div>
          </div>
        </div>
      </div>
      <div class="skw-page skw-page-2">
        <div class="skw-page__half skw-page__half--left">
          <div class="skw-page__skewed">
            <div class="skw-page__content">
              <h2 class="skw-page__heading firstTitle">Put your skills to work<p>for the lāhui</p></h2>
              <h2 class="skw-page__description ">The Office of Hawaiian Affairs is undergoing a reorganization that prioritizes our beneficiaries, their needs, and the communities we serve.</h2>
              <h2 class="skw-page__description ">OHA is currently recruiting executive leaders, managers and other professional staff to serve the lāhui</h2>
              <a href="https://www.oha.org/jobs" class="skw-page__description" style={{alignItems: "left"}}> <button class="ui inverted yellow basic button">Apply for a job with OHA</button></a>
              
            </div>
          </div>
        </div>
        <div class="skw-page__half skw-page__half--right">
          <div class="skw-page__skewed">
            <div class="skw-page__content"></div>
          </div>
        </div>
      </div>
      <div class="skw-page skw-page-3">
        <div class="skw-page__half skw-page__half--left">
          <div class="skw-page__skewed">
            <div class="skw-page__content"></div>
          </div>
        </div>
        <div class="skw-page__half skw-page__half--right">
          <div class="skw-page__skewed">
            <div class="skw-page__content">
              <h2 class="skw-page__heading alignRight">OHA’s Ka Wailele Emergency Financial Assistance Program</h2>
              <p class="skw-page__description">Starting June 1, 2021, the OHA is making $1,044,253 available to implement an emergency financial assistance program for Native Hawaiians.</p>
              <p class="skw-page__description">Ka Wailele will provide grants up to $1,500 for past due rent, mortgage, utilities and rent deposits to households that can prove Native Hawaiian ancestry, Hawaiʻi residency, financial hardship, and need for housing and/or utility assistance.</p>
              <a href="https://www.oha.org/emergencyaid" class="skw-page__description" style={{alignItems: "left"}}> <button class="ui inverted orange basic button">Emergency Assistance</button></a>

            </div>
          </div>
        </div>
      </div>
      <div class="skw-page skw-page-4">

        <div class="skw-page__half skw-page__half--left">
          <div class="skw-page__skewed">
            <div class="skw-page__content">
              
              <h2 class="skw-page__heading firstTitle">Links / Services</h2>
              
                <Card.Group itemsPerRow={2}>
                               
                <Card fluid class="centeredCard">
                  <Image src='https://19of32x2yl33s8o4xza0gf14-wpengine.netdna-ssl.com/wp-content/uploads/Hula-Lei-Feature.jpg' wrapped ui={false} />
                  <Card.Content>
                  <a href="https://www.oha.org/bot/"> 
                  Board Meetings
                  </a>
                  </Card.Content>
                </Card>  

                <Card fluid class="centeredCard">
                  <Image src='https://19of32x2yl33s8o4xza0gf14-wpengine.netdna-ssl.com/wp-content/uploads/Emergency-Aid-Feature.jpg' wrapped ui={false} />
                  <Card.Content>
                  <a href="https://www.oha.org/emergencyaid"> 
                  Emergency Aid
                  </a>
                  </Card.Content>
                </Card>  

                <Card fluid class="centeredCard">
                  <Image src='https://19of32x2yl33s8o4xza0gf14-wpengine.netdna-ssl.com/wp-content/uploads/OHA-Housing-Award-Feature.jpg' wrapped ui={false} />
                  <Card.Content>
                  <a href="https://www.oha.org/housing/"> 
                  Housing
                  </a>
                  </Card.Content>
                </Card>  

                <Card fluid class="centeredCard">
                  <Image src='https://19of32x2yl33s8o4xza0gf14-wpengine.netdna-ssl.com/wp-content/uploads/OHA-Loans-Feature.jpg' wrapped ui={false} />
                  <Card.Content>
                  <a href="https://loans.oha.org/"> 
                  Loans
                  </a>
                  </Card.Content>
                </Card>  



              </Card.Group>

            </div>
          </div>
        </div>

        <div class="skw-page__half skw-page__half--right">
          <div class="skw-page__skewed">
            <div class="skw-page__content">
            <Card.Group itemsPerRow={2}>
        
                <Card fluid class="centeredCard">
                  <Image src='https://19of32x2yl33s8o4xza0gf14-wpengine.netdna-ssl.com/wp-content/uploads/OHA-Grants-Feature.jpg' wrapped ui={false} />
                  <Card.Content>
                  <a href="https://www.oha.org/grants"> 
                  Grants
                  </a>
                  </Card.Content>
                </Card>  

                <Card fluid class="centeredCard">
                  <Image src='https://19of32x2yl33s8o4xza0gf14-wpengine.netdna-ssl.com/wp-content/uploads/thumbnail_HawaiianRegistry-thumbnail.jpg' wrapped ui={false} />
                  <Card.Content>
                  <a href="https://www.oha.org/registry"> 
                  Hawaiian Registry
                  </a>
                  </Card.Content>
                </Card>

                <Card fluid class="centeredCard">
                  <Image src='https://19of32x2yl33s8o4xza0gf14-wpengine.netdna-ssl.com/wp-content/uploads/OHA-Scholarships-Feature.jpg' wrapped ui={false} />
                  <Card.Content>
                  <a href="https://loans.oha.org/"> 
                  Scholarships
                  </a>
                  </Card.Content>
                </Card>

                <Card fluid class="centeredCard">
                  <Image src='https://19of32x2yl33s8o4xza0gf14-wpengine.netdna-ssl.com/wp-content/uploads/OHA-Employment-Feature.jpg' wrapped ui={false} />
                  <Card.Content>
                  <a href="https://www.oha.org/jobs"> 
                  Work for OHA
                  </a>
                  </Card.Content>
                </Card>


              </Card.Group>
            </div>
          </div>
        </div>


      </div>
    </div>*/}
      </div>

    )
  }
}

export default Landing;
