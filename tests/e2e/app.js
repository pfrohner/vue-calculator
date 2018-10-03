import { Selector } from 'testcafe'

fixture `App`.page `http://localhost:8080`

test('Addition', async t => {
  await t
    .pressKey('2')
    .pressKey('+')
    .pressKey('3')
    .pressKey('Enter')
    .expect(Selector('#display').value).eql('5')
})

test('Subtraction', async t => {
  await t
    .pressKey('3')
    .pressKey('-')
    .pressKey('2')
    .pressKey('Enter')
    .expect(Selector('#display').value).eql('1')
})

test('Multiplication', async t => {
  await t
    .pressKey('2')
    .pressKey('*')
    .pressKey('3')
    .pressKey('Enter')
    .expect(Selector('#display').value).eql('6')
})

test('Division', async t => {
  await t
    .pressKey('3')
    .pressKey('/')
    .pressKey('2')
    .pressKey('Enter')
    .expect(Selector('#display').value).eql('1.5')
})

test('Exponentiation', async t => {
  await t
    .pressKey('2')
    .pressKey('^')
    .pressKey('3')
    .pressKey('Enter')
    .expect(Selector('#display').value).eql('8')
})
