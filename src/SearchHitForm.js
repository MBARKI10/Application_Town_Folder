import React,{Component} from 'react'

class SearchHitForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            keywordValue:''
         }
    }

    setKeyword=(event)=>{
        this.setState({
            keywordValue: event.target.value
        })
     }

     doSearch=(event)=>{
             event.preventDefault();
             this.props.onSearch(this.state.keywordValue);
     }
    render() { 
        return ( <div>

            <form onSubmit={this.doSearch}>
               
                    <div className="row m-2 p-2">
                         
                        <div className="col">
                           <input  type="text" 
                           value={this.state.keywordValue}
                           onChange={this.setKeyword}
                           className="from-control col-12"
                            placeholder="keyword.."/>
                        </div>
                        <div className="col-auto">
                            <button className="btn btn-success">Chercher</button>
                        </div>
                    </div>

                </form> 

        </div> );
    }
}
 
export default SearchHitForm;