const test = require('tape')
const rankings = require('.')

test('rankings', function (t) {
  t.ok(rankings.length > 800, 'are an array of many')
  t.ok(rankings.every(r => r.char.length > 0), 'always have `char` property')
  t.ok(rankings.every(r => r.id.length > 0), 'always have `id` property')
  t.ok(rankings.every(r => r.name.length > 0), 'always have `name` property')
  t.ok(rankings.every(r => r.score > 0), 'always have a numeric `score` property')
  t.end()
})
