import styled from '@emotion/styled';
import axios from 'axios';
import { useEffect } from 'react';
import { api } from '../constants/api';
const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.@emotion/styled file.
   */

  const getCompanies = async () => {
    const res = await axios.get(`${api.url}/company`);
    console.log(res.data);
  }

  useEffect(()=>{
    getCompanies();
  },[])

  return (
    <StyledPage>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome sc 👋
            </h1>
          </div>
        </div>
      </div>
    </StyledPage>
  );
}

export default Index;
