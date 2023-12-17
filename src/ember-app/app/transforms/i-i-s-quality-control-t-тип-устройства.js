import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import tТипУстройстваEnum from '../enums/i-i-s-quality-control-t-тип-устройства';

export default FlexberryEnum.extend({
  enum: tТипУстройстваEnum,
  sourceType: 'IIS.QualityControl.tТипУстройства'
});
