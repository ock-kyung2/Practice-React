import './App.css';
import { Component } from 'react';
import TOC from './components/TOC'
import Content from './components/Content'
import Subject from './components/Subject'

class App extends Component {

  constructor(props){
    // 컴포넌트가 실행될때 render보다 먼저 실행되서 초기화당담  코드  안에 작성한다.
    super(props);
    this.state = {
      subject:{title:'WEB', sub:'world wide web!'}
    }
  }

  render(){  return (
    <div className="App">
      <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
      <TOC></TOC>
      <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
    </div>
  );
}
}

export default App;
