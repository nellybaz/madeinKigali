import React, {Component} from "react";


class Fabric extends Component{
    render(){
        return(
            <div>

                <table width="100%" >
                    <tr style={{borderBottom: '1px solid #000'}}>
                        <td>
                            |
                        </td><td>
                            |
                        </td><td>
                            |
                        </td><td>
                            |
                        </td><td width="1%">
                            |
                        </td>
                    </tr>
                    <tr>
                        <td>
                            0
                        </td><td>
                            1
                        </td><td>
                            2
                        </td><td>
                            3
                        </td><td width="1%">
                            4
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}


export default Fabric;