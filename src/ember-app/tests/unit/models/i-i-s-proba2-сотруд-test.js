import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proba2-сотруд', 'Unit | Model | i-i-s-proba2-сотруд', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-proba2-вакант-должн',
    'model:i-i-s-proba2-граф-собес',
    'model:i-i-s-proba2-организация',
    'model:i-i-s-proba2-планир-собес',
    'model:i-i-s-proba2-рег-результ',
    'model:i-i-s-proba2-регист-анкеты',
    'model:i-i-s-proba2-сотруд',
    'model:i-i-s-proba2-сотрудники',
    'model:i-i-s-proba2-т-ч-граф-собес',
    'model:i-i-s-proba2-т-ч-рег-результ',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
