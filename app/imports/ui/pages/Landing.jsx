import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div>
          <div id={'nav'}>
            <Container>
              <Image floated='left' src={'../images/nav1.jpg'}/>
            </Container>
        </div>
          <div id={'nav2'}>
            <Container>
              <Image fluid src={'../images/nav2.jpg'}/>
            </Container>
          </div>
          <div id={'menu'}>
            <Container>
              <Grid verticalAlign='middle' textAlign='center' container>
                <Grid.Row>
                  <Image src={'../images/menu.jpg'}/>
                </Grid.Row>
                <Grid.Row>
                  <Image src={'../images/2nd.jpg'}/>
                </Grid.Row>
                <Grid.Row>
                  <Image src={'../images/menu2.jpg'}/>
                </Grid.Row>
                <Grid.Row>
                  <Image src={'../images/menu3.jpg'}/>
                </Grid.Row>
              </Grid>
            </Container>
          </div>
        </div>

    );
  }
}

export default Landing;
