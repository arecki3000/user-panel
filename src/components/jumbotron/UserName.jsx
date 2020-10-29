import styled from "styled-components";
import Row from "../../grid/Row";

const UserName = styled(Row)`
  grid-row: 3 / 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .name {
    margin: 0 auto;
    color: #3e495e;
    font-size: 27px;
    font-family: "Proxima Nova", -apple-system, system-ui, sans-serif;
    display: flex;
    align-items: center;
    img {
      margin-left: 6px;
      display: inline-block;
      width: 20px;
      height: 20px;
    }
  }
  .city {
    margin: 0 auto;
    color: #929cae;
    font-size: 16px;
    font-family: "Poppins-Regular", -apple-system, system-ui, sans-serif;
    line-height: 22px;
  }
`;
export default UserName;
