import React from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';

class Experiences extends React.Component{
    render(){
        return(
          <Card title="Experiences" style={{height:900, width:1300}}> 
          <Card type="inner" title="Inner Card title">
            Inner Card content
          </Card>
          <Card
            style={{ marginTop: 16 }}
            type="inner"
            title="Inner Card title"
          >
            Inner Card content
          </Card>
        </Card>
              
        )
    }
}

export default Experiences