import React, { useEffect } from "react";
import TreeView from 'devextreme-react/tree-view'

import { familyTree } from "../data/inocentes.js";

const FamilyTreeView = () => {

  useEffect(() => {

  })


  const renderTreeViewItem = item => {

    let itemClass = ''

    switch (item.sex) {
      case 'male':
        itemClass = 'male-node'
        break;
      case 'female':
        itemClass = 'female-node'
        break;
      default:
        break
    }


    return (
      <div className={itemClass}>
        {item.name}
      </div>
    )
  }

  return (
    <div className="form">
      <TreeView id="simple-treeview"
        items={familyTree}
        displayExpr='name'
        dataStructure='plain'
        itemRender={renderTreeViewItem}
      />
    </div>
  )
}

export default FamilyTreeView
