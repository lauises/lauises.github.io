import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Button, Card, CardTitle, Icon} from 'react-materialize';
import _ from 'lodash';

import * as query from '../components/getData';
import ClassCard from '../components/ClassCard';
import SortButton from '../components/buttons/sort.jsx';
import PhaseButton from '../components/buttons/phaseSort.jsx';
import PhaseSelect from '../components/buttons/phaseSelect.jsx';

const propTypes = {
  order: PropTypes.string,
  sortClickHandler: PropTypes.func,
  bucketSelected: PropTypes.string,
};

class CardSection extends Component {
  constructor(props) {
    super(props);


    this.state = {
      cards: [],
      order: 'asc',
      phaseorder: 'pre',
      show: 'All',
      bucket: '',
    };

    this.toggleSort  = this.toggleSort.bind(this);
    this.phaseSort  = this.phaseSort.bind(this);
    this.phaseSelect  = this.phaseSelect.bind(this);
    this.bucketSelect  = this.bucketSelect.bind(this);
  }

  toggleSort() {
    const sortAsc  = function(a, b){
      if(a.title < b.title) return -1;
      if(b.title < a.title) return 1;
      return 0;
    };
    const sortDesc = function(a, b){
      if(a.title < b.title) return 1;
      if(b.title < a.title) return -1;
      return 0;
    };

    this.setState({
      bucket: "",
      order: (this.state.order === 'asc' ? 'desc' : 'asc'),
      cards: this.state.cards.sort(this.state.order === 'asc' ? sortDesc : sortAsc),
    });
  }


  phaseSort() {
    const sortAsc  = function(a, b){
      if(a.phase < b.phase) return -1;
      if(b.phase < a.phase) return 1;
      return 0;
    };
    const sortDesc = function(a, b){
      if(a.phase < b.phase) return 1;
      if(b.phase < a.phase) return -1;
      return 0;
    };

    this.setState({
      bucket: "",
      phaseorder: (this.state.phaseorder === 'pre' ? 'post' : 'pre'),
      cards: this.state.cards.sort(this.state.phaseorder === 'pre' ? sortDesc : sortAsc),
    });
  }

  phaseSelect(e) {
    if (this.state.show === e.target.textContent) return;

    this.setState({
      bucket: "",
      show: e.target.textContent,
    });
  }
  bucketSelect(e) {
    this.state.bucket = e;
    this.setState({
      show: e,
    })
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    // const prod = 'megaman-robot-masters.herokuapp.com';
    // const local = 'localhost:8080';
    // const url = 'http://localhost:8080/data-sample/cards.json';
    const url = 'https://raw.githubusercontent.com/lauises/lauises.github.io/master/cards.json';

    this.serverRequest = query.getData(url, (cardData) => {
      this.setState({ cards: cardData });
    });
  }

