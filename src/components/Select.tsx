interface SelectProps {
  name: string;
}
const Select: React.FC<SelectProps> = ({ name }) => {
  return (
    <>
      <label htmlFor="formGroupExampleInput" className="form-label">
        <h3>{name}</h3>
      </label>
      <select className="form-select" aria-label="Default select example">
        <option selected>these will come from the BDD</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </>
  );
};
export default Select;
