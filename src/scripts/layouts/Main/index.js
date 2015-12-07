import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updatePath } from 'redux-simple-router';

import 'styles/toolbox/main';
import style from 'styles/main';

import ToolboxApp from 'react-toolbox/lib/app';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'components/Navigation';

import Meta from './Meta';

const { func } = PropTypes;

const items = [
  { path: '/', label: 'Home', icon: 'home' },
  { path: '/examples', label: 'Examples', icon: 'extension' },
  { path: '/about', label: 'About', icon: 'whatshot' }
];

@connect(
  s => ({ currentPath: s.routing.path }),
  d => ({ go: bindActionCreators(updatePath, d) })
)
export default class Main extends Component {
  static propTypes = {
    go: func.isRequired
  }

  render() {
    const { go, currentPath, children } = this.props;

    return (
      <div className={style.main}>
        <Meta
          og={{ title: 'starter' }}
          twitter={{ site: '@yorkin', creator: '@yorkin' }}
        />
        <AppBar top>
          <Navigation
            type='horizontal'
            {...{ go, currentPath, items } }
          />
        </AppBar>
        <section className={style.page}>
          {children}
        </section>
      </div>
    );
  }
}
