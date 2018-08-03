import React, { Component } from 'react';
import {Button, Card, CardTitle, Icon} from 'react-materialize';

export class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      removedRobotMasters: [],
      robotMasters: [],
      view: 'list',
      order: 'asc',
      series: [2, 3, 4, 5],
      selectedSeries: '2',
      sortingMethod: 'chronological',
      enterLeaveAnimation: 'accordianHorizontal',
      inProgress: false,
    };

  }

  render() {
      return (
          <div className="content">
            <h3>Introduction</h3>
            <p>The FLEX Toolkit helps educators to plan their lessons, by considering things like pedagogy, equipment, etc.</p>
            <p>Start by selecting some of these steps to create your lesson recipe.</p>
            <div className="card-section">
            {
              data.map((card, i) => {
                return <Card
                    header={<CardTitle reveal image={card.image} waves="waves"/>}
                      index= {i}
                      title={card.title}
                      reveal={<div>{card.reveal.video ? <iframe width='280' height='157' src={card.reveal.video} frameborder='0'></iframe> : ''}<p>{card.reveal.para}</p><p>{card.content.link ? <p><a className="waves-effect waves-light btn" target="_blank" href={card.content.link}>{card.content.linktext}</a></p> : ''}</p></div>}>
                      <p>{card.content.para}</p>
                      <br />
                      {card.content.link ? <p><a className="waves-effect waves-light btn" target="_blank" href={card.content.link}>{card.content.linktext}</a></p> : ''}

                  </Card>;
              })
            }
            </div>
          </div>
      );
  }
}
export default Intro;
