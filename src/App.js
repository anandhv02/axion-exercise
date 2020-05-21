import React from 'react';
import ListData from './assets/data.json'
import listIcon from './assets/images/list-icon.png';
import gridIcon from './assets/images/grid-icon.png';
import './App.css';
import GridView from './components/gridView';
import ListView from './components/listView';

class App extends React.Component {

  constructor(props){
    super(props)
  }
  state = {
    isGrid:false,
    jsonData:{}
  }

  componentWillMount(){     
    console.log(ListData);
    this.setState({jsonData:ListData});    
  }

  viewClick = (evt)=>{
   this.state.isGrid?this.setState({isGrid:false}):this.setState({isGrid:true});
  }

  render(){
    console.log(this.state.jsonData);
    return (
      <div className='App'>
        <div className='header'>
          <h1>List and Grid View</h1>
        </div>
        <div class="icons">
          <span className={!this.state.isGrid?'active':''} onClick={this.viewClick}><img src={listIcon} alt="list"/></span>
          <span className={this.state.isGrid?'active':''} onClick={this.viewClick}><img src={gridIcon} alt="grid"/></span>
        </div>
        <div className="body">
            {!this.state.isGrid?<ListView dataList={this.state.jsonData}/>:<GridView dataList={this.state.jsonData}/>}
        </div>
      </div>
    );
  }
  
}

export default App;
