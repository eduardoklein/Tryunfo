import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  constructor() {
    super();
    this.handleHasTrunfo = this.handleHasTrunfo.bind(this);
  }

  handleHasTrunfo() {
    const { cardTrunfo } = this.props;
    if (cardTrunfo === true) {
      return <div data-testid="trunfo-card">Super Trunfo</div>;
    }
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.props;
    return (
      <div>
        <div name="cardName" data-testid="name-card">{ cardName }</div>
        <img
          name="cardImage"
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
        />
        <div
          name="cardDescription"
          data-testid="description-card"
        >
          { cardDescription }
        </div>
        <div name="cardAttr1" data-testid="attr1-card">{ cardAttr1 }</div>
        <div name="cardAttr2" data-testid="attr2-card">{ cardAttr2 }</div>
        <div name="cardAttr3" data-testid="attr3-card">{ cardAttr3 }</div>
        <div name="cardRare" data-testid="rare-card">{ cardRare }</div>
        { this.handleHasTrunfo() }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,

};

export default Card;
