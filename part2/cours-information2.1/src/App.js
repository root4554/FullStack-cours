const Header = (props) => {
  console.log(props.name);
  return (
    <h1>{props.course.name}</h1>
  );
}

const Part = (props) => {
  const {course} = props
  return (
    <ul>
        {course.parts.map((cours) => <li key={cours.id}>{cours.name} {cours.exercises} </li>)}
    </ul>

  )
}
const Total = (props) =>{
  const {course} = props 
  
  const result = course.parts.reduce((sum, cours) => sum + cours.exercises , 0)
  
  return (
    <p>
      the result is {result}
    </p>
  )
}
const Course = (props) => {
  return (
    <>
      <Header course={props.course} />
      <ul>
        <Part course = {props.course}/>
      </ul>
      <Total course = {props.course}/>
    </>
  );
}






const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App