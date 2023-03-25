import logo from './logo.svg';
import './App.css';
import { SheetsDirective, SheetDirective, RangesDirective, RangeDirective, SpreadsheetComponent, ColumnsDirective, ColumnDirective, CellsDirective, RowDirective, CellDirective, RowsDirective } from '@syncfusion/ej2-react-spreadsheet';
import { useEffect, useState, useRef } from 'react';
import { SpreadSheetData } from './source/SpreadSheetData';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import EditingPage from './pages/EditingPage';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import PredefinedColumn from './pages/predefinedExcel/PredefinedColumn';
import MultiSelections from './pages/multipleSelection/MultiSelections';
import Home from './pages/Home';
function App() {

  const [submitValue, setSubmitValue] = useState(null)
  const [spreadSheetValue, setSpreadSheetValue] = useState([{
    name: "",
    age: ""
  }])
  const handleClick = () => {
    setSubmitValue(spreadSheetValue)
  }

  const changeInput = (e) => {

    const newObj = spreadSheetValue?.map((item, index) => {

      if (e.target.id == index) {
        return {
          ...item,
          [e.target.name]: e.target.value
        }
      } else {
        return item
      }
    })
    setSpreadSheetValue(newObj)




  }

  const addMoreQuestions = () => {

    setSpreadSheetValue([
      ...spreadSheetValue, {
        name: "",
        age: ""
      }
    ])
  }

  // const remoteData = new DataManager({   // helps  in fetching api data
  //   url: "https://ej2services.syncfusion.com/production/web-services/api/Orders",
  //   adaptor: new WebApiAdaptor,
  //   crossDomain: true
  // })

  // const spreadsheetRef = useRef(null)
  // const handleCellSelected = (args) => {
  //   const sheet = spreadsheetRef.current.sheets[0];
  //   const value = sheet.rows[args.range.split(":")[0]].cells[args.range.split(":")[0]]
  // }

  return (
    <Routes>
      <Route element={<Layout />} >
        <Route path="/" element={< Home />} />
        <Route path="/Predefined-Columns" element={<PredefinedColumn />} />
        <Route path="/MultiSelections" element={<MultiSelections />} />
      </Route>

    </Routes>

  );
}

export default App;
