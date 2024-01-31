const Course = () =>  {
    const courses = [
      {
      name: 'Half Stack Application Developer',
      id: 1,
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
          name: 'State of component',
          exercises: 14,
          id: 3
        }
      ]
    }, 
    {
      name: 'Node.js',
        id: 2,
        parts: [
          {
            name: 'Routing',
            exercises: 3,
            id: 1
          },
          {
            name: 'Middlewares',
            exercises: 7,
            id: 2
          }
        ]
    }
  ]
    return (
      <div>
        {courses.map((course) => (
          <div key={course.id}>
            <h1>{course.name}</h1>
            {course.parts.map((part) => (
              <p key={part.id}>{part.name} {part.exercises}</p>
            ))}
            <p>
              Number of exercises {course.parts.reduce((sum, part) => sum + part.exercises, 0)}
            </p>
          </div>
        ))}
      </div>
    );
  }

export default Course