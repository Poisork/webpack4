import Post from '@models/Post'
import json from './assets/json'
import './styles/styles.css'
import Spinner from '@/assets/Spinner.gif'
import React from 'react'
import {render} from 'react-dom'
import xml from './assets/data.xml'
import * as $ from 'jquery'
import './styles/index.less'
import './styles/index.scss'
import './babel'

const post = new Post('Webpack hello!', Spinner)

$('pre').addClass('code').html(post.toString())

const App = () => (
    <div className="container">
        <h1>Hello Webpack</h1>
        <hr/>
        <div className="spinner"/>
        <hr/>
        <pre/>
        <div className="box">
            <h2>Less</h2>
        </div>

        <div className="card">
            <h2>Scss</h2>
        </div>
    </div>
)

render(
<App/>
,document.getElementById('app'))

// console.log('JSON', json)
//
// console.log(xml)
