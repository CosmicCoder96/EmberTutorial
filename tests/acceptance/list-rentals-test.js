import { test } from 'qunit';
import moduleForAcceptance from 'tutorial/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list rentals');

test('should show rentals as the home page', function (assert) {
  visit('/');
    andThen(function() {
      assert.equal(currentURL(), '/rentals', 'should redirect automatically');
    })

});

test('should link to information about the company.', function (assert) {
  visit('/');
  click('a:contains("About")');
  andThen(function() {
    assert.equal(currentURL(),'/about','Should redirect to about page');
  });
});

test('should link to contact information.', function (assert) {
  visit('/');
  click('a:contains("Contact")');
  andThen(function() {
    assert.equal(currentURL(),'/contact','Should redirect to contact page');
  });
});

test('should list available rentals.', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(find('.listing').length,3,'There should be three listings');
  });
});

test('should filter the list of rentals by city.', function (assert) {
});

test('should show details for a selected rental', function (assert) {
});
