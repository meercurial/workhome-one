type AddressType = {
  street: string;
  city: string;
};

type UserType = {
  id: number;
  name: string;
  age: number;
  address: AddressType;
};

interface IUserListPropsType {
  users: UserType[];
}

export const UserList: React.FC<IUserListPropsType> = ({ users }) => {
  return (
    <div id={'hw01-users'}>
      <h2>User List:</h2>
      <ul>
        {users.map((obj) => (
          <li key={obj.id} id={`hw01-user-${obj.id}`}>
            <strong>{obj.name}</strong> (Age: {obj.age})<strong> Address:</strong>
            {obj.address.street}, {obj.address.city}
          </li>
        ))}
      </ul>
    </div>
  );
};
