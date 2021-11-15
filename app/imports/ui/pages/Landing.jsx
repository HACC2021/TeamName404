import React from 'react';
import { Container, Grid, Image, Card, Icon, Button } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
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
      <div class="skw-page skw-page-5">

        <div class="skw-page__half skw-page__half--left">
          <div class="skw-page__skewed">
            <div class="skw-page__content"></div>
          </div>
        </div>
        <div class="skw-page__half skw-page__half--right">
          <div class="skw-page__skewed">
            <div class="skw-page__content">
              <h2 class="skw-page__heading">Epic finale</h2>
              <p class="skw-page__description">
                Feel free to check 
                <a class="skw-page__link" href="https://codepen.io/suez/pens/public/" target="_blank">my other pens</a> and follow me on 
                <a class="skw-page__link" href="https://twitter.com/NikolayTalanov" target="_blank">Twitter</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    )
  }
}

export default Landing;
