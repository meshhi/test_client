import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchAllPersons from "../store/async-thunks/persons-thunk";

const Persons = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllPersons());
  }, []);

  return(
    <div>
      Some persons
    </div>
  )
}

export default Persons;