import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  планирСобес: DS.belongsTo('i-i-s-proba2-планир-собес', { inverse: null, async: false }),
  графСобес: DS.belongsTo('i-i-s-proba2-граф-собес', { inverse: 'тЧГрафСобес', async: false })
});

export let ValidationRules = {
  планирСобес: {
    descriptionKey: 'models.i-i-s-proba2-т-ч-граф-собес.validations.планирСобес.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  графСобес: {
    descriptionKey: 'models.i-i-s-proba2-т-ч-граф-собес.validations.графСобес.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧГрафСобесE', 'i-i-s-proba2-т-ч-граф-собес', {
    планирСобес: belongsTo('i-i-s-proba2-планир-собес', 'Планир собес', {
      датаПланСобес: attr('Дата план собес', { index: 1 }),
      время: attr('Время', { index: 2 }),
      иметьПриСебе: attr('Иметь при себе', { index: 3, hidden: true }),
      регистАнкеты: belongsTo('i-i-s-proba2-регист-анкеты', '', {
        фИОКандид: attr('ФИО', { index: 4 }),
        вакантДолжн: belongsTo('i-i-s-proba2-вакант-должн', '', {
          должность: attr('Вакантная должность', { index: 5 })
        }, { index: -1, hidden: true })
      }, { index: -1, hidden: true })
    }, { index: 0, displayMemberPath: 'иметьПриСебе' })
  });
};
