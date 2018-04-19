import { connect } from 'react-redux';
import { compose, withStateHandlers } from 'recompose';

import Form from './Form.component';
import { addTodo } from './Form.actions';

const initialState = { value: '' };

const mapDispatchToProps = dispatch => ({
  onSubmit: text => {
    if (text.trim()) {
      dispatch(addTodo(text));
    }
  }
});

export default compose(
  connect(undefined, mapDispatchToProps),
  withStateHandlers(
    initialState,
    {
      onInput: () => e => {
        return { value: e.target.value }
      },
      submit: ({ value }, { onSubmit }) => () => {
        onSubmit(value);
        return initialState;
      }
    }
  )
)(Form);
