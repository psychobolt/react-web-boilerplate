import { connect } from 'react-redux';

import Item from './Item.component';
import { toggleComplete } from './Item.actions';

const mapDispatchToProps = (dispatch, { id, completed }) => ({
  onToggle: () => dispatch(toggleComplete(id, !completed)),
});

export default connect(undefined, mapDispatchToProps)(Item);
