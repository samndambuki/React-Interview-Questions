const Students = () => {
  const studentsList = ["Alice", "Bob", "George"];
  //   const studentsList = [
  //     { id: 1, name: "Sam" },
  //     { id: 2, name: "John" },
  //     { id: 3, name: "James" },
  //   ];
  return (
    <ul>
      <h2>these are students</h2>
      {studentsList.map((student, index) => (
        <li key={index}>{student}</li>
      ))}
    </ul>
  );
};

export default Students;
