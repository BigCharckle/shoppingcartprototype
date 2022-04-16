import { Button, Form } from "react-bootstrap";
//this is an undelivered part, just to make the page looks balanced I keep it showing only.
const Filters = () => {

  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          checked = {false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          checked={false}
        />
      </span>
      <Button
        variant="light"
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;
