import React, { Component } from 'react';
import {formatBytes} from '../numberFormatting'
import {fileStatusUpdate} from '../actions'

export default class SBItemFile extends Component {
  constructor(props) {
    super(props);
    this.handleFileStatusChange = this.handleFileStatusChange.bind(this);
  }

  handleFileStatusChange(json) {

  }

  handleMoveFile(fileurl) {
    console.log(fileurl)
    this.props.stomper.send('/app/pull-link', {}, JSON.stringify({'link': fileurl}));
  }

  render () {
    const sbfile = this.props.sbfile
    const fs = formatBytes(sbfile.size)
    return (<section className='files'>
        <a href={sbfile.url} className='filelink'>{sbfile.name}</a>
        <span className='filesize'>{fs}</span>
        <span data-fileurl={sbfile.name} className='movefile'>
          <button onClick={()=>{this.handleMoveFile(sbfile.url)}}>
        <img src='s3moveitem.svg'/></button></span>
      </section>)
  }
}
