import React, { Component } from 'react';

class TOC extends Component{
  render(){
    var lists = [];
    var data = this.props.data;
    var i = 0;
    while(i< data.length){
      lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>);
      // 이처럼 자동으로 tag를 생성하는 경우엔 key 라는 props를 가져야한다[오류]. => React에서 필요로 하는 속성이므로 넣어준다.
      i= i+1;
    }
    return(
    <nav>
      <ul>
        {lists}
      </ul>
    </nav>
    );
  }
}


export default TOC;
// 많은 변수 중에서 외부에서 어떤 변수를 사용하게 해줄 건지 정의.