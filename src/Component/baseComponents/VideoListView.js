import React from 'react';
import { Col } from "react-bootstrap";
import ButtonComponent from "./ButtonComponent"
import "../../Style/Videocomponent.css"

function VideoListView(props) {

  const BtnClick = (id) => {
    window.open("https://www.youtube.com/watch?v="+id.trim(), "_blank");
  }

  return (
    <div>
      {props.Videolist ? 
        props.Videolist.map((data, i) => (
          <div key={i}>{
            data.id.videoId ? (
              <Col lg={12} sm={12} md={12} xs={12} className="VideoListBorder">
                <Col lg={6} sm={6} md={6} xs={6} className="">
                  <img src={data.snippet.thumbnails ? data.snippet.thumbnails.high.url:""} height={data.snippet.thumbnails ? data.snippet.thumbnails.high.height:""} width={data.snippet.thumbnails ? data.snippet.thumbnails.high.width:""}/>
                </Col>
                <Col lg={6} sm={6} md={6} xs={6} className="">
                  <Col lg={12} sm={12} md={12} xs={12} className="">
                    <p className="ContentSpace fontsize">{data.snippet.title}</p>
                    <p className="ContentSpace">{data.snippet.description}</p>
                    <ButtonComponent ButtonText="View" href="" BtnClick={() => BtnClick(data.id.videoId)}/>
                    <p className="ContentSpace">{data.snippet.publishedAt+" by "+data.snippet.channelTitle}</p>
                  </Col>
                </Col>
              </Col>
            ):""
          }
          </div>
        ))
      : ""}
    </div>
  );
}

export default VideoListView;