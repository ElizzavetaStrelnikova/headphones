

function App() {
  return (
    <>
    <header>
      <div>
            <Link to="/" id="logo" href="#headphones"><span className='logo'>QPICK</span></Link>
      </div>
      <div className='group_26'>
        <div>      
          <FaRegHeart className="svg_header" size={28}/>
        </div>
            <Link to="/order">
              <RiShoppingCart2Line  onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`svg_header ${cartOpen && 'active'}`} size={28}/>
              {cartOpen && (
                <div className='shop-cart'>
                  {props.orders.map(el => (
                    <Order key={el.id} item={el} />
                  ))}
                </div>
              )}
            </Link>
        </div>
    </header>
   <div>shop</div>
    </> 
  );
}

export default App;
