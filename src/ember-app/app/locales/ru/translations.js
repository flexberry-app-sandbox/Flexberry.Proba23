import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Proba2',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proba2',
          title: 'Proba2'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
