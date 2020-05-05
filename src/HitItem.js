import React,{Component} from 'react';
 import {Link} from 'react-router-dom';


class HitItem extends Component {
    constructor(props){
        super(props);
        this.state = { 
            
         }
    }
   
    render() { 
        return ( <div className={this.props.details===false?'col-md-4 m-2':'m-2'} key={this.props.hit.id} >
        <div className="card" >
             <div className="card-header">{this.props.details===false?this.props.hit.tags:'Details'}
              | {this.props.details===false?this.props.hit.webformatWidth:this.props.hit.imageWidth}
              *{this.props.details===false?this.props.hit.webformatHeight:this.props.hit.imageHeight}</div>  
                <div className="card-body">  
                {
                    (this.props.details===false)?
                     <img height={200} className="card-img" src={this.props.hit.webformatURL} alt=""/>:
                     <img   src={this.props.hit.largeImageURL} alt=""/>
                }
                  
                </div>   
        </div> 
        {
            (this.props.details===false)?<div className="m-2">
            <Link to={"/hitDetails/" +this.props.hit.id} className="btn btn-success">Hit Details</Link>

         </div>
         :<div>
             <div className="row p-2">
                 <div className="col-auto">
                   <img src={this.props.hit.userImageURL} alt="" className="img-thumbnail"/>
                 </div>
                 <div>
                     <ul className="nav nav-pills">
                          <li className="list-group-item">View :<strong>{this.props.hit.views}</strong></li>
                          <li className="list-group-item">Comments :<strong>{this.props.hit.comments}</strong></li>
                          <li className="list-group-item">Downloads :<strong>{this.props.hit.downloads}</strong></li>
                          <li className="list-group-item">Favorites :<strong>{this.props.hit.favorites}</strong></li>
                          <li className="list-group-item">Likes :<strong>{this.props.hit.likes}</strong></li>
                     </ul>
                     
                 </div>

             </div>
             <Link to="/gallery" className="btn btn-primary">Back</Link>
         </div>
        }
                             
     </div> );
    }
}
 
export default HitItem;
