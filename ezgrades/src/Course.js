class Course {
    constructor(name, weight) 
    {
        this.name = name;
        this.weight = weight;
        this.assignments = [];
    }

    addAssignment(assignment) 
    {
        this.assignments.push(assignment);
    }

    calculateGrade() {

    }
}
export default Course;