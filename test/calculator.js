const expect = require('chai').expect;
const calculator = require('../app/calculator');

describe('Add()', function() {
	it('5 + 2 should return 7 and PASS', function() {
		expect(calculator.add(5, 2)).to.equal(7);
	});
	it('5 + 2 should not return 8 and FAIL', function() {
		expect(calculator.add(5, 2)).to.equal(8);
	});
});

describe('Sub()', function() {
	it('5 - 2 should return 3 and PASS', function() {
		expect(calculator.sub(5, 2)).to.equal(3);
	});
	it('5 - 2 should not return 5 and FAIL', function() {
		expect(calculator.sub(5, 2)).to.equal(5);
	});
});

describe('Mul()', function() {
	it('5 * 2 should return 10 and PASS', function() {
		expect(calculator.mul(5, 2)).to.equal(10);
	});
	it('5 * 2 should not return 12 and FAIL', function() {
		expect(calculator.mul(5, 2)).to.equal(12);
	});
});

describe('Div()', function() {
	it('10 / 2 should return 5 and PASS', function() {
		expect(calculator.div(10, 2)).to.equal(5);
	});
	it('10 / 2 should not return 2 and FAIL', function() {
		expect(calculator.div(10, 2)).to.equal(2);
	});
});
