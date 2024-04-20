import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Collapse } from '@mui/material';

const DropdownTable = ({ headings, content,tag }) => {
  const [open, setOpen] = useState(false);

  const handleDropdownClick = () => {
    setOpen(!open);
  };

  console.log('in drop: ',content);

  return (
    <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
      <div onClick={handleDropdownClick}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table" style={{ width: '100%', backgroundColor : 'lightcyan', color: 'Black' }}>
            <TableBody>
              <TableRow>
                <TableCell><b>{tag}</b></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Collapse in={open} style={{ position: 'absolute', top: '100%', width: '100%', zIndex: 1 }}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table" style={{ width: '100%' }}>
            <TableHead>
              <TableRow>
                {headings.map((heading, index) => (
                  <TableCell key={index}>{heading}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {content.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <TableCell key={cellIndex}>{cell}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Collapse>
    </div>
  );
};

export default DropdownTable;
