import React, { useState, useEffect } from 'react';
import getBlockchain from '../ethereum.js';
import axios from 'axios';
import Image from "next/image.js"

function App() {
  const [tokenInfo, setTokenInfo] = useState(undefined);

  useEffect(() => {
    const init = async () => {
      const { nft } = await getBlockchain();
      const tokenURI = await nft.tokenURI(0);
      const { data } = await axios.get(tokenURI);
      console.log('fetch data:', data, data.data.data)
      setTokenInfo(data.data.data);
      // console.log('tokeninfo2: ', tokenInfo)
    };
    init();
  }, []);

  console.log('tokeninfo: ', tokenInfo)

  if(typeof tokenInfo === 'undefined') {
    return 'Loading...';
  }

  return (
      <div className='container'>

        <div className='row'>
          <div className='col-sm-12'>
            <h1 className='text-center'>{tokenInfo.name}</h1>
            <div className="jumbotron">
              <p className="lead text-center">{tokenInfo.description}</p>
              <Image src={tokenInfo.image} className="img-fluid" alt="" />
            </div>
          </div>
        </div>

      </div>
  );
}

export default App;
