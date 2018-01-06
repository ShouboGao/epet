import Mock from 'mockjs';
import axios from 'axios';
import home from './datahome.json';
import surprise from './datasurprise.json';
import sort from './datasort.json';

Mock.mock('/home', {data: home});
Mock.mock('/surprise', {data: surprise});
Mock.mock('/sort', {data: sort});
axios.get('/sort')
  .then(function (res) {
    console.log(res.data.data);
  })

