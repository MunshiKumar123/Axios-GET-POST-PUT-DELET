import axios from 'axios';
import React from 'react'

function App() {




  let API = "http.ass";
  let data = "Manish"
  let token = localStorage.getItem("abs");

  // 1 first Way

  // data get

  axios.post(API).then((res) => {
  })
  // data post
  axios.post(API, data, {
    headers: {
      'x-access-token': token,
      'Content-Type': 'application/json'
    },
  }).then((res) => {

  })
  // data post
  axios.put(API, data, {
    headers: {
      'x-access-token': token,
      'Content-Type': 'application/json'
    },
  }).then((res) => {

  })

  // data delete
  axios.delete("APIwithID", {
    headers: {
      'x-access-token': token,
      'Content-Type': 'application/json'
    },
  }).then((res) => {

  })


  // 2nd Way

  // data post

  axios({
    method: 'post',
    url: API,
    data: data, // you are sending body instead 
    headers: {
      'x-access-token': token,
      'Content-Type': 'application/json',
    },
  }).then((res) => {

  })

  // data put

  axios({
    method: 'put',
    url: API,
    data: data, // you are sending body instead 
    headers: {
      'x-access-token': token,
      'Content-Type': 'application/json',
    },
  }).then((res) => {

  })

  //  data delete

  axios({
    method: 'delete',
    url: "API with ID",
    headers: {
      'x-access-token': token,
      'Content-Type': 'application/json',
    },
  }).then((res) => {

  })


  return (
    <div>
      <p>
        ========================================================================<br />

        ---------------------Axios Methods Get, Post, Put And Delet ---------------------<br />
      </p>

    </div>
  )
}

export default App

