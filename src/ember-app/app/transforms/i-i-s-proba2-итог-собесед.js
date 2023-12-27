import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ИтогСобеседEnum from '../enums/i-i-s-proba2-итог-собесед';

export default FlexberryEnum.extend({
  enum: ИтогСобеседEnum,
  sourceType: 'IIS.Proba2.ИтогСобесед'
});
