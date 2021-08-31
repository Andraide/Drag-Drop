import React from 'react'
import { Dimensions } from "../statics"
import { history} from '@/statics'
import * as Yup from 'yup'


class CustomForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            width: window.innerWidth, height: 
            window.innerHeight,
            maxHeight: window.visualViewport.height,
            maxWidth: window.visualViewport.width,
            
        };
        this.Dimensions = Dimensions.bind(this)

    }
    
    componentDidMount()
    {
        window.addEventListener('resize', this.Dimensions);

    }

    componentWillUnmount()
    {
        window.removeEventListener('resize', this.Dimensions);
    }

    componentDidUpdate()
    {
        log.info("Dimensions", this.state.width, this.state.height);
    }

    

    

    render() {

    
        return ( 
            <div style={{ backgroundColor: 'green' }}>
                <div style={{ width: '100vw', height: '15vh' }}></div>
            </div>
        )
    }
}

export { CustomForm };


