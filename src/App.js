import React from 'react'
import './App.css'
import axios from './axios'

export default class App extends React.Component{
  state = {}

  constructor(props) {
    super(props)
    this.state = {
      QnA:[
        {A:['สวัสดีครับ']}
      ],
      question: '',
      wait: false,
      f_questions:[]
    }
    axios.get('/get').then(res =>{
      this.setState({f_questions: res.data.questions})
    }).catch(err => console.log(err))
  }

  onChange = e =>{
    const{name,value} = e.target
    this.setState({
      [name]: value
    })
  }

  onKeyPress = e =>{
    if(e.key === 'Enter' && e.target.value){
      let QnA = this.state.QnA
      QnA.reverse()
      QnA.push({Q:this.state.question})
      QnA.reverse()
      this.setState({QnA:QnA})
      e.target.value = ''
      this.ans()
    }
  }

  onClick = e =>{
    this.setState({question:e.target.innerHTML})
    let QnA = this.state.QnA
    QnA.reverse()
    QnA.push({Q:e.target.innerHTML})
    QnA.reverse()
    this.setState({QnA: QnA})
    this.ans(e)
  }

  async ans(e){
    await axios.post('/',e ? {Q:e.target.innerHTML} : {Q:this.state.question}).then(res =>{
      let QnA = this.state.QnA
      let A = []
      QnA.reverse()
      if(res.data.A1)
        A.push(res.data.A1)
      if(res.data.A2)
        A.push(res.data.A2)
      if(res.data.A3)
        A.push(res.data.A3)
      if(res.data.A4)
        A.push(res.data.A4)
      if(res.data.A5)
        A.push(res.data.A5)
      if(res.data.A6)
        A.push(res.data.A6)
      QnA.push({A:A})
      QnA.reverse()
      this.setState({QnA: QnA})
      axios.post('/save',{Q:this.state.question, A:A, tag:res.data.tag}).catch(err=>console.log(err))
    }).catch(err => console.log(err))
    this.setState({wait:false})
  }

  render(){
    return (
    <div className="page-content" id="page-content"> 
    <br></br>
      <div className="padding" >
          <div className="row  d-flex justify-content-center">
            <div className="row col-md-11">
              <div className="col-md-4">
                <div className="card card-bordered">
                  <div className="card-header">
                      <h4 className="card-title"><strong>คำถามที่พบบ่อย</strong></h4>
                  </div>
                  <div className="ps-container ps-theme-default ps-active-y" id="chat-content" >
                    <div className="publisher bt-1 border-light"> 
                      <div className="media media-chat" onClick={this.onClick}>
                        <div className="media-body">
                            <p id='0'>{this.state.f_questions[0]}</p>
                        </div>
                      </div>
                    </div>
                    <div className="publisher bt-1 border-light"> 
                      <div className="media media-chat" onClick={this.onClick}>
                        <div className="media-body">
                            <p id='1'>{this.state.f_questions[1]}</p>
                        </div>
                      </div>
                    </div>
                    <div className="publisher bt-1 border-light"> 
                      <div className="media media-chat" onClick={this.onClick}>
                        <div className="media-body">
                            <p id='2'>{this.state.f_questions[2]}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                  <div className="card card-bordered">
                      <div className="card-header">
                          <h4 className="card-title"><strong>CPE bot</strong></h4>
                      </div>
                      <div className="ps-container ps-theme-default ps-active-y chat-box" id="chat-content" >
                        {this.state.QnA.map(element =>{
                          if(element.Q){
                            return(
                              <div className="media media-chat media-chat-reverse">
                                <div className="media-body">
                                    <p>{element.Q}</p>
                                </div>
                              </div>
                            )
                          }
                          else{
                              return(
                                <div className="media media-chat">
                                  <img src=".\img\BOT.png" width="45px" height="45px"/>
                                  <div className="media-body">
                                    {/* {this.state.wait ? <p>กำลังพิมพ์</p>:<div></div>} */}
                                    {element.A.map(ans =>{
                                      if(typeof(ans) == "object") 
                                        return(<p><a href={ans.value} target="_blank">{ans.key}</a></p>) 
                                      else return(<p>{ans}</p>)})}
                                  </div>
                                </div>
                              )}
                        })}
                      <div className="ps-scrollbar-x-rail" style={{"left": "0px", "bottom": "0px"}}>
                          <div className="ps-scrollbar-x" tabIndex="0" style={{"left": "0px" ,"width": "0px"}}></div>
                      </div>
                      <div className="ps-scrollbar-y-rail" style={{"top": "0px" ,"height": "0px", "right": "2px"}}>
                          <div className="ps-scrollbar-y" tabIndex="0" style={{"top": "0px", "height": "2px"}}></div>
                      </div>
                      </div>
                      <div className="publisher bt-1 border-light"> 
                        <img src=".\img\HUMAN.png" width="45px" height="45px"/>
                        <input id='question' name='question' className="publisher-input" type="text" maxLength="80" placeholder="เขียนคำถาม" onChange={this.onChange} onKeyPress={this.onKeyPress}/> 
                        <span className="publisher-btn file-group"> 
                        <i className="fa fa-paperclip file-browser"></i> 
                        <input type="file"/> 
                        </span> 
                        <a className="publisher-btn" href="#" data-abc="true">
                          <i className="fa fa-smile"></i>
                        </a> 
                        <a className="publisher-btn text-info" href="#" data-abc="true">
                          <i className="fa fa-paper-plane"></i>
                        </a>
                      </div>
                  </div>
              </div>
            </div>
          </div>
      </div>
      <ul>
      <li><a className="active">CPE</a></li>
    </ul>
  </div>
    );
  }
}