  renderCards() {
    const { cards } = this.state;
    return cards.map((card, i) => {
      if (this.state.bucket !== "") {
        var checkBucket = card.bucket.includes(this.state.bucket);
        if (checkBucket) {
          return (
            <ClassCard
              id={i}
              index={card.id}
              title={card.title}
              image={card.image}
              video={card.video}
              tagline={card.tagline}
              description={card.description}
              details1={card.details1}
              details2={card.details2}
              details3={card.details3}
              details4={card.details4}
              details5={card.details5}
              link={card.link}
              linktext={card.linktext}
              phase={card.phase}
              objective={card.objective}
              tooltip={card.tooltip}
              bucket={card.bucket}
              stp1={card.stp1}
              stp2={card.stp2}
              stp3={card.stp3}
            />
          );
        }
      }
      if (this.state.show == "All") {
        return (
          <ClassCard
            id={i}
            index={card.id}
            title={card.title}
            image={card.image}
            video={card.video}
            tagline={card.tagline}
            description={card.description}
            details1={card.details1}
            details2={card.details2}
            details3={card.details3}
            details4={card.details4}
            details5={card.details5}
            link={card.link}
            linktext={card.linktext}
            phase={card.phase}
            objective={card.objective}
            tooltip={card.tooltip}
            bucket={card.bucket}
            stp1={card.stp1}
            stp2={card.stp2}
            stp3={card.stp3}
          />
        );
      }
      if (this.state.show == card.phase) {
        return (
          <ClassCard
            id={i}
            index={card.id}
            title={card.title}
            image={card.image}
            video={card.video}
            tagline={card.tagline}
            description={card.description}
            details1={card.details1}
            details2={card.details2}
            details3={card.details3}
            details4={card.details4}
            details5={card.details5}
            link={card.link}
            linktext={card.linktext}
            phase={card.phase}
            objective={card.objective}
            tooltip={card.tooltip}
            bucket={card.bucket}
            stp1={card.stp1}
            stp2={card.stp2}
            stp3={card.stp3}
          />
        );
      }
      if (this.state.show == card.objective) {
        return (
          <ClassCard
            id={i}
            index={card.id}
            title={card.title}
            image={card.image}
            video={card.video}
            tagline={card.tagline}
            description={card.description}
            details1={card.details1}
            details2={card.details2}
            details3={card.details3}
            details4={card.details4}
            details5={card.details5}
            link={card.link}
            linktext={card.linktext}
            phase={card.phase}
            objective={card.objective}
            tooltip={card.tooltip}
            bucket={card.bucket}
            stp1={card.stp1}
            stp2={card.stp2}
            stp3={card.stp3}
          />
        );
      }
      else {
        return;
      }
    });
  }

  render() {
    const { order, phaseorder } = this.state;
    const { bucketSelected } = this.props;
    return (
        <div className="content">
          {/* <SortButton
            clickHandler = {this.toggleSort}
            order = {order}
          />
          <PhaseButton
            clickHandler = {this.phaseSort}
            phaseorder = {phaseorder}
          /> */}
          <p>Filter by Phases</p>
          <PhaseSelect
            text = {"All"}
            clickHandler = {this.phaseSelect}
          />
          <PhaseSelect
            text = {"Pre-Class"}
            clickHandler = {this.phaseSelect}
          />
          <PhaseSelect
            text = {"Set-Up"}
            clickHandler = {this.phaseSelect}
          />
          <PhaseSelect
            text = {"Introduction"}
            clickHandler = {this.phaseSelect}
          />
          <PhaseSelect
            text = {"Activity"}
            clickHandler = {this.phaseSelect}
          />
          <PhaseSelect
            text = {"Closure"}
            clickHandler = {this.phaseSelect}
          />
          {/* <PhaseSelect
            text = {"Post-Class"}
            clickHandler = {this.phaseSelect}
          /> */}
          <PhaseSelect
            text = {"Throughout"}
            clickHandler = {this.phaseSelect}
          />
          <p>Filter by Objectives</p>
          <PhaseSelect
            text = {"ICT Effectiveness"}
            clickHandler = {this.phaseSelect}
          />
          <PhaseSelect
            text = {"Classroom Management"}
            clickHandler = {this.phaseSelect}
          />
          <PhaseSelect
            text = {"Mobility in Class"}
            clickHandler = {this.phaseSelect}
          />
          <PhaseSelect
            text = {"Collaboration"}
            clickHandler = {this.phaseSelect}
          />
          <PhaseSelect
            text = {"Real World Learning"}
            clickHandler = {this.phaseSelect}
          />
          <PhaseSelect
            text = {"Class Engagement"}
            clickHandler = {this.phaseSelect}
          />
          <PhaseSelect
            text = {"Creativity"}
            clickHandler = {this.phaseSelect}
          />
          <PhaseSelect
            text = {"Archiving"}
            clickHandler = {this.phaseSelect}
          />
          <div className="card-section">
            {this.renderCards()}
          </div>
        </div>
    );
  }
}
export default CardSection;
