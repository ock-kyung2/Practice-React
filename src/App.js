import './App.css';
import { Component } from 'react';
import TOC from './components/TOC'
import Content from './components/Content'
import Subject from './components/Subject'

class App extends Component {

  constructor(props){
    // 컴포넌트가 실행될때 render보다 먼저 실행되서 초기화시키고 싶은 코드는 constructor 내부에 작성한다.
    super(props);
    this.state = {
      subject:{title:'WEB', sub:'world wide web!'},
      // state가 여러개 일때는 먼저 []대괄호, 그 다음 {}중괄호로 나열해준다.
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }

  render(){  return (
    <div className="App">
      <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
      <TOC data={this.state.contents}></TOC>
      <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
    </div>
  );
}
}

export default App;
