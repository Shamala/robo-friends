import Card from "./Card";

const CardList = ({ robots }) => {
  const cards = robots?.map((user, i) => (
    <Card email={user.email} name={user.name} id={user.id} key={i} />
  ));

  return <div>{cards}</div>;
};

export default CardList;
