import react, {useState, useEffect} from "react";
import './App.css';
import PunkList from "./components/PunkList";
import Header from "./components/Header";
import axios from "axios";
import Main from "./components/Main";

function App() {

  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(1)

  useEffect(()=>{
    const getMyNfts = async () => {
      const openseaData = await axios.get("https://testnets-api.opensea.io/assets?asset_contract_address=0x323D4AAA90660b7551214E2F9D79D0d2fFcb0E8c&order_direction=asc")
      // console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets);
    }

    return getMyNfts();
  }, [])

  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main selectedPunk={selectedPunk} punkListData={punkListData} />
          <PunkList
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  );
}

export default App;
