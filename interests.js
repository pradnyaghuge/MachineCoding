export default Interests = ({ data, setData, errors }) => {
  const { interests } = data;
  const handleChangeData = (e, name) => {
    setData((prevState) => ({
      ...prevState,
      interests: e.target.checked
        ? [...prevState.interests, e.target.name]
        : prevState.interests.filter((i) => i !== e.target.name),
    }));
  };
  console.log(interests);
  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="coding"
            onChange={handleChangeData}
            checked={interests.includes("coding")}
          />
          Coding
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="running"
            onChange={handleChangeData}
            checked={interests.includes("running")}
          />
          Running
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="music"
            onChange={handleChangeData}
            checked={interests.includes("music")}
          />
          Music
        </label>
      </div>
      {errors.interests && <span className="error">{errors.interests}</span>}
    </div>
  );
};
