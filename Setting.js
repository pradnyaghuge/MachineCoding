export default Setting = ({ data, setData }) => {
  const { theme } = data;
  const handleChangeData = (e) => {
    setData((prevState) => ({
      ...prevState,
      theme: e.target.name,
    }));
  };
  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            name="dark"
            checked={theme === "dark"}
            onChange={handleChangeData}
          />
          Dark
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="light"
            checked={theme === "light"}
            onChange={handleChangeData}
          />
          Light
        </label>
      </div>
    </div>
  );
};
