export const Filter = ({ value, onChange }) => {
  return (
    <div>
        <h3>find your contacts by nmae</h3>
        <input type="text" value={value} onChange={onChange} />
    </div>
  )
};
