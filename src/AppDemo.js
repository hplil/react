import { Component } from "react";
import logo from './logo.svg'
import './App.css';
import Welcome from './component/Welcome.js';
import { useState } from "react";
import { NavLink, useRoutes, Route, Routes } from "react-router-dom";
import routes from "./routes";
import Home from './views/Home';
import { store } from './redux/store'
console.log(store.getState())

class AppDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: 'click',
      items: [
        { path: '/home', title: '首页' },
        { path: '/friend', title: '好友' },
        { path: '/setting', title: '设置' }
      ],
      test: store.getState().test
    }
    this.content = 'hover'
    this.ElementRouter = routes;
    // this.initState = store.getState()
    this.hangdleEvn = this.hangdleEvn.bind(this);
  }
  hangdleEvn() {
    console.log('childevn');
    store.dispatch({
      type: 'NEW_TEST',
      payload: '2'
    });
    // this.setState({});
  }
  componentDidMount() {
    store.subscribe(() => {
      this.setState({test: store.getState().test})
    })
  }
  render() {
    // const ElementRouter = useRoutes(routes);
    // const [items] = useState([
    //   { path: '/home', title: '首页' },
    //   { path: '/friend', title: '好友' },
    //   { path: '/setting', title: '设置' }
    // ])
    return (
      <div className="App">
        <div className="App-header">
          <div>{this.state.test}</div>
          {/* <img src = {logo} className="App-logo" alt="logo" /> */}
          <h2>欢迎来到react Demo</h2>
          {this.state.items.map(item => (
            <NavLink to={item.path} key={item.path}>
              {item.title}
            </NavLink>
          ))}
          <div>
            <Routes>
              {this.ElementRouter.map(item => (
                <Route path={item.path} element={item.element} key={item.path}></Route>
              ))}
              {/* <Route path='/home' element={Home} key='home'></Route> */}
            </Routes>

          </div>
        </div>
        {/* <p className="App-intro">
          你可以在 <code>src/App.js</code> 文件中修改。
        </p>
        <Welcome btncontent={this.state.text} />
        <Welcome btncontent={this.content} />*/}
        <Welcome childevent={this.hangdleEvn} />
      </div>

    )
  }
}
export default AppDemo