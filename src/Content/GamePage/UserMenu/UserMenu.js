import s from './userMenu.module.css'


function SupplyCard() {
  return (
    <div className={s.supplyCard}>
      SupplyCard
    </div>
  )
}
function SupplyCards() {
  return (
    <div className={s.supplyList}>
      <SupplyCard/>
      <SupplyCard/>
      <SupplyCard/>
      <SupplyCard/>
      <SupplyCard/>
      <SupplyCard/>
    </div>
  )
}


function Actions() {
  return (
    <div className={s.actions}>
      <button disabled='disabled'>action</button>
      <button disabled='disabled'>action</button>
      <button disabled='disabled'>action</button>
      <button disabled='disabled'>action</button>
      <button disabled='disabled'>action</button>
      <button disabled='disabled'>action</button>
    </div>
  )
}


function UserMenu() {
    return (
      <div className={s.userMenu}>
            <SupplyCards/>
            <Actions/>
      </div>
    );
  }
  
  export default UserMenu;
  