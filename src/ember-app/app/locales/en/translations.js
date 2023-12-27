import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISProba2ВакантДолжнLForm from './forms/i-i-s-proba2-вакант-должн-l';
import IISProba2ГрафСобесLForm from './forms/i-i-s-proba2-граф-собес-l';
import IISProba2ОрганизацияLForm from './forms/i-i-s-proba2-организация-l';
import IISProba2ПланирСобесLForm from './forms/i-i-s-proba2-планир-собес-l';
import IISProba2РегРезультLForm from './forms/i-i-s-proba2-рег-результ-l';
import IISProba2РегистАнкетыLForm from './forms/i-i-s-proba2-регист-анкеты-l';
import IISProba2СотрудLForm from './forms/i-i-s-proba2-сотруд-l';
import IISProba2СотрудникиLForm from './forms/i-i-s-proba2-сотрудники-l';
import IISProba2ВакантДолжнEForm from './forms/i-i-s-proba2-вакант-должн-e';
import IISProba2ГрафСобесEForm from './forms/i-i-s-proba2-граф-собес-e';
import IISProba2ОрганизацияEForm from './forms/i-i-s-proba2-организация-e';
import IISProba2ПланирСобесEForm from './forms/i-i-s-proba2-планир-собес-e';
import IISProba2РегРезультEForm from './forms/i-i-s-proba2-рег-результ-e';
import IISProba2РегистАнкетыEForm from './forms/i-i-s-proba2-регист-анкеты-e';
import IISProba2СотрудEForm from './forms/i-i-s-proba2-сотруд-e';
import IISProba2СотрудникиEForm from './forms/i-i-s-proba2-сотрудники-e';
import IISProba2ВакантДолжнModel from './models/i-i-s-proba2-вакант-должн';
import IISProba2ГрафСобесModel from './models/i-i-s-proba2-граф-собес';
import IISProba2ОрганизацияModel from './models/i-i-s-proba2-организация';
import IISProba2ПланирСобесModel from './models/i-i-s-proba2-планир-собес';
import IISProba2РегРезультModel from './models/i-i-s-proba2-рег-результ';
import IISProba2РегистАнкетыModel from './models/i-i-s-proba2-регист-анкеты';
import IISProba2СотрудModel from './models/i-i-s-proba2-сотруд';
import IISProba2СотрудникиModel from './models/i-i-s-proba2-сотрудники';
import IISProba2ТЧГрафСобесModel from './models/i-i-s-proba2-т-ч-граф-собес';
import IISProba2ТЧРегРезультModel from './models/i-i-s-proba2-т-ч-рег-результ';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-proba2-вакант-должн': IISProba2ВакантДолжнModel,
    'i-i-s-proba2-граф-собес': IISProba2ГрафСобесModel,
    'i-i-s-proba2-организация': IISProba2ОрганизацияModel,
    'i-i-s-proba2-планир-собес': IISProba2ПланирСобесModel,
    'i-i-s-proba2-рег-результ': IISProba2РегРезультModel,
    'i-i-s-proba2-регист-анкеты': IISProba2РегистАнкетыModel,
    'i-i-s-proba2-сотруд': IISProba2СотрудModel,
    'i-i-s-proba2-сотрудники': IISProba2СотрудникиModel,
    'i-i-s-proba2-т-ч-граф-собес': IISProba2ТЧГрафСобесModel,
    'i-i-s-proba2-т-ч-рег-результ': IISProba2ТЧРегРезультModel
  },

  'application-name': 'Proba2',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Proba2',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proba2',
          title: 'Proba2'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        proba2: {
          caption: 'Proba2',
          title: 'Proba2',
          'i-i-s-proba2-вакант-должн-l': {
            caption: 'Вакант должн',
            title: ''
          },
          'i-i-s-proba2-организация-l': {
            caption: 'Организация',
            title: ''
          },
          'i-i-s-proba2-планир-собес-l': {
            caption: 'Планир собес',
            title: ''
          },
          'i-i-s-proba2-регист-анкеты-l': {
            caption: 'Регист анкеты',
            title: ''
          },
          'i-i-s-proba2-граф-собес-l': {
            caption: 'Граф собес',
            title: ''
          },
          'i-i-s-proba2-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-proba2-рег-результ-l': {
            caption: 'Рег результ',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-proba2-вакант-должн-l': IISProba2ВакантДолжнLForm,
    'i-i-s-proba2-граф-собес-l': IISProba2ГрафСобесLForm,
    'i-i-s-proba2-организация-l': IISProba2ОрганизацияLForm,
    'i-i-s-proba2-планир-собес-l': IISProba2ПланирСобесLForm,
    'i-i-s-proba2-рег-результ-l': IISProba2РегРезультLForm,
    'i-i-s-proba2-регист-анкеты-l': IISProba2РегистАнкетыLForm,
    'i-i-s-proba2-сотруд-l': IISProba2СотрудLForm,
    'i-i-s-proba2-сотрудники-l': IISProba2СотрудникиLForm,
    'i-i-s-proba2-вакант-должн-e': IISProba2ВакантДолжнEForm,
    'i-i-s-proba2-граф-собес-e': IISProba2ГрафСобесEForm,
    'i-i-s-proba2-организация-e': IISProba2ОрганизацияEForm,
    'i-i-s-proba2-планир-собес-e': IISProba2ПланирСобесEForm,
    'i-i-s-proba2-рег-результ-e': IISProba2РегРезультEForm,
    'i-i-s-proba2-регист-анкеты-e': IISProba2РегистАнкетыEForm,
    'i-i-s-proba2-сотруд-e': IISProba2СотрудEForm,
    'i-i-s-proba2-сотрудники-e': IISProba2СотрудникиEForm
  },

});

export default translations;
