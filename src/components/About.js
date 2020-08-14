import React, { Component } from 'react';
import YouTube from 'react-youtube';
import data from '../data';

export default class About extends Component {
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            },
        };

        return (
            <div>
              {
                  data.videos.map(item => 
                <YouTube videoId={item.youtube} opts={opts} onReady={this._onReady} />
                  )
              }
            </div>
        )
    }
        _onReady(event) {
            // access to player in all event handlers via event.target
            event.target.pauseVideo();
        }

}
