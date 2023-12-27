import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-proba2-вакант-должн-l');
  this.route('i-i-s-proba2-вакант-должн-e',
  { path: 'i-i-s-proba2-вакант-должн-e/:id' });
  this.route('i-i-s-proba2-вакант-должн-e.new',
  { path: 'i-i-s-proba2-вакант-должн-e/new' });
  this.route('i-i-s-proba2-граф-собес-l');
  this.route('i-i-s-proba2-граф-собес-e',
  { path: 'i-i-s-proba2-граф-собес-e/:id' });
  this.route('i-i-s-proba2-граф-собес-e.new',
  { path: 'i-i-s-proba2-граф-собес-e/new' });
  this.route('i-i-s-proba2-организация-l');
  this.route('i-i-s-proba2-организация-e',
  { path: 'i-i-s-proba2-организация-e/:id' });
  this.route('i-i-s-proba2-организация-e.new',
  { path: 'i-i-s-proba2-организация-e/new' });
  this.route('i-i-s-proba2-планир-собес-l');
  this.route('i-i-s-proba2-планир-собес-e',
  { path: 'i-i-s-proba2-планир-собес-e/:id' });
  this.route('i-i-s-proba2-планир-собес-e.new',
  { path: 'i-i-s-proba2-планир-собес-e/new' });
  this.route('i-i-s-proba2-рег-результ-l');
  this.route('i-i-s-proba2-рег-результ-e',
  { path: 'i-i-s-proba2-рег-результ-e/:id' });
  this.route('i-i-s-proba2-рег-результ-e.new',
  { path: 'i-i-s-proba2-рег-результ-e/new' });
  this.route('i-i-s-proba2-регист-анкеты-l');
  this.route('i-i-s-proba2-регист-анкеты-e',
  { path: 'i-i-s-proba2-регист-анкеты-e/:id' });
  this.route('i-i-s-proba2-регист-анкеты-e.new',
  { path: 'i-i-s-proba2-регист-анкеты-e/new' });
  this.route('i-i-s-proba2-сотруд-l');
  this.route('i-i-s-proba2-сотруд-e',
  { path: 'i-i-s-proba2-сотруд-e/:id' });
  this.route('i-i-s-proba2-сотруд-e.new',
  { path: 'i-i-s-proba2-сотруд-e/new' });
  this.route('i-i-s-proba2-сотрудники-l');
  this.route('i-i-s-proba2-сотрудники-e',
  { path: 'i-i-s-proba2-сотрудники-e/:id' });
  this.route('i-i-s-proba2-сотрудники-e.new',
  { path: 'i-i-s-proba2-сотрудники-e/new' });
});

export default Router;
