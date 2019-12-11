//text("Do you think "+adjective +" "+ user + " would ever " + state + " when "+ method+"?")

let data;
let col1 = [];
let col2 = [];
let col3 = [];
let col4 = [];
var word1;
var word2;
var word3;
var s;

function preload() {
  data = loadTable('assets/conceptgen.csv', 'csv' , 'header');
}

function setup() {

  for (var i = 0; i < data.getRowCount(); i++) {
    if(data.getString(i, 0) != "") {
      col1[i] = data.getString(i, 0); //adjective
    }

    if(data.getString(i, 1) != "") {
      col2[i] = data.getString(i, 1); //state
    }

    if(data.getString(i, 2) != "") {
      col3[i] = data.getString(i, 2);//user
    }

    if(data.getString(i, 3) != "") {
      col4[i] = data.getString(i, 3);//method
    }
  }
  word1 = random(col1) + " " + random(col3);
  word2 = random(col4);
  word3 = random(col2);
}

function draw() {
  s = second();
}

var _PART_INDEX_X = 0;
var _PART_INDEX_Y = 0;
var _PART_INDEX = 0;
var _PARTX = 0;
var _PARTY = 0;
var _PART = 0;
var _INTERVAL_VAL_X;
var _INTERVAL_VAL_Y;
var _INTERVAL_VAL;


function Type1() {

  var text1 =  word1.substring(0, _PART_INDEX_X + 1);
  document.getElementsByClassName('x1')[0].innerHTML = text1;
  _PART_INDEX_X++;

  if(s%18==1) {
    clearInterval(_INTERVAL_VAL_X);
    setTimeout(function() {
      _INTERVAL_VAL_X = setInterval(Delete1, 50);
    }, 1000);
  }
}

function Delete1() {
  var text1 =  word1.substring(0, _PART_INDEX_X - 1);
  document.getElementsByClassName('x1')[0].innerHTML = text1;
  _PART_INDEX_X--;

  if(text1 === '') {
    word1 = random(col1)+" "+random(col3);

    clearInterval(_INTERVAL_VAL_X);

    if(_PARTX == (word1.length - 1))
    _PARTX = 0;
    else
    _PARTX++;

    _PART_INDEX_X = 0;

    setTimeout(function() {
      _INTERVAL_VAL_X = setInterval(Type1, 100);
    }, 200);
  }
}

/*----------------------------------------------------------------------------------------------------------------------------------*/

function Type2() {
  var text2 =  word2.substring(0, _PART_INDEX + 1);
  document.getElementsByClassName('y1')[0].innerHTML = text2;
  _PART_INDEX++;

  if(s%18 == 1) {
    clearInterval(_INTERVAL_VAL);
    setTimeout(function() {
      _INTERVAL_VAL= setInterval(Delete2, 50);
    }, 1000);
  }
}

function Delete2() {
  var text2 =  word2.substring(0, _PART_INDEX - 1);
  document.getElementsByClassName('y1')[0].innerHTML = text2;
  _PART_INDEX--;

  if(text2 === '') {
    word2 = random(col4);

    clearInterval(_INTERVAL_VAL);

    if(_PART == (word2.length - 1))
    _PART = 0;
    else
    _PART++;

    _PART_INDEX = 0;

    setTimeout(function() {
      _INTERVAL_VAL= setInterval(Type2, 100);
    }, 200);
  }
}

/*----------------------------------------------------------------------------------------------------------------------------------*/

function Type3() {
    var text3 =  word3.substring(0, _PART_INDEX_Y + 1);
  document.getElementsByClassName('z1')[0].innerHTML = text3;
  _PART_INDEX_Y++;

  if(s%18 == 1) {
    clearInterval(_INTERVAL_VAL_Y);
    setTimeout(function() {
      _INTERVAL_VAL_Y= setInterval(Delete3, 50);
    }, 1000);
  }
}

function Delete3() {
  var text3 =  word3.substring(0, _PART_INDEX_Y - 1);
  document.getElementsByClassName('z1')[0].innerHTML = text3;
  _PART_INDEX_Y--;

  if(text3 === '') {
    word3 = random(col2);

    clearInterval(_INTERVAL_VAL_Y);

    if(_PARTY == (word3.length - 1))
    _PARTY = 0;
    else
    _PARTY++;

    _PART_INDEX_Y = 0;

    setTimeout(function() {
      _INTERVAL_VAL_Y= setInterval(Type3, 100);
    }, 200);
  }
}
_INTERVAL_VAL_X = setInterval(Type1, 100);
_INTERVAL_VAL_Y = setInterval(Type3, 100);
_INTERVAL_VAL= setInterval(Type2, 100);
