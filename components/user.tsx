function User(users: any) {
  return (
    <div>
      {users.users.map((user: any) => {
        return (
          <div key={user.id}>
            <p>{user.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default User;
