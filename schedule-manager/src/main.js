import React, { Component } from 'react'
import DatePickerView from './DatePicker'


class Main extends Component {

    constructor(props) {
        super();
        this.state = {
            scheduleAlert : '이거는 테스트 스케쥴이야~ 10/18',
        }
    }
    
    static defaultProps = {
        name : '나는 테스트 유저야~',
        newCount : 999
    }
    
    render() { 
        return (
            <>
                <div>
                    <h2>스케줄 관리 프로그램</h2>
                    <h3>{this.props.name}님! 새로운 소식이 {this.props.newCount}개 있습니다.</h3>
                </div>
                <label>
                    <textarea value = {this.state.scheduleAlert}></textarea>
                </label>
                <div>
                    <DatePickerView></DatePickerView>
                </div>
            </>
        );
    }
}

export default Main;