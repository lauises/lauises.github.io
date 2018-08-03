import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Button, Card, CardTitle, Icon} from 'react-materialize';
import data from '../data-sample/cards.json';

const propTypes = {
  phase: PropTypes.string,
  objective: PropTypes.string,
  index: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  video: PropTypes.string,
  tagline: PropTypes.string,
  description: PropTypes.string,
  details: PropTypes.string,
  link: PropTypes.string,
  linktext: PropTypes.string,
  bucket: PropTypes.string,
  stp1: PropTypes.string,
  stp2: PropTypes.string,
  stp3: PropTypes.string,
}

class ClassCard extends Component {
  render() {
    const { phase, objective, index, title, image, video, tagline, description, details1, details2, details3, details4, details5, link, linktext, bucket, stp1, stp2, stp3 } = this.props;
    const listClass = 'card';
    const style = { zIndex: 100 - this.props.index};

    return (
      <Card
        header={<CardTitle reveal image={image} waves="light"/>}
        index={index}
        title={title}
        className={phase}
        phase={phase}
        objective={objective}
        reveal={
          <div>
            {video ? <iframe width='280' height='157' src={video} frameborder='0'></iframe> : ''}
            {details1 ? <p>{details1}</p> : ''}
            {details2 ? <p>{details2}</p> : ''}
            {details3 ? <p>{details3}</p> : ''}
            {details4 ? <p>{details4}</p> : ''}
            {details5 ? <p>{details5}</p> : ''}
            {stp1 ? <p>STP Links</p> : ''}
            {stp1 ? <a className="waves-effect waves-light btn-small teal lighten-3" target="_blank" href={stp1}>Link 1</a> : ''}
            {stp2 ? <a className="waves-effect waves-light btn-small teal lighten-3" target="_blank" href={stp2}>Link 2</a> : ''}
            {stp3 ? <a className="waves-effect waves-light btn-small teal lighten-3" target="_blank" href={stp3}>Link 3</a> : ''}
            {link ? <p><a className="waves-effect waves-light btn" target="_blank" href={link}>{linktext}</a></p> : ''}
          </div>
        }>

        {tagline ? <p>{tagline}</p> : ''}
        {description ? <p>{description}</p> : ''}
        <br />

        {link ? <p><a className="waves-effect waves-light btn" target="_blank" href={link}>{linktext}</a></p> : ''}
      </Card>
    );
  }
}

ClassCard.PropTypes = propTypes;

export default ClassCard;
