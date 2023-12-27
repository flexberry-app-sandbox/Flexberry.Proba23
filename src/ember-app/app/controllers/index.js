import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.proba2.caption'),
          title: i18n.t('forms.application.sitemap.proba2.title'),
          children: [{
            link: 'i-i-s-proba2-вакант-должн-l',
            caption: i18n.t('forms.application.sitemap.proba2.i-i-s-proba2-вакант-должн-l.caption'),
            title: i18n.t('forms.application.sitemap.proba2.i-i-s-proba2-вакант-должн-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-proba2-организация-l',
            caption: i18n.t('forms.application.sitemap.proba2.i-i-s-proba2-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.proba2.i-i-s-proba2-организация-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-proba2-планир-собес-l',
            caption: i18n.t('forms.application.sitemap.proba2.i-i-s-proba2-планир-собес-l.caption'),
            title: i18n.t('forms.application.sitemap.proba2.i-i-s-proba2-планир-собес-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-proba2-регист-анкеты-l',
            caption: i18n.t('forms.application.sitemap.proba2.i-i-s-proba2-регист-анкеты-l.caption'),
            title: i18n.t('forms.application.sitemap.proba2.i-i-s-proba2-регист-анкеты-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-proba2-граф-собес-l',
            caption: i18n.t('forms.application.sitemap.proba2.i-i-s-proba2-граф-собес-l.caption'),
            title: i18n.t('forms.application.sitemap.proba2.i-i-s-proba2-граф-собес-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-proba2-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.proba2.i-i-s-proba2-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.proba2.i-i-s-proba2-сотрудники-l.title'),
            children: null
          }, {
            link: 'i-i-s-proba2-рег-результ-l',
            caption: i18n.t('forms.application.sitemap.proba2.i-i-s-proba2-рег-результ-l.caption'),
            title: i18n.t('forms.application.sitemap.proba2.i-i-s-proba2-рег-результ-l.title'),
            icon: 'suitcase',
            children: null
          }]
        }
      ]
    };
  }),
})