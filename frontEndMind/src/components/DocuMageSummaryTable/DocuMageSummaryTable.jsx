import React from 'react'
import './DocuMageSummaryTable.css'
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

function DocuMageSummaryTable() {

  // const tableData = [
  //   { id: 1, question: 'what is the name	of the person?', answer: "The name of the person is Raj Gautam" },
  //   { id: 1, question: 'what is the name	of the person?', answer: "The name of the person is Raj Gautam" },
  //   { id: 1, question: 'what is the name	of the person?', answer: "The name of the person is Raj Gautam" },
  //   { id: 1, question: 'what is the name	of the person?', answer: "The name of the person is Raj Gautam" },
  // ];

  const data = {
    columns: [
      {
        label: '#',
        field: 'id',
        sort: 'asc'
      },
      {
        label: 'Question',
        field: 'first',
        sort: 'asc'
      },
      {
        label: 'Answer',
        field: 'last',
        sort: 'asc'
      },
      {
        label: 'Handle',
        field: 'handle',
        sort: 'asc'
      }
    ],
    rows: [
      {
        'id': 1,
        'first': 'Mark',
        'last': 'Otto',
        'handle': '@mdo'
      },
      {
        'id': 2,
        'first': 'Jacob',
        'last': 'Thornton',
        'handle': '@fat'
      },
      {
        'id': 3,
        'first': 'Larry',
        'last': 'the Bird',
        'handle': '@twitter'
      },
      {
        'id': 4,
        'first': 'Mark',
        'last': 'Otto',
        'handle': '@mdo'
      },
      {
        'id': 5,
        'first': 'Jacob',
        'last': 'Thornton',
        'handle': '@fat'
      },
      {
        'id': 6,
        'first': 'Larry',
        'last': 'the Bird',
        'handle': '@twitter'
      }
    ]
  };

  return (
    // <div className="table-container">
    //   <table className="scrolling-table">
    //     <thead style={{background: "rgba(235, 225, 255, 1)",height:"54px"}}>
    //       <tr>
    //         <th>Id</th>
    //         <th>Question</th>
    //         <th>Answer</th>
    //         {/* <th>Source</th>
    //         <th>Filename</th> */}
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {tableData.map((item) => (
    //         <tr key={item.id}>
    //           <td>{item.id}</td>
    //           <td>{item.question}</td>
    //           <td>{item.answer}</td>
    //           {/* <td>{item.source}</td>
    //           <td>{item.filename}</td> */}
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>



    // </div>
    <MDBTable scrollY>
      <MDBTableHead columns={data.columns} />
      <MDBTableBody rows={data.rows} />
    </MDBTable>
  )
}

export default DocuMageSummaryTable