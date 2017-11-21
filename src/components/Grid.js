import './Grid.css';
import React, { Component } from 'react';
import Box from './Box';

class Grid extends Component {

    render() {

        const location = this.props.location;
        let key = 0;

        return (
            <div className="grid"  >

                {location.map((row) => {
                    return (
                        <div className="row">
                            {row.map((item) => {   
                                if(item === "X") {
                                    key++;
                                    return <Box key={key} value="X" /> 
                                } else if(item === ".") {
                                    key++;
                                    return <Box key={key} value="."/>
                                } else if(item === "B") {
                                    key++;
                                    return <Box key={key} value="B"/>
                                } else if(item === "boom") {
                                    key++;
                                    return <Box key={key} value="boom"/>
                                } else {
                                    key++;
                                    return <Box key={key} />
                                }
                            })
                                
                            }
                        </div>
                    )
                })}

            </div>
        );
    }
}
    
export default Grid;