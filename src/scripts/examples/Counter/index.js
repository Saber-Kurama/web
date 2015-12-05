import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Counter from './components/Counter';
import { inc, dec } from 'modules/examples/counter';

const Example = (props) => {
  const { counter, dispatch } = props;

  const actions = bindActionCreators({ inc, dec }, dispatch);

  return (
    <Counter
      counter={counter.present}
      {...actions}
    />
  );
};

export default connect(s => ({ counter: s.counter }))(Example);
