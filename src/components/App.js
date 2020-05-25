import React from 'react';
import List from './List';
import { connect } from "react-redux";
import { findByLabelText } from '@testing-library/react';

const App = ({lists}) => {
  
  return (
    <div>
      Hello react!
      <div style={styles.listContainer}>
        {lists.map(list => <List title={list.title} cards={list.cards}/>)}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  lists: state.lists
})


const styles = {
  listContainer: {
    display: "flex"
  }
}

export default connect(mapStateToProps)(App);