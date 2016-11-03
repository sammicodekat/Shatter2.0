import React, { Component } from 'react'
import HomePage from './HomePage/HomePage'
// import SomeStore from '../stores/SomeStore'

export default class Layout extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     someKey: SomeStore.getAllStuff()
  //   }
  //   this._onChange = this._onChange.bind(this)
  // }
  //
  //  componentWillMount() {
  //   SomeStore.startListening(this._onChange)
  // }
  //
  // componentWillUnmount() {
  //   SomeStore.stopListening(this._onChange)
  // }
  //
  // _onChange() {
  //   this.setState({
  //     someKey: SomeStore.getAllStuff()
  //   })
  // }

  render() {
    return (
      <div className="container">
        <h1 className="appTitle">Shatter</h1>
        <HomePage />
      </div>
    )
  }
}
