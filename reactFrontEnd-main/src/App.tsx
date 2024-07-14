import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  // let items = ["New York", "Londan", "India", "Paris", "Tokyo"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  const [alert, setAlertClicked] = useState(false);

  return (
    <div>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
      {alert && <Alert onClose={() => setAlertClicked(false)}>My Alert</Alert>}
      <Button color="danger" onClick={() => setAlertClicked(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
