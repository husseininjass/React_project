import Admin from "../main";

function Test() {
  return (
    <>
      <Admin/>
      <div className="content">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>hussein</td>
              <td>husam</td>
              <td>hussein@mail.com</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>minato</td>
              <td>kami</td>
              <td>minato@mail.com</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>itachi</td>
              <td>uchiha</td>
              <td>king@uchiha.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Test;
