import { useEffect, useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getApiCabins } from "../services/apiCabins";
import { CabinTable } from "../features/cabins/CabinTable";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

export const Cabins = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>SORT/FILTER</p>
      </Row>
      <Row>
        <CabinTable />
      </Row>
      <Button onClick={() => setShowForm(!showForm)}>Create Cabin</Button>
      {showForm && <CreateCabinForm />}
    </>
  );
};
