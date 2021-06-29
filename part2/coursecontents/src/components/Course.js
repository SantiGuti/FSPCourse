const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

const Header = ({ course }) => {
  return <h2>{course.name}</h2>;
};

const Content = ({ course }) => (
  <div>
    {course.parts.map((data) => (
      <Part key={data.id} name={data.name} exercises={data.exercises} />
    ))}
  </div>
);

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Total = ({ course }) => {
  const total = course.parts.reduce(
    (sum, current) => sum + current.exercises,
    0
  );
  return <b>total of {total} exercises</b>;
};

export default Course;