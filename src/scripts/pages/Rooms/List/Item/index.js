import css from 'react-css-modules';

import Tooltip from 'react-toolbox/lib/tooltip';
import Button from 'react-toolbox/lib/button';
import {
  Card,
  CardMedia,
  CardTitle,
  CardText,
  CardActions
} from 'react-toolbox/lib/card';

import style from './style';

const TooltipButton = Tooltip(Button);
const { array, object, bool, func } = PropTypes;

export const Item = (props) => {
  return (
    <div styleName='root'>
      <Card styleName='card'>
        <CardTitle
          title='demo room'
          subtitle='this is your demo room ­ play with it'
        />
        <CardMedia
          aspectRatio='wide'
          image='https://placeimg.com/800/450/nature'
        />
        <CardActions>
          <TooltipButton floating accent mini icon='queue' tooltip='join' />
          <TooltipButton floating mini icon='play_circle_outline' tooltip='listen' />
          <TooltipButton floating primary mini icon='favorite' tooltip='add to favorites' />
          <TooltipButton floating mini icon='thumb_up' tooltip='thumb up' />
        </CardActions>
      </Card>
    </div>
  );
};

export default css(Item, style);
