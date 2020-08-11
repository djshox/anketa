import React from "react";
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import { countUp, countDown, countReset } from 'localRedux/counterReduser';
const Anketa = (props) => {
  console.log("props", props)
  return (
    <div className="col-10 text-center">
      <Button className=" m-2" type="primary" onClick={() => props.countUp(5)}>countUp</Button>
      <Button className=" m-2" type="primary" onClick={() => props.countDown(5)}>countDown</Button>
      <Button className=" m-2" type="primary" onClick={props.countReset}>countReset</Button>

      <div className="col-10 text-center">{props.getCounter} </div>
      {/* <img src={props.client.img} alt="Logo" width="250" height="300" /> */}
      <div> name: {props.client.name}</div>
      <div> address:{props.client.address} </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("state", state)
  return { getCounter: state.getCounter }
}

const mapDispatchToProps = ({ countUp, countDown, countReset })



export default connect(mapStateToProps, mapDispatchToProps)(Anketa);
