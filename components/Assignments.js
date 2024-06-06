import AssignmentsLists from './AssignmentLists.js'
import AssignementCreate from './AssignementCreate.js';
export default{
    components:{AssignmentsLists,AssignementCreate},
    template:`
    <section class = "flex gap-8">
    
    <AssignmentsLists :assignments = "filters.inProgress" title = "InProgress">
    <AssignementCreate @add = 'add' ></AssignementCreate> 
    </AssignmentsLists>

    <div v-show="showCompleted">
    <AssignmentsLists 
    :assignments = "filters.completed" 
    title = "Completed" 
    can-toggle
    @toggle ="showCompleted = !showCompleted"
    ></AssignmentsLists>

    </div>

    <!-- <AssignementCreate @add = 'add'></AssignementCreate>  -->
    
    </section>`,
  data() {
    return {
      assignments: [],
      showCompleted: true
    };

  },

  computed: {
     
      filters(){
        return{
            inProgress : this.assignments.filter(assignment=>!assignment.complete),
            completed : this.assignments.filter(assignment=>assignment.complete)
        }
      }
    
      
  },

  created(){
      fetch('http://localhost:3001/assignments')
      .then(response=>response.json())
      .then(assignments=>this.assignments=assignments)
  },

  methods: {

    add(name){
        this.assignments.push({
            name: name,
            completed: false,
            id : this.assignments.length+1
        })
    }
  }
}