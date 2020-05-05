import React,{Component} from 'react'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return ( 
             <div className="container text-muted">

                <h2 >Welcome To My Application Town Folder Created With <a href="https://github.com/MBARKI10"><strong>Mohamed Mbarki</strong></a></h2>
            </div> );
    }
}
 
export default Home;