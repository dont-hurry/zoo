'use strict';


class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let qid = this.props.qid;
    let q = testData[qid];
    let options = q.options.map((data, i) => (
      <li key={qid+'-'+i} onClick={this.props.handler}>
        <input type="radio" name={'question-'+qid} id={'option-'+qid+'-'+i} />
        <label htmlFor={'option-'+qid+'-'+i} className="display-linebreak">{q.options[i].content}</label>
      </li>
    ));

    return (
      <div className="question">
        <div className="question-left">
          <figure data-initial={qid+1}></figure>
        </div>
        <div className="question-content">
          <p id="question-description">
            <span className="question-num">{qid+1}/{testData.length} - </span>
            {q.description}
          </p>
          <ul>
            {options}
          </ul>
        </div>
      </div>
    );
  }
}


class TestResult extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let r = resultData[this.props.rid];
    return (
      <div>
        <h3>測驗結果：{r.title}</h3>
        <h4>{r.subtitle}</h4>
        <p className="result-content">{r.content}</p>
        <img src={'img/'+r.imgsrc} />
        <div className="btn-wrapper">
          <button onClick={this.props.handler}>重新測驗</button>
        </div>
      </div>
    );
  }
}


class TestContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQID: 0,
      score: [0,0,0,0,0]
    };
    this.qHandler = this.qHandler.bind(this);
    this.rHandler = this.rHandler.bind(this);
  }

  qHandler(e) {
    let qid = e.target.getAttribute('for').split('-')[1];
    let oid = e.target.getAttribute('for').split('-')[2];
    let s = testData[qid].options[oid].score;

    if(qid + 1 == testData.length)
      $('html, body').animate({
        scrollTop: ($('#test-content').offset().top - 20)
      }, 200);
    else
      $('html, body').animate({
        scrollTop: ($('#test-content').offset().top - 10)
      }, 200);

    if(typeof(s) == 'object') {
      for(let i = 0; i < s.length; i++)
        this.updateScore(s[i]);
    } else {
      this.updateScore(s);
    }

    this.setState({ currentQID: ++this.state.currentQID });
  }

  rHandler() {
    window.scrollTo(0, document.getElementById('test-content').getBoundingClientRect().top + window.scrollY - 10);
    this.setState({
      currentQID: 0,
      score: [0,0,0,0,0]
    });
  }

  updateScore(s) {
    let newScore = [...this.state.score];
    let i = s[0].charCodeAt(0) -'A'.charCodeAt(0);
    newScore[i] += Number(s[1]);
    this.setState({ score: newScore });
  }

  render() {
    if(this.state.currentQID == testData.length) {
      let max = 0, maxIndex = -1;
      for(let i = 0; i < this.state.score.length; i++)
        if(this.state.score[i] > max) {
          max = this.state.score[i];
          maxIndex = i;
        }
      console.log(this.state);
      return <TestResult rid={maxIndex} handler={this.rHandler} />;
    }
    return <Question qid={this.state.currentQID} handler={this.qHandler} />;
  }
}


const rootDOM = document.getElementById('test-content');
ReactDOM.render(<TestContent />, rootDOM);
