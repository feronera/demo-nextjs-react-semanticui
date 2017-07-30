import React from 'react'
import 'isomorphic-fetch'
import VoucherList from '../components/voucher/voucherList'
import mockData from '../mocks/voucher/data.json'

const Voucher = (props) => (
  <div>
    Voucher card id: {props.card}
  </div>
)

Voucher.getInitialProps = async ({ req }) => {
  return { card: mockData.card }
}

// const Voucher = (props) => (
//   <div>
//     Preact stars: {props.stars}
//   </div>
// )

// Voucher.getInitialProps = async ({ req }) => {
//   // const res = await fetch('https://api.github.com/repos/developit/preact')
// 	// const json = await res.json()
//   return { stars: json.stargazers_count }
// }

export default Voucher