import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датРегРезСобес: DS.attr('date'),
  кандидОтклон: DS.attr('boolean'),
  приглНаРаб: DS.attr('boolean'),
  организация: DS.belongsTo('i-i-s-proba2-организация', { inverse: null, async: false }),
  планирСобес: DS.belongsTo('i-i-s-proba2-планир-собес', { inverse: null, async: false }),
  тЧРегРезульт: DS.hasMany('i-i-s-proba2-т-ч-рег-результ', { inverse: 'регРезульт', async: false })
});

export let ValidationRules = {
  датРегРезСобес: {
    descriptionKey: 'models.i-i-s-proba2-рег-результ.validations.датРегРезСобес.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  кандидОтклон: {
    descriptionKey: 'models.i-i-s-proba2-рег-результ.validations.кандидОтклон.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  приглНаРаб: {
    descriptionKey: 'models.i-i-s-proba2-рег-результ.validations.приглНаРаб.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-proba2-рег-результ.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  планирСобес: {
    descriptionKey: 'models.i-i-s-proba2-рег-результ.validations.планирСобес.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧРегРезульт: {
    descriptionKey: 'models.i-i-s-proba2-рег-результ.validations.тЧРегРезульт.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РегРезультE', 'i-i-s-proba2-рег-результ', {
    датРегРезСобес: attr('Дат рег рез собес', { index: 0 }),
    приглНаРаб: attr('Пригл на раб', { index: 1 }),
    кандидОтклон: attr('Кандид отклон', { index: 2 }),
    организация: belongsTo('i-i-s-proba2-организация', 'Организация', {
      наименование: attr('Наименование', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'наименование' }),
    планирСобес: belongsTo('i-i-s-proba2-планир-собес', 'Иметь при себе', {
      иметьПриСебе: attr('Иметь при себе', { index: 6, hidden: true }),
      регистАнкеты: belongsTo('i-i-s-proba2-регист-анкеты', '', {
        фИОКандид: attr('ФИО', { index: 7 }),
        вакантДолжн: belongsTo('i-i-s-proba2-вакант-должн', '', {
          должность: attr('Вакантная должность', { index: 8 })
        }, { index: -1, hidden: true })
      }, { index: -1, hidden: true })
    }, { index: 5, displayMemberPath: 'иметьПриСебе' }),
    тЧРегРезульт: hasMany('i-i-s-proba2-т-ч-рег-результ', 'Т ч рег результ', {
      сотрудники: belongsTo('i-i-s-proba2-сотрудники', 'Сотрудники', {
        фИОСотр: attr('Ф и о сотр', { index: 1, hidden: true }),
        должность: attr('Должность', { index: 2 })
      }, { index: 0, displayMemberPath: 'фИОСотр' }),
      итогСобесед: attr('Итог собесед', { index: 3 }),
      оценкаКандид: attr('Оценка кандид', { index: 4 }),
      крКомИлиОбсРеш: attr('Кр ком или обс реш', { index: 5 })
    })
  });

  modelClass.defineProjection('РегРезультL', 'i-i-s-proba2-рег-результ', {
    датРегРезСобес: attr('Дат рег рез собес', { index: 0 }),
    приглНаРаб: attr('Пригл на раб', { index: 1 }),
    кандидОтклон: attr('Кандид отклон', { index: 2 }),
    организация: belongsTo('i-i-s-proba2-организация', 'Наименование', {
      наименование: attr('Наименование', { index: 3 })
    }, { index: -1, hidden: true }),
    планирСобес: belongsTo('i-i-s-proba2-планир-собес', 'ФИО', {
      регистАнкеты: belongsTo('i-i-s-proba2-регист-анкеты', '', {
        фИОКандид: attr('ФИО', { index: 4 }),
        вакантДолжн: belongsTo('i-i-s-proba2-вакант-должн', '', {
          должность: attr('Вакантная должность', { index: 5 })
        }, { index: -1, hidden: true })
      }, { index: -1, hidden: true }),
      иметьПриСебе: attr('Иметь при себе', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
