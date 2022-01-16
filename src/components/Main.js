import React, { useEffect, useState } from "react";
import "./Main.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Main = ({ selectedPunk, punkListData }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);
    // console.log(Active)
  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);

  return (
    <div className="main">
      <div className="main-content">
        <div className="punk-highlight">
          <div className="punk-container">
            <img
              className="selected-punk"
              src={activePunk.image_url}
              alt="bandana punk"
            />
          </div>
        </div>

        <div className="punk-details">
          <div className="title">
            {activePunk.name}{" "}
            <span className="item-number">#{activePunk.token_id}</span>
          </div>

          <div className="owner">
            <div className="owner-image-container">
              <img src={activePunk.owner.profile_img_url} alt="owner" />
            </div>
            <div className="owner-details">
              <div className="owner-name-and-handle">
                <div>{activePunk.owner.address}</div>
                <div className="owner-handle">
                  @syedaliirtaza
                </div>
              </div>
              <div className="owner-link">
              <a style={{textDecoration: "none"}} href="https://www.linkedin.com/in/syed-ali-irtaza-71102b143/">
                <LinkedInIcon fontSize="large"/>
                </a>
              </div>
              <div className="owner-link">
              <a style={{textDecoration: "none"}} href="https://github.com/syedaliirtaza">
                <GitHubIcon fontSize="large" />
                </a>
              </div>
              <div className="owner-link">
                <MoreHorizIcon fontSize="large"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;