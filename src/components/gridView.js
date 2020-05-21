import React from 'react';
import {ReacpOM} from 'react-dom';

const gridView = (props) =>{
    console.log(props.dataList);
    return(
        <div className="grid-list">
            <div class="grid">
                {                    
                    props.dataList.map((list, index) =>{
                    return(<div key={index} class="card">
                        <div class="content">
                            <p>Date: {list.Date}</p>
                            <p>Open: {list.Open}</p>
                            <p>High: {list.High}</p>
                            <p>Low: {list.Low}</p>
                            <p>Close: {list.Close}</p>
                            <p>Volume: {list.Volume}</p>
                        </div>
                    </div>)})
                }
            </div>
        </div>
    )
}

export default gridView;