
import * as React from "react";
import { CellsDirective, RowDirective, RowsDirective, SheetDirective, SheetsDirective, SpreadsheetComponent, CellDirective, RangesDirective, RangeDirective, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-spreadsheet";
import { useRef, useEffect, useState } from "react";
import { TableTitle } from "../../table-titles/TableTitles";


export default function MultiSelections() {
    let ssObj
    // let protectOptions = {
    //     selectCells: true
    // }

    const [selectedCell, setSelectedCell] = useState("")
    // const [sheetCount, setSheetCount] = useState(1)
    // useEffect(() => {
    //     document.querySelector(".e-add-sheet-tab").addEventListener("click", function (e) {
    //         setSheetCount(sheetCount + 1)
    //         if (ssObj) {
    //             console.log(ssObj.sheets[ssObj?.properties?.activeSheetIndex].selectedRange.split(":")[0], "dddddddddddddddd")
    //             setSelectedCell(ssObj.sheets[ssObj?.properties?.activeSheetIndex].selectedRange.split(":")[0])
    //         }
    //     })
    // }, [sheetCount])

    const [sheetCounts, setSheetCount] = useState(1)
    const [someObject, setSomeObject] = useState(null)
    useEffect(() => {
        document.querySelector(".e-add-sheet-tab").addEventListener("click", function (e) {
            if (ssObj) {
                setSheetCount(ssObj.sheets?.length)
                console.log("dddfdfdfdf")
                // console.log(ssObj.sheetNameCount, "ssObj.sheetNameCount")
                // setSheetCount(ssObj.sheetNameCount)
                // setSheetCount(ssObj.setSheetCount)
                // setSomeObject(ssObj)
            }
        })
    }, [sheetCounts])

    console.log(selectedCell, "selectedCellselectedCell")
    const handleAddTitles = (item, index) => {
        const separateAlphNum = selectedCell.split("")  // splitting cell location into alpha and nunber 
        const incrementValue = Number(separateAlphNum.slice(1).join("")) + 1 // increasing number time onclick of varialbe
        const incrementedCell = separateAlphNum[0] + incrementValue
        setSelectedCell(incrementedCell)
        ssObj.updateCell({ value: item.title }, `${selectedCell}`);
        ssObj.cellFormat({ fontWeight: 'bold', textAlign: 'left', width: 120, backgroundColor: "#1E88E5", color: "#ffffff" }, `${selectedCell}`)

        // if (item.title == "Sum") {
        //     ssObj.updateCell({ formula: `=SUM(B${1}: B${4})` }, `B${index + 1}`);
        //     ssObj.cellFormat({ fontWeight: 'bold', textAlign: 'left', width: 120, color: "red" }, `B${index + 1}`)

        // }
    }


    const onCreated = () => {
        ssObj.cellFormat({
            fontWeight: "bold", textAlign: "center", verticalAlign: "middle", fontSize: "13pt",
            backgroundColor: "#1E88E5", color: "#ffffff"
        }, "A1:H1")
        // ssObj.cellFormat({
        //     fontWeight: "bold", textAlign: "center", verticalAlign: "middle", fontSize: "13pt",
        //     backgroundColor: "#1E88E5", color: "#ffffff"
        // }, "A1:H1")
        // ssObj.cellFormat({
        //     fontWeight: "bold", textAlign: "center", verticalAlign: "middle", fontSize: "10pt",
        //     color: "black"
        // }, "A2:A7")
        // ssObj.updateCell({ value: "Price" }, `A2`)
        // ssObj.updateCell({ value: "Product" }, `A3`)
        // ssObj.updateCell({ value: "Future" }, `A4`)
        // ssObj.updateCell({ value: "Models" }, `A5`)
        // ssObj.updateCell({ value: "Inventory" }, `A6`)
        // ssObj.updateCell({ value: "Model" }, `A7`)
        // ssObj.lockCells("B1:H7", false) // to cells unlock from protection 
    }
    // getting get from api call
    // fetch("https://js.syncfusion.com/demos/ejservices/data/Spreadsheet/LargeData.xlsx") calling api to get requested data from server
    //   .then((response) => {
    //     response.blob().then((fileBlob) => {
    //       var file = new File([fileBlob], "Sample.xlsx"); //convert the blob into file
    //       ssObj.open({ file: file }); // open the file into Spreadsheet
    //     });
    //   });

    // const onCellEdit=(args)=>{  // prevent editting enter row but unable to deleted  cellss
    //   if(args.address.includes("A")){
    //     args.cancel=true
    //   }
    // }


    const onBeforeSave = (args) => {
        console.log(ssObj, 'ddddddddddddddd')
    }

    // api call on post
    const handleSendData = (e) => {
        ssObj.saveAsJson().then((Json) =>
            fetch("http://localhost:49371/Spreadsheet/Save", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    // FileName: document.getElementById("filename").value,
                    JSONData: JSON.stringify(Json.jsonObject.Workbook),
                    ContentType: "Xlsx",
                    VersionType: "Xlsx",
                })
            })
        )
        // (consargs, "args")
        // ssObj.save({
        //   url: "https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save",
        //   fileName: "sampleData",
        //   saveType: "Pdf"
        // })
    }

    const handleCellSelected = (s) => {
        console.log(ssObj?.properties?.activeSheetIndex, "argssss")
        // setSelectedCell()
        setSelectedCell(ssObj.sheets[ssObj?.properties?.activeSheetIndex].selectedRange.split(":")[0])
    }
    return (
        <div className="App">
            <div className="mainPanel">
                <div className="panelOne">
                    <SpreadsheetComponent
                        ref={(s) => {
                            ssObj = s;
                        }}
                        select={handleCellSelected}
                        allowOpen={true}
                        openUrl="https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open"
                        saveUrl="https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save"
                        allowSave={true}
                        allowCellFormatting={true} // allows formatting
                        created={onCreated}
                        allowConditionalFormat={true}
                        needBlobData={true}
                        // saveComplete={saveComplete}

                        beforeSave={onBeforeSave}
                    // allowEditing={false}
                    // cellEdit={onCellEdit}
                    >
                        <SheetsDirective>
                            <SheetDirective name="Sample"
                            //  isProtected={true} protectSettings={protectOptions}
                            >
                                <RowsDirective>
                                    <RowDirective height={30}>
                                        <CellsDirective >
                                            <CellDirective value="Multi Select" colSpan={8} />
                                        </CellsDirective>
                                    </RowDirective>
                                </RowsDirective>
                                <ColumnsDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                </ColumnsDirective>

                            </SheetDirective>
                        </SheetsDirective>
                    </SpreadsheetComponent>
                </div>
                <div className="panelTwo">
                    <h1>Finding Interset</h1>
                    {TableTitle?.map((item, index) => (
                        <h4 className={"table-title"} onClick={() => handleAddTitles(item, index)}>
                            {item.title}
                        </h4>
                    ))}
                </div>
            </div>
        </div>
    );
}
