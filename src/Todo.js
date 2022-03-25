import React, { Component }  from 'react'

class Todo extends Component{
    // this가 가리키는 값 :   class인 Todo
    // 데이터 초기화
    constructor(props){
        super(props)      // 부모로부터 전달받는 데이터
        this.state = {      // state 선언
            name: "cleaning",
            done: false,
            description: "cleaning my room on weekends"
            }
        }
        // 이벤트헨들러 함수
        changeName= () => {
            this.setState({name: "learning react"})
        }
        render(){

        //비구조화 할당 (destructuring  assignment)
        const {name, done, description} = this.state
        // props 조회
        console.log(props)  
        // HTML 템플릿  => JSX 문법

        return(
            <>
                <h3>name: {name}</h3>
                <h4>done: {done?"finished":"ongoing" }</h4>
                <p>description: {description}</p>
                <button type='button' onClick={this.changeName}>이름변경하기</button>
            </>
        )
    }
}
export default Todo
