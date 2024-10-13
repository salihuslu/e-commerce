import { useState } from 'react'
import './App.css'
import PageContainer from './container/PageContainer'
import Header from './component/Header'
import RouterConfig from './config/RouterConfig'
import Loading from './component/Loading'
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux'
import { setDrawer } from './redux/slices/basketSlice'


function App() {

  const { products, drawer, totalAmount } = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  return (
    <div>
      <PageContainer>

        <Header />
        <RouterConfig />
        <Loading />
        <Drawer className='drawer' sx={{ padding: '20px' }} onClose={() => dispatch(setDrawer())} anchor='right' open={drawer}>
          {
            products && products.map((product) => {
              return (
                <div key={product.id}>
                  <div className='flex-row' style={{ padding: '20px' }}>
                    <img style={{ marginRight: '5px' }} src={product.image} width={50} height={50} />
                    <p style={{ width: '320px', marginRight: '5px' }}>{product.title}({product.price})</p>
                    <p style={{ fontWeight: 'bold', marginRight: '10px', width: '60px' }}>{product.price}TL</p>
                    <button style={{ padding: '5px', borderRadius: '5px', backgroundColor: 'red', border: 'none', color: '#fff', width: '50px' }}>sil</button>
                  </div>

                </div>
              )
            })
          }
          <div>
            <p>toplam tutar :{totalAmount}</p>
          </div>
        </Drawer>
      </PageContainer>
    </div>
  )
}

export default App
