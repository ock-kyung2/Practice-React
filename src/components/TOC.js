import React, { Component } from 'react';

class TOC extends Component{
  render(){
    return(
    <nav>
      <ul>
        <li><a href="1.html">HTML</a></li>
        <li><a href="2.html">CSS</a></li>
        <li><a href="3.html">JavaScript</a></li>
      </ul>
    </nav>
    );
  }
}


export default TOC;
// 많은 변수 중에서 외부에서 어떤 변수를 사용하게 해줄 건지 정의.