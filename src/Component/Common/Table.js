import { Table } from "react-bootstrap";
import React, { Component } from 'react'

export class TableFile extends Component {
    render() {
        return (
            <div className='mt-5'>

                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Sl.No</th>
                            <th>Education</th>
                            <th>Percentage</th>
                            <th>Collge Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>B.Tech ,CSE</td>
                            <td>75</td>
                            <td>MIT,BBSR</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>+2 Sce</td>
                            <td>68</td>
                            <td>Simulia college,BLS</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>10th</td>
                            <td>74</td>
                            <td>PM H/S,BDK</td>
                        </tr>
                        
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default TableFile

