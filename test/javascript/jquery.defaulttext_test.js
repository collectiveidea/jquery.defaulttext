module("defaulttext");

var input = $('input[type=text]').defaultText();

test("sets value to title", function() {
  equals(input.attr('title'), input.val());
});

test("adds the defaultText class", function() {
  ok(input.hasClass('defaultText'));
});

test("clears default text on focus", function() {
  input.focus();
  equals('', input.val());
  ok(!input.hasClass('defaultText'));
});

test("does not clear value if not default", function() {
  input.val('Hello World');
  input.focus();
  equals('Hello World', input.val());
});

test("sets default text after blur", function() {
  input.val('');
  input.blur();
  equals(input.attr('title'), input.val());
  ok(input.hasClass('defaultText'));
});

test("sets default text after blur with empty string", function() {
  input.val('  ');
  input.blur();
  equals(input.attr('title'), input.val());
  ok(input.hasClass('defaultText'));
});

test("submitting form clears default text", function() {
  input.val('');
  input.blur();
  input.closest('form').triggerHandler('submit');
  equals('', input.val());
});