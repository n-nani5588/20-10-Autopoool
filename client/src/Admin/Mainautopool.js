import React from 'react';
import Autopool from './Autopool/autopool';
import Autopool2 from './Autopool/autopoolTwo';
import Autopool3 from './Autopool/autopoolThree';
import Autopool4 from './Autopool/autopoolFour';
import Autopool5 from './Autopool/autopoolFive';
import Autopool6 from './Autopool/autopoolSix';
import Autopool7 from './Autopool/autopoolSeven';
import Autopool8 from './Autopool/autopoolEight';
import Autopool9 from './Autopool/autopoolNine';
import Autopool10 from './Autopool/autopoolTen';

class Mainautopool extends React.Component{

    constructor(){
        super();
        this.state ={
            render: '',
        }
    }

    render(){
        return(
            
            <div>
                {/* Autopool buttons */}
                <div style={{display:"flex",flexWrap:'wrap',fontSize:"13px"}}>

                    <button
                    className="btn btn-link"
                    onClick={() => this.setState({render: <Autopool></Autopool>})}
                    > 
                    Bronze
                    </button>

                    <button
                    className="btn btn-link"
                    onClick={() => this.setState({render: <Autopool2></Autopool2>})}
                    > 
                      Silver
                    </button>

                    <button
                    className="btn btn-link"
                    onClick={() => this.setState({render: <Autopool3></Autopool3>})}
                    > 
                     Gold
                    </button>

                    <button
                    className="btn btn-link"
                    onClick={() => this.setState({render: <Autopool4></Autopool4>})}
                    > 
                      Platinum
                    </button>

                    <button
                    className="btn btn-link"
                    onClick={() => this.setState({render: <Autopool5></Autopool5>})}
                    > 
                      Diamond
                    </button>

                    <button
                    className="btn btn-link"
                    onClick={() => this.setState({render: <Autopool6></Autopool6>})}
                    >
                      Million
                    </button>


                    <button
                    className="btn btn-link"
                    onClick={() => this.setState({render: <Autopool7></Autopool7>})}
                    >
                         Billion
                         </button>

                    <button
                    className="btn btn-link"
                    onClick={() => this.setState({render: <Autopool8></Autopool8>})}
                    >
                        Trillion
                    </button>

                    <button
                    className="btn btn-link"
                    onClick={() => this.setState({render: <Autopool9></Autopool9>})}
                    >
                         Crown
                    </button>

                    <button
                    className="btn btn-link"
                    onClick={() => this.setState({render: <Autopool10></Autopool10>})}
                    >
                       Ace
                    </button>



                </div>
                {this.state.render}
            </div>
        )
    }
}

export default Mainautopool;