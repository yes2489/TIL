const Dashboard = ({ data }) => {
  console.log("<Dashboard /> 렌더링 됨");

  return (
    <ul className="space-y-2">
      {data.map((item, idx) => (
        <li key={idx} className="p-2 bg-gray-100 rounded">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Dashboard;
