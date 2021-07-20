import React from 'react';
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard"

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
                 <VideoCard 
                    title="Become a developer in 10 minutes"
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channelImage="https://yt3.ggpht.com/WlKEDGqrayhFwp-Dt_5LBjvHhXIGaBaAs4bRWM6X4UeB0UbVg5D3vFUQxw5aKx5YjqtqnFto74M=s68-c-k-c0x00ffffff-no-rj"
                    channel="MKBHD"
                    image="https://i.ytimg.com/an_webp/CVRTefMW0bY/mqdefault_6s.webp?du=3000&sqp=CIDa2ocG&rs=AOn4CLCSZ-XdLgjDIupM5fgw29_Pm8WauQ"
                 />
            </div>       
        </div>
    )
}

export default RecommendedVideos
