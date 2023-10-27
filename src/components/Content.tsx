const Content = ({ rows }) => {
  return (
    <div className="w-1/4 bg-white p-4 rounded-md ml-auto mr-auto shadow-md">
      <ul className="relative left-1/2 -translate-x-1/2">
        {rows.map((item) => (
          <li key={item}>
            {item.numberOfColumns}
            {item.color}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
