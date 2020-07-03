import { connect } from 'react-redux';

import Form from './Form.component';
import { addTodo } from './Form.actions';

const mapDispatchToProps = dispatch => ({
  onSubmit: text => {
    if (text.trim()) {
      dispatch(addTodo(text));
    }
  },
});

export default connect(undefined, mapDispatchToProps)(Form);
