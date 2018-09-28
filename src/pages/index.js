import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>你好</h1>
    <p>这是我的第一个网站</p>
    <p>哈哈！</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
