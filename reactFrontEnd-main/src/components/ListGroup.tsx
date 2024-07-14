//import { MouseEvent } from "react";

import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //   let items = ["New York", "Londan", "India", "Paris", "Tokyo"];
  //let selectedIndex = 0;
  //Hook. Has  an data that change over time.
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //   arr[0]; // variable (selectedIndex)
  //   arr[1]; // updater function

  //items = [];
  //const message = items.length === 0 ? <p>No item found</p> : null;

  //   const getMessage = () => {
  //     return items.length === 0 ? <p>No item found</p> : null;
  //   };

  //   if (items.length === 0)
  //     return (
  //       <>
  //         <h1>List</h1> <p>No item found</p>
  //       </>
  //     );

  //Event handler
  //const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
//We are returing 2 elements but in react we can return only one element. otherwise we can wrap this 2 as 1.
//Enter in command paletter >wrap with abrevation.
//So it is not good to add additional element so add Fragment.
//We can import Fragment or <> - This means Fragemnt in react.
//To format document
//Shift + Alt + F
//ctrl + D is select multiple elements.
//{items.length === 0 && <p>No item found</p>}  for this one case is True other will also be render.If first case is false entire will be false.
//() => console.log(item, index)
export default ListGroup;
