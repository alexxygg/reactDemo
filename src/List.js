import ListItem from "./ListItem";
//For validation, (string expected, etc), wont fail, but console
//will show clearly the problem, what to fix
import PropTypes from "prop-types";
function List(props) {
  //For default prop value, props in map method replaced with tempItems,
  //alternative is built-in defaultProps for component
  // let tempItems = props.items || [];

  let items = props.items.map((item) => <ListItem text={item} />); //Array li items

  let css = `bg-${props.background}`;
  return (
    <>
      <h3 className={css}>{props.title}</h3>
      <ul>{items}</ul>
    </>
  );
}

//if background is "", error because of oneOf(), if not in List, NO error, default used
List.defaultProps = {
  items: [],
  background: "primary",
};

List.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  background: PropTypes.oneOf(["primary", "secondary"]),
  //shape checks if specialProp has a name and age, being a
  //string and a number, if so, test passed.
  specialProp: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),
};
export default List;
