import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  время: DS.attr('string'),
  датаПланСобес: DS.attr('date'),
  иметьПриСебе: DS.attr('string'),
  организация: DS.belongsTo('i-i-s-proba2-организация', { inverse: null, async: false }),
  регистАнкеты: DS.belongsTo('i-i-s-proba2-регист-анкеты', { inverse: null, async: false })
});

export let ValidationRules = {
  время: {
    descriptionKey: 'models.i-i-s-proba2-планир-собес.validations.время.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  датаПланСобес: {
    descriptionKey: 'models.i-i-s-proba2-планир-собес.validations.датаПланСобес.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  иметьПриСебе: {
    descriptionKey: 'models.i-i-s-proba2-планир-собес.validations.иметьПриСебе.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-proba2-планир-собес.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  регистАнкеты: {
    descriptionKey: 'models.i-i-s-proba2-планир-собес.validations.регистАнкеты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПланирСобесE', 'i-i-s-proba2-планир-собес', {
    датаПланСобес: attr('Дата план собес', { index: 0 }),
    иметьПриСебе: attr('Иметь при себе', { index: 1 }),
    время: attr('Время', { index: 2 }),
    регистАнкеты: belongsTo('i-i-s-proba2-регист-анкеты', 'ФИО', {
      фИОКандид: attr('Ф и о кандид', { index: 4, hidden: true }),
      вакантДолжн: belongsTo('i-i-s-proba2-вакант-должн', '', {
        должность: attr('Вакантная должность', { index: 7 })
      }, { index: -1, hidden: true })
    }, { index: 3, displayMemberPath: 'фИОКандид' }),
    организация: belongsTo('i-i-s-proba2-организация', 'Организация', {
      наименование: attr('Наименование', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('ПланирСобесL', 'i-i-s-proba2-планир-собес', {
    датаПланСобес: attr('Дата план собес', { index: 0 }),
    иметьПриСебе: attr('Иметь при себе', { index: 1 }),
    время: attr('Время', { index: 2 }),
    регистАнкеты: belongsTo('i-i-s-proba2-регист-анкеты', 'ФИО', {
      фИОКандид: attr('ФИО', { index: 3 }),
      вакантДолжн: belongsTo('i-i-s-proba2-вакант-должн', '', {
        должность: attr('Вакантная должность', { index: 4 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true }),
    организация: belongsTo('i-i-s-proba2-организация', 'Наименование', {
      наименование: attr('Наименование', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
