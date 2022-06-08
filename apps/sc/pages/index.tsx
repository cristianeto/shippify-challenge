import styled from '@emotion/styled';
import { useEffect } from 'react';
import { getCompanies } from '../services/company';

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

  const populateCompanies = async () => {
    const res = await getCompanies();
    console.log(res.data);
  };

  useEffect(() => {
    populateCompanies();
  }, []);

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
