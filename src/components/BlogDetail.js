import React from 'react'
import data from '../data';
//import YouTube from 'react-youtube';

export default function BlogDetail(props) {
 console.log(props.match.params.id);
  const item = data.videos.find(x => x._id === props.match.params.id);
        return (
            <div>
                {item.id}
            </div>
        )

}
