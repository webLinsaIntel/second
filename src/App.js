

import React, { useState, useEffect } from 'react';
//import data from "./data.json";
import "./style.css";
import Tree from './Tree';


export const maindata = {
  "id": "0",
  "name": "123",
  "children": [
    {
      "id": "01",
      "name": "1",
      "children": [
        {
          "name": "1-1",
          "children": []
        }
      ]
    },
    {
      "id": "02",
      "name": "2",
      "children": [
        {
          "name": "2-1",
          "children": []

        }
      ]
    },

    {
      "id": "03",
      "name": "3",
      "children": [
        {
          "name": "3-1",
          "children": []

        }
      ]
    }

  ]
}


const App = () => {
  const [state, setState] = useState([]);
  const [dom, setDom] = useState([]);





  const [tempData, settempData] = useState(maindata);


  //for (let k in [0.1]) {
  console.log(maindata.children[0])
  console.log(maindata.children[1])
  // console.log(tempData.children[k])

  //}

  // let expandTempData = tempData;
  // let collapseTempData = tempData;
  // let leafCollapseTempData = tempData;

  // const renderTree = (node, i, setChanger) => {
  //   if (node.children[0].name) {
  //     for (let child of node.children) {
  //       dom.push(<Tree data={child} tempData={child} i={i} setChanger={settempData} 
  //         expand_upgrade = {expand_upgrade} 
  //         collapse_upgrade = {collapse_upgrade}
  //         leafCollapse = {leafCollpase}
  //       />)
  //       if (child.children[0].name) {
  //         let temp = i+1;
  //         renderTree(child, temp);
  //       }
  //     } 
  //   }
  //   return dom;
  // }

  // const expand_upgrade = (id) => {
  //   let node = data;
  //   // let expandTempData = [];
  //   if (node.children[0].name) {
  //     for (let k in node.children) {

  //       //expandTempData[k] = tempData.children[k]
  //       if (id == node.children[k].id) {

  //          expandTempData.children[k] = node.children[k].children ;
  //          settempData(expandTempData);
  //          return;
  //       }
  //       if (node.children[k].children[0].name) {

  //         expand_upgrade(node.children[k], id);
  //       }
  //     }

  //   }

  // }


  // const collapse_upgrade = (data,id) => {
  //   let node = data;
  //   if (node.children[0].name) {
  //     for (let child of node.children) {
  //       if (id == child.id) {
  //         child.children = []; 
  //         settempData(collapseTempData);
  //         return;
  //       }
  //       if (child.children[0].name) {

  //         collapse_upgrade(child, id);
  //       }
  //     } 
  //   }

  //   if (node.children[0].name) {
  //     for (let k in node.children) {

  //      // collapseTempData[k] = tempData.children[k]
  //       if (id == node.children[k].id) {
  //         collapseTempData.children[k] = []; 
  //         settempData(collapseTempData);
  //         return;
  //       }
  //       if (node.children[k].children[0].name) {

  //         collapse_upgrade(node.children[k], id);
  //       }
  //     }

  //   }

  // }

  // const leafCollpase = (id) => {
  //   let node = data;
  //   // let expandTempData = [];
  //   if (node.children[0].name) {
  //     for (let k in node.children) {

  //     //  leafCollapseTempData[k] = tempData.children[k]
  //       if (id == node.children[k].id) {
  //         for (let k in node.children) 
  //         {
  //           leafCollapseTempData.children[k] =[]; 
  //         }

  //         //leafCollapseTempData[k].children = node.children[k].children 


  //         settempData(leafCollapseTempData);
  //         return;

  //       }
  //       if (node.children[k].children[0].name) {

  //         leafCollpase(node.children[k], id);
  //       }
  //     }

  //   }

  // }

  //  const renderTree = (node, i, setChanger) => {
  //   let child = node;   
  //   while (child.children[0].name)
  //    {
  //     for (let child of node.children) {
  //       dom.push(<Tree data={child} tempData={child} i={i} setChanger={settempData} 
  //         expand_upgrade = {expand_upgrade} 
  //         collapse_upgrade = {collapse_upgrade}
  //         leafCollapse = {leafCollpase}
  //       />)

  //     let temp = i+1;
  //     renderTree(child, temp);  
  //    }
  //   }
  //   return dom;
  // }

  const collapse_upgrade = (data, id) => {
    let node = { "id": "0", "name": "123", "children": [] };
    // for (let k in data)
    //   node[k] = data[k]
    let dataChildren = data.children;
    let tempNode = dataChildren.map((data) => {
      let dataNew = {};
      dataNew.name = data.name;
      dataNew.id = data.id;
      dataNew.children = data.children;

      return dataNew;
    }
    )
    node.children = tempNode;


    // for (let child of node.children) {
    for (let k in tempData.children) {

      if ((id == node.children[k].id) || (tempData.children[k].children.length == 0)) {

        node.children[k].children = [];
        //   if (id == child.id) {  
        //   child.children = [];
        settempData(node);
        setState([]);
        return;
      }
      //       for (let grandchild of tempData.children[k].children)
      //  // for (let j in tempData.children[k].children) 
      //         if (id == grandchild.id) {
      //           grandchild.children = [];
      //           settempData(node);
      //           return;
      //         }
    }

  }


  const expand_upgrade = (data, id) => {
    let node = { "id": "0", "name": "123", "children": [] };
    // for (let k in data)
    //   node[k] = data[k]
    let dataChildren = data.children;
    let tempNode = dataChildren.map((data) => {
      let dataNew = {};
      dataNew.name = data.name;
      dataNew.id = data.id;
      dataNew.children = data.children;

      return dataNew;
    }
    )
    node.children = tempNode;


    var temporalData = [];

    for (let child of maindata.children) {
      if (id == child.id) {
        temporalData.push(child.children);

      }
      for (let grandchild of child.children)
        if (id == grandchild.id) {
          temporalData = grandchild.children;

        }
    }

    // for (let child of node.children) {
    //   if (id == child.id) {
    //     setState([]);
    //     child.children = temporalData[0];
    //     settempData(node);
    //     return;
    //   }

    for (let k in tempData.children) {

      if ((id == node.children[k].id)) {

        node.children[k].children = temporalData[0];
      }

      else {
        if (tempData.children[k].children.length == 0)

          node.children[k].children = [];
      }
      //   if (id == child.id) {  
      //   child.children = [];
      settempData(node);
      setState([]);
      return;
      

      // for (let grandchild of child.children)
      //   if (id == grandchild.id) {
      //     grandchild.children = temporalData[0];
      //     settempData(node);
      //     return;
      //   }
    }


  }

  const leafCollpase = (data) => {
    let node = { "id": "0", "name": "123", "children": [] };
    // for (let k in data)
    //   node[k] = data[k]
    let dataChildren = data.children;
    let tempNode = dataChildren.map((data) => {
      let dataNew = {};
      dataNew.name = data.name;
      dataNew.id = data.id;
      dataNew.children = data.children;

      return dataNew;
    }
    )
    node.children = tempNode;

    for (let child of node.children) {

      setState([]);
      child.children = [];
      settempData(node);
    }
    return;
  }




  const renderTreeView = (tempData, i) => {
    let dom = [];
    for (let k in tempData.children) {
      dom.push(<Tree
        data={maindata.children[k]}
        tempData={tempData.children[k]}
        i={i}
        setChanger={settempData}
        expand_upgrade={expand_upgrade}
        collapse_upgrade={collapse_upgrade}
        leafCollapse={leafCollpase}
      />)

      for (let j in tempData.children[k].children) {
        let temp = i + 1;
        dom.push(<Tree
          data={maindata.children[k].children[j]}
          tempData={tempData.children[k].children[j]}
          i={temp}
          setChanger={settempData}
          expand_upgrade={expand_upgrade}
          collapse_upgrade={collapse_upgrade}
          leafCollpase={leafCollpase}
        />)


      }
    }
    return dom;
  }



  return (
    <div className="App">
      {/* {renderTree(tempData, 0, setState)} */}
      {renderTreeView(tempData, 0)}
    </div>
  )
}





export default App;