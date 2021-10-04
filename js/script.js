'use strict';

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Question =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Question, _React$Component);

  function Question(props) {
    _classCallCheck(this, Question);

    return _possibleConstructorReturn(this, _getPrototypeOf(Question).call(this, props));
  }

  _createClass(Question, [{
    key: "render",
    value: function render() {
      var _this = this;

      var qid = this.props.qid;
      var q = testData[qid];
      var options = q.options.map(function (data, i) {
        return React.createElement("li", {
          key: qid + '-' + i,
          onClick: _this.props.handler
        }, React.createElement("input", {
          type: "radio",
          name: 'question-' + qid,
          id: 'option-' + qid + '-' + i
        }), React.createElement("label", {
          htmlFor: 'option-' + qid + '-' + i,
          className: "display-linebreak"
        }, q.options[i].content));
      });
      return React.createElement("div", {
        className: "question"
      }, React.createElement("div", {
        className: "question-left"
      }, React.createElement("figure", {
        "data-initial": qid + 1
      })), React.createElement("div", {
        className: "question-content"
      }, React.createElement("p", {
        id: "question-description"
      }, React.createElement("span", {
        className: "question-num"
      }, qid + 1, "/", testData.length, " - "), q.description), React.createElement("ul", null, options)));
    }
  }]);

  return Question;
}(React.Component);

var TestResult =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(TestResult, _React$Component2);

  function TestResult(props) {
    _classCallCheck(this, TestResult);

    return _possibleConstructorReturn(this, _getPrototypeOf(TestResult).call(this, props));
  }

  _createClass(TestResult, [{
    key: "render",
    value: function render() {
      var r = resultData[this.props.rid];
      return React.createElement("div", null, React.createElement("h3", null, "\u6E2C\u9A57\u7D50\u679C\uFF1A", r.title), React.createElement("h4", null, r.subtitle), React.createElement("p", {
        className: "result-content"
      }, r.content), React.createElement("img", {
        src: 'img/' + r.imgsrc
      }), React.createElement("div", {
        className: "btn-wrapper"
      }, React.createElement("button", {
        onClick: this.props.handler
      }, "\u91CD\u65B0\u6E2C\u9A57")));
    }
  }]);

  return TestResult;
}(React.Component);

var TestContent =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(TestContent, _React$Component3);

  function TestContent(props) {
    var _this2;

    _classCallCheck(this, TestContent);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(TestContent).call(this, props));
    _this2.state = {
      currentQID: 0,
      score: [0, 0, 0, 0, 0]
    };
    _this2.qHandler = _this2.qHandler.bind(_assertThisInitialized(_this2));
    _this2.rHandler = _this2.rHandler.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(TestContent, [{
    key: "qHandler",
    value: function qHandler(e) {
      var qid = e.target.getAttribute('for').split('-')[1];
      var oid = e.target.getAttribute('for').split('-')[2];
      var s = testData[qid].options[oid].score;
      if (qid + 1 == testData.length) $('html, body').animate({
        scrollTop: $('#test-content').offset().top - 20
      }, 200);else $('html, body').animate({
        scrollTop: $('#test-content').offset().top - 10
      }, 200);

      if (_typeof(s) == 'object') {
        for (var i = 0; i < s.length; i++) {
          this.updateScore(s[i]);
        }
      } else {
        this.updateScore(s);
      }

      this.setState({
        currentQID: ++this.state.currentQID
      });
    }
  }, {
    key: "rHandler",
    value: function rHandler() {
      window.scrollTo(0, document.getElementById('test-content').getBoundingClientRect().top + window.scrollY - 10);
      this.setState({
        currentQID: 0,
        score: [0, 0, 0, 0, 0]
      });
    }
  }, {
    key: "updateScore",
    value: function updateScore(s) {
      var newScore = _toConsumableArray(this.state.score);

      var i = s[0].charCodeAt(0) - 'A'.charCodeAt(0);
      newScore[i] += Number(s[1]);
      this.setState({
        score: newScore
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.currentQID == testData.length) {
        var max = 0,
            maxIndex = -1;

        for (var i = 0; i < this.state.score.length; i++) {
          if (this.state.score[i] > max) {
            max = this.state.score[i];
            maxIndex = i;
          }
        }

        console.log(this.state);
        return React.createElement(TestResult, {
          rid: maxIndex,
          handler: this.rHandler
        });
      }

      return React.createElement(Question, {
        qid: this.state.currentQID,
        handler: this.qHandler
      });
    }
  }]);

  return TestContent;
}(React.Component);

var rootDOM = document.getElementById('test-content');
ReactDOM.render(React.createElement(TestContent, null), rootDOM);