import React from "react";

function OperatorList({ list }) {
  {
    return list.map(function (data) {
      return <div key={data.id}>operator name: {data.content}</div>;
    });
  }
}

export default OperatorList;
