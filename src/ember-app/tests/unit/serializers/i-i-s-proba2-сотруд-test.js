import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proba2-сотруд', 'Unit | Serializer | i-i-s-proba2-сотруд', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-proba2-сотруд',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-proba2-итог-собесед',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
