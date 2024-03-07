import React from "react";

function OperatorList({ list }) {
  {
    return list.map(function (data) {
      return <div id={data.id}>operator name: {data.content}</div>;
    });
  }
}

export default OperatorList;
