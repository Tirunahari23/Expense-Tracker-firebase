import { Box, Button, Container, FormControl, InputLabel, MenuItem, Modal, Select, SelectChangeEvent, Stack, TextField, Typography } from '@mui/material'
import React, { ChangeEvent, useContext, useEffect, useState } from 'react'
import { expenseStyles } from './componentStyles'
import { context } from './ContextProvider'
import addNotification, { Notifications } from 'react-push-notification';

const ExpenseTracker = () => {
    const {balance,updateList,transactions}=useContext(context)
    const [open, setOpen] = React.useState(false);
    const [amount,setAmount]=useState(0);
    const [type,setType]=useState('');
    const [reason, setReason]=useState('');
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const handleAmount=(event:ChangeEvent<HTMLInputElement>)=>{
      setAmount(Number(event.target.value))
    };
    const handleReason = (event:ChangeEvent<HTMLInputElement>) => {
      setReason(event.target.value);
    };
    const handleType = (event: SelectChangeEvent) => {
      setType(event.target.value);
    };
   
    const addExpense=()=>{
      if(amount>balance){
        alert('entered amount exceeds balance');
      }else{
        const d = new Date();
        let time = d.toLocaleTimeString();
        updateList(type, reason, amount, time);
        expenseSuccss(reason);
        setReason("");
        setType("");
        setAmount(0);
        handleClose();
      }
    }
    function expenseSuccss(reason:string){
      addNotification({
        title: "Success",
        subtitle: `${type} account added`,
        message: `${reason} - ${amount}`,
        theme: "light",
        backgroundTop: "green",
        backgroundBottom: "#ffff",
        colorTop: "white",
        duration: 3000,
      });
    }
    function successNotification() {
      addNotification({
        title: "Success",
        subtitle: "You have successfully Loged In",
        message: "Welcome to Expensify",
        theme: "light",
        closeButton: "X",
        backgroundTop: "green",
        backgroundBottom: "yellowgreen",
        colorTop: "white",
        duration:3000,

      });
    }

    useEffect(()=>{
      successNotification()
    },[]);
  return (
    <>
      <Notifications position="top-right" />
      <Box sx={expenseStyles.main}>
        <Stack
          direction={"row"}
          gap={1}
          alignItems={"center"}
          justifyContent={"center"}
          sx={expenseStyles.header}
        >
          <Typography sx={expenseStyles.header.fonts}>Balance :</Typography>
          <Typography sx={expenseStyles.header.amount}>{balance}₹</Typography>
        </Stack>

        <Stack direction={"row"} gap={2} width={"100%"} justifyContent={"center"}>
          <Stack
            direction={"column"}
            gap={1}
            alignItems={"center"}
            sx={expenseStyles.header}
          >
            <Typography sx={expenseStyles.header.amount}>
              {transactions
                .filter((item) => item.type === "income")
                .reduce(function (acc, obj) {
                  return acc + obj.amount;
                }, 0)}
              ₹
            </Typography>
            <Typography sx={expenseStyles.header.fonts}>Total Income</Typography>
          </Stack>
          <Stack
            direction={"column"}
            gap={1}
            alignItems={"center"}
            sx={expenseStyles.header}
          >
            <Typography sx={expenseStyles.expenseBox.amount}>
              {transactions
                .filter((item) => item.type === "expense")
                .reduce(function (acc, obj) {
                  return acc + obj.amount;
                }, 0)}
              ₹
            </Typography>
            <Typography sx={expenseStyles.header.fonts}>Total Expense</Typography>
          </Stack>
        </Stack>
        <Button
          variant="contained"
          onClick={handleOpen}
          sx={expenseStyles.addBtn}
        >
          add new expense
        </Button>
        <Modal
          open={open}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Stack direction={"column"} gap={1} sx={expenseStyles.modal}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Type"
                value={type}
                onChange={handleType}
              >
                <MenuItem value={"expense"}>Expense</MenuItem>
                <MenuItem value={"income"}>Income</MenuItem>
              </Select>
            </FormControl>
            <TextField
              placeholder="name"
              label="Name"
              sx={expenseStyles.inputs}
              onChange={handleReason}
            />
            <TextField
              label="Enter amount"
              sx={expenseStyles.inputs}
              onChange={handleAmount}
            />
            <Stack
              direction={"row"}
              width={"100%"}
              justifyContent={"space-between"}
            >
              <Button onClick={addExpense}>add</Button>
              <Button onClick={handleClose}>Close</Button>
            </Stack>
          </Stack>
        </Modal>
        <Stack direction={"column"} gap={1} sx={expenseStyles.historyBox}>
          {transactions.map((item) => (
            <Stack
              direction={"row"}
              width={"100%"}
              justifyContent={"space-between"}
              alignItems={"center"}
              key={item.time}
              sx={{
                ...expenseStyles.listItem,
                bgcolor: `${item.type === "expense" ? "#f7767b" : "#cbf7b8"}`,
              }}
            >
              <Typography>{item.reason}</Typography>
              <Typography>{item.time}</Typography>
              <Typography>{item.amount}₹</Typography>
            </Stack>
          ))}
        </Stack>
      </Box>
    </>
  );
}

export default ExpenseTracker
