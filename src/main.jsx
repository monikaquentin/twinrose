/**
 * -------------------------------------------------------------------------------
 * Twin Rose © 2023 RedVelvet All Rights Reserved
 * -------------------------------------------------------------------------------
 *
 * Author : <re@redvelvet.me> (https://redvelvet.me)
 * GitHub : https://github.com/redvelvetme
 * GitLab : https://gitlab.com/redvelvetme
 *
 */

import React from 'react'
import ReactDOM from 'react-dom/client'

import '@/i18n'
import '@/index.scss'

import App from '@/App'

ReactDOM.createRoot(document.getElementById('redvelvet')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
