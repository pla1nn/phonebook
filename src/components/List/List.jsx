import { Item } from "components/Item/Item";

export const List = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <Item
          key={id}
          name={name}
          onDelete={onDelete}
          number={number}
          id={id}
        />
      ))}
    </ul>
  );
};
