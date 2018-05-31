import React from 'react';
import PropTypes from 'prop-types';

// redux
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { initStore, initialCards, addItem } from '../store';
import withRedux from 'next-redux-wrapper';

// css
import './index.css';

// components
import Card from './Card';

class Index extends React.Component {

  static async getInitialProps ({ store }) {
    store.dispatch(initialCards());
  }

  static propTypes = {
    cards: PropTypes.array.isRequired,
  }
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img 
            src="/static/logo.png" 
            className="static-logo"
            alt="logo"
          />
        </header>
        <div className="Grid">
          { this.props.cards.map((card) => (
            <Card key={card.id}/>
          ))}
        </div>
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => (
  {
    initialCards: bindActionCreators(initialCards, dispatch),
    addItem: bindActionCreators(addItem, dispatch),
  }
)

const mapStateToProps = (state) => ({
  cards: state.cards
})

export default connect(mapStateToProps, mapDispatchToProps)(Index);
