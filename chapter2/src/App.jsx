const Course = () =>  {
  const course = {
    name: 'Half Stack Application Developer',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <h1>{course.name}</h1>
      <p>{course.parts[0].exercises}</p>
      <p>{course.parts[1].exercises}</p>
      <p>{course.parts[2].exercises}</p>
      <p>
        Number of exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}
      </p>
    </div>
  );
}

const App = () => (
  <Course />
)

export default App;
