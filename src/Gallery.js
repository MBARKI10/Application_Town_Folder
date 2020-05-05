import React,{Component} from 'react';
import HitItem from './HitItem'
import SearchHitForm from './SearchHitForm'

import axios from 'axios';
class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            hits:[],
            currentPage:1,
            pageSize:10,
            currentKeyword:'',
            totalPages:1,
            pages:[]
         }
    }

    componentDidMount(){
        //this.getHits();
    }

   getHits(keyword){
       let url = ('https://pixabay.com/api/?key=5832566-81dc7429a63c86e3b707d0429&q='
       +keyword+"&page="+this.state.currentPage+"&per_page="+this.state.pageSize);
       axios.get(url).then((res)=>{
         let totalP = (res.data.totalHits%this.state.pageSize===0)?
         res.data.totalHits/this.state.pageSize:1+Math.floor(res.data.totalHits/this.state.pageSize);
     
           this.setState({
           hits:res.data.hits,
           totalPages:totalP,
           pages:new Array(totalP).fill(0),
           currentKeyword:keyword
           });
         }).catch((err)=>{
           console.log(err);
       });
   }

   search=(keyword)=>{
     
       this.setState({
           currentPage:1,
           pages:[]
       },()=>{
        this.getHits(keyword);
       })
    
     }

   goToPage=(page)=>{
       this.setState({
         currentPage:page
       },()=>{
        this.getHits(this.state.currentKeyword);
       });
      
   }


    render() { 
        return ( 
            <div>
              
                 <SearchHitForm onSearch={this.search}/> 
              <div className="row">
            {
              
               this.state.hits.map(hit=>
                  
                 <HitItem hit={hit} details={false} key={hit.id}/> 
               )
               
            }
               <ul className="nav nav-pills">
                 {
                    this.state.pages.map((val,index)=>
                       <li key={index}>
                         <button className={this.state.currentPage===index+1?'btn btn-info':'btn btn-link'} onClick={()=>this.goToPage(index+1)}>{index+1}</button>
                       </li>

                    )
                 }
             </ul>
            
            
        </div> 
        </div>);
    }
}
 
export default Gallery;