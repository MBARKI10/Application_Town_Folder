import React,{Component} from 'react'

class About extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            skillValue:"",
           title:"keep your smile",
           contact:{
              name:"Mohamed Mbarki",
              profile: "images/profile.jpg",
              email:"mohamedmbarki75@gmail.com"
           },
           skills:[
               {id:1,skill:"software ingenieur" },
               {id:2,skill:"UI Design" },
               {id:3,skill:"IT" },
           ]
         }
    }

    setSkill=(event)=>{
     this.setState({
         skillValue: event.target.value
     })
    }
    
    addSkill=(event)=>{
        event.preventDefault();
        let skill={
            
           id:[...this.state.skills].pop().id+1,
           skill:this.state.skillValue
        }
   this.setState({
       skills:[...this.state.skills,skill]
   })
    }

    onDelete=(skill)=>{
     let index=this.state.skills.indexOf(skill)
     let listSkills=[...this.state.skills]
     listSkills.splice(index,1)
     this.setState({
         skills:listSkills
     })
    }


    render() { 
        return ( <div>

            <div className="card">
                <div className="card-header">
                    <strong><label>{this.state.title}</label>
                    </strong>
                </div>
                
                <div className="row p-2">
                    <div className="col col-auto">
                        
                      <img width={100}  src={this.state.contact.profile} alt="profile"/>
                      
                    </div>
                    <div className="col">
                        <ul className="list-group">
                            <li className="list-group-item">{this.state.contact.name}</li>
                            <li className="list-group-item">{this.state.contact.email}</li>
                        </ul>
                   </div>
                </div>
            </div>
            <div className="card m-2">
                  <div className="card-header">skills : {this.state.skillValue}</div>
                <div className="card-body">
                    <form onSubmit={this.addSkill}>
                     <div className="row mb-2">
                         <div className="col">
                            <input type="text" name="skill" 
                            onChange={this.setSkill}
                            value={this.state.skillValue}
                            placeholder="Skill To Add..."
                             className="p-1"/>
                            
                         </div>
                         <div className="col col-auto">
                            
                            <button className="btn btn-primary">Add</button>
                         </div>

                     </div>
                    </form>
                 <table className="table">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Skill</th>
                            <th></th>
                        </tr>
                        </thead>
                    <tbody>
                        {
                            this.state.skills.map((el,index)=>
                                <tr key={el.id}>
                                    <td>{el.id}</td>
                                    <td>{el.skill}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={()=>this.onDelete(el)}>x</button>
                                    </td>
                                </tr>
                            )
                        }
                        </tbody>
                 </table>
                </div>

            </div>
        </div> );
    }
}
 
export default About;