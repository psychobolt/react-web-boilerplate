import { connect } from 'react-redux';

import TodoList from './TodoList.component';
import { getVisibleTodos } from './TodoList.selectors';

const mapStateToProps = (state, props) => ({ items: getVisibleTodos(state, props) });

export default connect(mapStateToProps)(TodoList);
