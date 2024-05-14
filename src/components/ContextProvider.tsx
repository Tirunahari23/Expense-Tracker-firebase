import {  createContext, useState } from "react"
interface IState {
  balance: number;
  transactions:{type:string,amount:number,time:string,reason:string}[];
}

export const context = createContext({
  balance: 0,
  transactions: [{ type: "", amount: 0, time: "", reason: "" }],
  updateList: (
    type: string,
    reason: string,
    amount: number,
    time: string
  ) => {},
});


const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [balance, setBalance] = useState<IState["balance"]>(10000);
  const [transactions, setTransactions] = useState<IState['transactions']>([]);
  const updateList=(type:string,reason:string,amount:number,time:string)=>{
    const obj = { type: type, amount: amount, time: time, reason: reason };
    setTransactions([...transactions,obj])

    type === "expense"
      ? setBalance(balance - amount)
      : setBalance(balance +amount);
  }
  return (
    <context.Provider value={{ balance, transactions, updateList}}>
      {children}
    </context.Provider>
  );
};

export default ContextProvider
