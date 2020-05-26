import React from 'react';
import List from './List';
import { connect } from "react-redux";
import AddElementButton from './AddElementButton';

const App = ({lists}) => {
  
  return (
    <div>
      Hello react!
      <div style={styles.listContainer}>
        {lists.map(list => <List key={list.id} title={list.title} cards={list.cards}/>)}
        <div style={styles.addContainer}>
          <AddElementButton element='list'/>
        </div>
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
  },
  addContainer: {
    backgroundColor: "#dfe3e6",
    borderRadius: 4,
    width: 280,
    height: '100%',
    padding: 10,
    marginRight: 8
  }
}

export default connect(mapStateToProps)(App);