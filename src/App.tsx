import UserSearch from "./components/classes/UserSearch";

export default function App() {
  const users = [
    { name: "Sarah", age: 20 },
    { name: "Alex", age: 20 },
    { name: "Michael", age: 20 },
  ];
  return <UserSearch users={users}/>;
}
