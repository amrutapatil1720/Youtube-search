import React,{useState, useEffect} from "react";
import Col from "react-bootstrap/Col";
import InputBox from "../baseComponents/InputBox";
import ButtonComponent from "../baseComponents/ButtonComponent"
import VideoListView from "../baseComponents/VideoListView"
import { useDispatch,useSelector } from "react-redux";
import searchVideo from "../../actions/searchAction";
import WithVideo from "../../hoc/withVideo";
import "../styles/VideoComponent.css"

const VideoComponent = () => {
    const [searchValue,setSearchValue] = useState("React");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(searchVideo());
    });
    const onChange = (event) => {
        setSearchValue(event.target.value)
    }
    const onKeyPress = (event) => {
        if (event.key === "Enter") {
          btnClick();
        }
    }
    const btnClick = () => {
      dispatch(searchVideo(searchValue));
    }

    const list = useSelector(state => state.searchResult.ListOfVideo)

    return(
        <div className="Container VideoListContainer">
            <Col lg={12} sm={12} md={12} xs={12} className="VideoSearchBox">
                    <Col lg={6} sm={6} md={6} xs={6} className="">
                        <InputBox autofocus name="search" type="text" placeholder="Search" onChange={onChange}
                            defaultValue={searchValue} onKeyPress={onKeyPress} />
                    </Col>
                    <Col lg={6} sm={6} md={6} xs={6} className="">
                        <ButtonComponent ButtonText="Search" btnClick={btnClick} />
                    </Col>
            </Col>
            <VideoListView Videolist={list} />
        </div>
    )
}

export default WithVideo(VideoComponent);