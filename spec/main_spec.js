"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");


describe("input postcode,get zipcode", function(){
    sinon.spy(console, 'log');

    it("输入5位邮政编码，输出条形码", function(){

        var result = main('95713');
        var expect_string = '||:|:::|:|:|:::|:::||::||:::||:|';
        
        expect(result).to.equal(expect_string);
    });

    it("输入10位邮政编码，输出条形码", function(){

        var result = main('55555-1237');
        var expect_string = '|:|:|::|:|::|:|::|:|::|:|::::||::|:|::||:|:::||:::||';
        
        expect(result).to.equal(expect_string);
    });
    
    it("输入9位邮政编码，输出条形码", function(){

        var result = main('555551237');
        var expect_string = '|:|:|::|:|::|:|::|:|::|:|::::||::|:|::||:|:::||:::||';
        
        expect(result).to.equal(expect_string);
    });   
});

describe("input zipcode,get postcode", function(){

    it("输入5位条形码，输出邮政编码", function(){

        var result =main('||:|:::|:|:|:::|:::||::||::|:|:|');
        var expect_string = '95713';

        expect(result).to.equal(expect_string);
    });

    it("输入10位条形码，输出邮政编码", function(){

        var result =main('|:|:|::|:|::|:|::|:|::|:|::::||::|:|::||:|:::||:::||');
        var expect_string = '55555-1237';

        expect(result).to.equal(expect_string);
    });
});