export const signup = {
  main: {
    width: "100%",
    height: "100vh",
    p: "2%",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffff",
  },
  imgSection: {
    width: { xs: "0%", md: "55%" },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: "90%",
    height: "95vh",
    display: { xs: "none", md: "block" },
  },
  font: {
    fontWeight: "800",
    color: "#ffff",
  },
  cardContainer: {
    width: { xs: "90%", md: "45%" },
    display: "flex",
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    height: "100%",
  },
  headerCon:{
    width:'70%'
  },
  container: {
    width: "70%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "30px",
    padding: "20px",
    boxSizing: "border-box",
    position: "relative",
  },
  header: {
    textAlign: "center",
    fontWeight: "800",
  },
  inputs: {
    width: "100%",
    paddingY: "10px",
    "& .MuiInputBase-root": {
      border: "1px solid #9e896a",
      borderRadius: "50px",
    },
    "& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "1px solid black ",
    },
    "& .MuiOutlinedInput-input":{
      padding:1.5,
    }
  },
  error: {
    fontSize: "10px",
    color: "red",
  },
  
  headerBtn: {
    backgroundColor: "#f8eddd",
    width: "70%",
    borderRadius: "50px",
    p: 1,
  },
  btn: {
    fontWeight: "800",
    color: "#ffff",
    backgroundColor: "#9e896a",
    "&:hover": {
      bgcolor: "#573f15",
    },
    width: "50%",
    borderRadius: "50px",
    textTransform:'none'
  },
  
};

const commonStyle = {
  py: 3,
  width: { xs: "90%", sm: "70%", md: "40%", lg: "25%" },
  boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
};
export const expenseStyles = {
  main: {
    width: "100%",
    height: "100vh",
    p: "2.5%",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  header: {
    ...commonStyle,
    fonts: {
      fontSize: { xs: "20px", sm: "25px", md: "30px" },
    },
    amount: {
      fontSize: { xs: "20px", sm: "25px", md: "30px" },
      color: "green",
    },
  },
  incomeBox: {
    ...commonStyle,
  },
  expenseBox: {
    ...commonStyle,
    amount: {
      fontSize: { xs: "20px", sm: "25px", md: "30px" },
      color: "red",
    },
  },
  addBtn: {
    width: { xs: "50%", md: "25%" },
  },
  historyBox: {
    width: { xs: "100%", md: "50%" },
    height: "50vh",
    border: "1px solid grey",
    p: 1,
    boxSizing: "border-box",
    overflowY: "auto",
  },
  modal: {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: {xs:'95%',md:'50%'},
    bgcolor: "background.paper",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  },
  inputs: {
    "& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "1px solid black ",
      color: "black",
      "& .MuiFormLabel-root-MuiInputLabel-root": {
        color: "red",
      },
    },
  },
  listItem: {
    p: 1,
    boxSizing: "border-box",
    borderRadius: "5px",
    color: "#591815",
  },
};