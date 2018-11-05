import React, {Component} from 'react';
import {XBox, XGrid} from 'components';

export default class extends Component {

    render() {
        return[
            <XGrid.Row key="grid1">
                <XGrid.Col className="grid-demo bg-green" col={6}>
                    <XBox title="box-demo" type="success">cehsiceshi</XBox>
                </XGrid.Col>
                <XGrid.Col className="grid-demo bg-green" col={6}>
                    <XBox title="box-demo" type="warning">cehsiceshi</XBox>
                </XGrid.Col>
            </XGrid.Row>,
            <XBox key="box" className="demo" title="box-demo">cehsiceshi</XBox>,
            <XBox key="box1" className="demo" title="box-demo">cehsiceshi</XBox>,
            <XBox key="box6" className="demo" title="box-demo">cehsiceshi</XBox>,
            <XBox key="box8" title="box-title" type="danger">
                <XGrid.Row>
                    <XGrid.Col className="grid-demo bg-green" col={6}>
                        <div className="grid-demo bg-green"></div>
                    </XGrid.Col>
                    <XGrid.Col className="grid-demo bg-green" col={2}>
                        <div className="grid-demo bg-green"></div>
                    </XGrid.Col>
                    <XGrid.Col className="grid-demo bg-green" col={2}>
                        <div className="grid-demo bg-green"></div>
                    </XGrid.Col>
                </XGrid.Row>
            </XBox>
        ]
    }
}
