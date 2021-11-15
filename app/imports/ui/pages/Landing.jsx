import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';

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
              <h2 class="skw-page__heading firstTitle">Put your skills to work for the lāhui</h2>
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
              <h2 class="skw-page__heading">Page 3</h2>
              <p class="skw-page__description">The end is near, I promise!</p>
            </div>
          </div>
        </div>
      </div>
      <div class="skw-page skw-page-4">
        <div class="skw-page__half skw-page__half--left">
          <div class="skw-page__skewed">
            <div class="skw-page__content">
              <h2 class="skw-page__heading">Page 4</h2>
              <p class="skw-page__description">Ok, ok, just one more scroll!</p>
            </div>
          </div>
        </div>
        <div class="skw-page__half skw-page__half--right">
          <div class="skw-page__skewed">
            <div class="skw-page__content"></div>
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
