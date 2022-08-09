import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import $ from 'jquery';
import {styled} from "@mui/material/styles";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";

export default function CommonTable(props) {
    const StyledTableCell = styled(TableCell)(({theme}) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));
    const {width, height, tblRows, dataList, id} = props;
    return (
        <TableContainer component={Paper} sx={{height: {height}}}>
            <Table sx={{width: width}} aria-label="customized table" id={id}>
                <TableHead>
                    <TableRow>
                        {tblRows.map((row) => (
                            <StyledTableCell>{row}</StyledTableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody id='tblBody'>
                    {
                        setRowsToTblBody(dataList)
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

function setRowsToTblBody(dataList) {
    for (let i = 0; i < dataList.length; i++) {
        $("#tblBody").append(dataList[i]);
    }
}