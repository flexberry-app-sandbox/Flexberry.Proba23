import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  итогСобесед: DS.attr('i-i-s-proba2-итог-собесед'),
  крКомИлиОбсРеш: DS.attr('string'),
  оценкаКандид: DS.attr('number'),
  сотрудники: DS.belongsTo('i-i-s-proba2-сотрудники', { inverse: null, async: false }),
  регРезульт: DS.belongsTo('i-i-s-proba2-рег-результ', { inverse: 'тЧРегРезульт', async: false })
});

export let ValidationRules = {
  итогСобесед: {
    descriptionKey: 'models.i-i-s-proba2-т-ч-рег-результ.validations.итогСобесед.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  крКомИлиОбсРеш: {
    descriptionKey: 'models.i-i-s-proba2-т-ч-рег-результ.validations.крКомИлиОбсРеш.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  оценкаКандид: {
    descriptionKey: 'models.i-i-s-proba2-т-ч-рег-результ.validations.оценкаКандид.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-proba2-т-ч-рег-результ.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  регРезульт: {
    descriptionKey: 'models.i-i-s-proba2-т-ч-рег-результ.validations.регРезульт.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧРегРезультE', 'i-i-s-proba2-т-ч-рег-результ', {
    сотрудники: belongsTo('i-i-s-proba2-сотрудники', 'Сотрудники', {
      фИОСотр: attr('Ф и о сотр', { index: 1, hidden: true }),
      должность: attr('Должность', { index: 2 })
    }, { index: 0, displayMemberPath: 'фИОСотр' }),
    итогСобесед: attr('Итог собесед', { index: 3 }),
    оценкаКандид: attr('Оценка кандид', { index: 4 }),
    крКомИлиОбсРеш: attr('Кр ком или обс реш', { index: 5 })
  });
};
