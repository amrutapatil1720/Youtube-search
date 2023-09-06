import React, { useState, useEffect } from 'react';
import { Col } from "react-bootstrap";
import InputBoxComponent from "../baseComponents/inputBox"
import ButtonComponent from "../baseComponents/ButtonComponent"
import VideoListView from "../baseComponents/VideoListView"
import "../../Style/Videocomponent.css"
const apiKey = process.env.REACT_APP_MY_KEY;


const VideonComponent = () => {
  const [searchValue, setSearchValue] = useState("React js");
  const [list, setList] = useState([]);
  const listLenth = 10;

  const BtnClick = () => {
    searchVideo(searchValue);
  }

  const onChange = (e) => {
    setSearchValue(e.target.value);
  }

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      BtnClick();
    }
  }

  const searchVideo = (searchValue) => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${listLenth}&q=${searchValue}&key=${apiKey}`, true);
    xhr.onload = function(e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          var response = JSON.parse(xhr.response);
          setList(response.items);
        } else {
          console.error(xhr.statusText);
        }
      }
    }.bind(this);
    xhr.onerror = function(e) {
      console.error(xhr.statusText);
    }
    xhr.send(null);
  }

  useEffect(() => {
    searchVideo(searchValue);
  }, []);

  return (
    <div className="container VideoListContainer">
      <Col lg={12} sm={12} md={12} xs={12} className="VideoSearchBox">
        <Col lg={6} sm={6} md={6} xs={6} className="">
          <InputBoxComponent
            autofocus
            name="search"
            type="text"
            placeholder="Search"
            onChange={onChange}
            defaultValue={searchValue}
            onKeyPress={onKeyPress}
          />
        </Col>
        <Col lg={6} sm={6} md={6} xs={6} className="">
          <ButtonComponent ButtonText="Search" BtnClick={BtnClick} />
        </Col>
      </Col>
      <VideoListView Videolist={list} />
    </div>
  );
}

export default VideonComponent;
