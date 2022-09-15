import {Container} from "@mui/material";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import WebFont from 'webfontloader';
import "./App.css";
import Register from "../components/auth/Register";
import Banner from "./components/Banner";
import Chart from "./components/Chart";
import CoinsTable from "./components/CoinsTable";
import PleaseLogin from "./components/PleaseLogin";

function CryptoComponent(props) {

  // const userFromSecurity = "crypto@maniac.gov";
  // const userFromSecurity = "jerry@usmc.gov";
  // const userFromSecurity = "";
  const userFromSecurity = props.user.id;
  const [reload, setReload] = useState(true);
  useEffect(() => {
    WebFont.load({
                   google: {
                     families: ['Montserrat', 'Chakra Petch']
                   }
                 });
  }, []);
  useEffect(() => {
    setReload(true);
  }, [reload]);
  return (
    <Container
      sx={{
        backgroundColor: '#FFF',
        color          : 'black',
        minHeight      : '100vh'
      }}
    >{userFromSecurity ?
      <>
        <Banner/>
        <Chart user={userFromSecurity} reload={reload}/>
        <CoinsTable user={userFromSecurity} reload={setReload}/>
      </> :
      <PleaseLogin/>
    }
    </Container>
  );

}


export default CryptoComponent;
