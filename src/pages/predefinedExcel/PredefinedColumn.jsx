
import React, { useState } from 'react'
import { CellsDirective, RowDirective, RowsDirective, SheetDirective, SheetsDirective, SpreadsheetComponent, CellDirective, RangesDirective, RangeDirective, ColumnsDirective, ColumnDirective, getSheetNameCount } from "@syncfusion/ej2-react-spreadsheet";
import { sampleData } from "../../table-titles/TableTitles"
import { useEffect } from 'react';
import { useRef } from 'react';

export default function PredefinedColumn() {
    let ssObj;
    const [sheetCount, setSheetCount] = useState(1)
    const [someObject, setSomeObject] = useState(null)
    useEffect(() => {
        document.querySelector(".e-add-sheet-tab").addEventListener("click", function (e) {
            if (ssObj) {
                setSheetCount(ssObj.sheets?.length)
                // console.log(ssObj.sheetNameCount, "ssObj.sheetNameCount")
                // setSheetCount(ssObj.sheetNameCount)
                // setSheetCount(ssObj.setSheetCount)
                // setSomeObject(ssObj)
            }
        })
    }, [sheetCount])


    const onCreated = () => {
        console.log(ssObj, "onCreate")
        ssObj.cellFormat({
            fontWeight: "bold", textAlign: "Left", verticalAlign: "middle", fontSize: "13pt",
            backgroundColor: "#1E88E5", color: "#ffffff"
        }, "A1:H1")
        ssObj.updateCell({ value: "Item", fontWeight: "bold", }, `A2`)
        ssObj.cellFormat({
            fontWeight: "bold", textAlign: "Left", verticalAlign: "middle", fontSize: "13pt",
            backgroundColor: "#12f555", color: "#000", width: "200px"
        }, "A2")
        ssObj.updateCell({ value: "Quantity", fontWeight: "bold" }, `B2`)
        ssObj.cellFormat({
            fontWeight: "bold", textAlign: "Left", verticalAlign: "middle", fontSize: "13pt",
            backgroundColor: "#12f555", color: "#000"
        }, "B2")
        ssObj.updateCell({ value: "Price Per Unit", fontWeight: "bold", }, `C2`)
        ssObj.cellFormat({
            fontWeight: "bold", textAlign: "Left", verticalAlign: "middle", fontSize: "13pt",
            backgroundColor: "#12f555", color: "#000"
        }, "C2")
        ssObj.updateCell({ value: "Total Cost", fontWeight: "bold", }, `D2`)
        ssObj.cellFormat({
            fontWeight: "bold", textAlign: "Left", verticalAlign: "middle", fontSize: "13pt",
            backgroundColor: "#12f555", color: "#000",
        }, "D2")
        ssObj.lockCells("B1:H7", true) // to cells unlock from protection
    }

    const handleChangeValue = (args) => {
        console.log(args, "argsargsargs")
    }
    const handleAddSheetTab = (args) => {
        console.log(args, "argsargs")
        if (ssObj.sheets.length >= 3) {
            args.cancel = true
        }
    }

    const handleBeforeCreate = (args) => {
        console.log(args, "handleBeforeCreate")
        // if (sheetCount >= 3) {
        //   args.cancel = true; // prevent the creation of a new sheet
        // }
    };

    const insertSheet = (args) => {
        console.log(args, "argsssss")

    }



    return (
        <div class="main-container">

            <SpreadsheetComponent
                allowOpen={true}
                allowSave={true}
                allowCellFormatting={true}
                created={onCreated}
                beforeCreate={handleBeforeCreate}
                ref={(s) => { ssObj = s }}
                valueChange={handleChangeValue}
                allowSheet={true}
                allowInsert={sheetCount < 5 ? true : false}
                allowAddSheet={true}
                toolbarSettings={{ addSheet: true }}
                addSheetTab={handleAddSheetTab}
            >
                <SheetsDirective>
                    <SheetDirective name="Sample">
                        <RowsDirective>
                            <RowDirective height={30}>
                                <CellsDirective >
                                    <CellDirective value="Food Supply Inventory Orders (Non- Perishable Items)" colSpan={8} />
                                </CellsDirective>
                            </RowDirective>
                        </RowsDirective>
                        <RangesDirective >
                            <RangeDirective startCell={"A2"} dataSource={sampleData}></RangeDirective>
                        </RangesDirective>
                        <ColumnsDirective startCell={"A2"} >
                            <ColumnDirective width={150}  ></ColumnDirective>
                            <ColumnDirective width={200} ></ColumnDirective>
                            <ColumnDirective width={200}  ></ColumnDirective>
                            <ColumnDirective width={200}  ></ColumnDirective>
                            <ColumnDirective width={200}  ></ColumnDirective>
                        </ColumnsDirective>
                        <RowsDirective>
                            <RowDirective index={7}>
                                <CellsDirective>
                                    <CellDirective index={2} value={'Total Amount'} ></CellDirective>
                                    <CellDirective formula={'=SUM(D3:D7)'}>
                                    </CellDirective>
                                </CellsDirective>
                            </RowDirective>
                        </RowsDirective>
                    </SheetDirective>
                </SheetsDirective>
            </SpreadsheetComponent>
        </div>
    )
}
