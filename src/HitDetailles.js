import React,{Component} from'react'
import HitItem from './HitItem'
import axios from 'axios'


class HitDetailles extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            hit:null
         }
    }

    getHits(id){
        let url = ('https://pixabay.com/api/?key=5832566-81dc7429a63c86e3b707d0429&id='+id);
        axios.get(url).then((res)=>{
            this.setState({
            hit:res.data.hits[0],
            });
             
        }).catch((err)=>{
            console.log(err);
        });
    }

    componentDidMount=()=>{
        this.getHits(this.props.match.params.id)
    }
    render() { 
        if(this.state.hit!=null)
        return ( 
            <HitItem hit={this.state.hit} details={true}/>
         );
         else{
             return <div></div>
         }
    }
}
 
export default HitDetailles;