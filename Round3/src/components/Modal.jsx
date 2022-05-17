import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
  background-color: #0b132b;
  width: 300px;
  margin: 0 auto;
  color: #fff;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 0.5rem;
`

const ProductItem = styled.div`
  background-color: #003444;
  padding: 0.7rem;
  margin-bottom: 1rem;
  border: 0.3rem solid #fff;
  border-radius: 0.5rem;
  &:last-child {
    margin-bottom: 0;
  }
`

function Modal() {
  return (
    <div>
      <Box>
        <ProductItem className="product-item">
          <p>
            <label>제품명</label>
            <input type="text" />
          </p>
          <p>
            <label>가격</label>
            <input type="text" />
          </p>
          <p>
            <label>제품상세</label>
            <input type="text" />
          </p>
        </ProductItem>
      </Box>
    </div>
  )
}

export default Modal
