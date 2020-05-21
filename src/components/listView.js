import React from 'react';
import {ReactDOM} from 'react-dom';

const listView = (props) =>{
    console.log(props);
    return(
        <div className="data-list">
            <table>
                <thead>
                    <tr>
                        <th> Date </th>
                        <th> Open </th>
                        <th> High </th>
                        <th> Low </th>
                        <th> Close </th>
                        <th> Volume </th>
                    </tr>
                </thead>
                <tbody>
                    {                        
                        props.dataList.map((list, index) =>{
                        return(<tr key={index}>
                            <td>{list.Date}</td>
                            <td>{list.Open}</td>
                            <td>{list.High}</td>
                            <td>{list.Low}</td>
                            <td>{list.Close}</td>
                            <td>{list.Volume}</td>
                        </tr>)})
                    }
                </tbody>
            </table>
        </div>
    );
}

export default listView;