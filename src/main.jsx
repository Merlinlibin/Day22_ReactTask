
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const data = [{
    id:1,
    pack: "FREE",
    amount: "$0/month",
    values: [{id:1,
      valid: true,
      content: "Single User"
    },
        {
        
      valid: true,
        content: "50GB Storage"
      },
    {
      valid: true,
        content: "Unlimited Public Projrct"
      },
    {
      valid: true,
        content: "Community Access"
      },
    {
      valid: false,
        content: "Unlimited Private projects"
      },
    {
      valid: false,
        content: "Dedicated Phone Support"
      },
    {
      valid: false,
        content: "Free Subdomain"
      },
    {
      valid: false,
        content: "Monthly Status Report"
      },
    
  ],
},
{
    id:1,
    pack: "PLUS",
    amount: "$9/month",
    values: [{id:1,
      valid: true,
      content: "5 User"
    },
        {
        
      valid: true,
        content: "50GB Storage"
      },
    {
      valid: true,
        content: "Unlimited Public Projrct"
      },
    {
      valid: true,
        content: "Community Access"
      },
    {
      valid: true,
        content: "Unlimited Private projects"
      },
    {
      valid: true,
        content: "Dedicated Phone Support"
      },
    {
      valid: true,
        content: "Free Subdomain"
      },
    {
      valid: false,
        content: "Monthly Status Report"
      },
    
  ],
    },
{
    id:1,
    pack: "PRO",
    amount: "$49/month",
    values: [{
      valid: true,
      content: "Unlimited User"
    },
        {
        
      valid: true,
        content: "50GB Storage"
      },
    {
      valid: true,
        content: "Unlimited Public Projrct"
      },
    {
      valid: true,
        content: "Community Access"
      },
    {
      valid: true,
        content: "Unlimited Private projects"
      },
    {
      valid: true,
        content: "Dedicated Phone Support"
      },
    {
      valid: true,
        content: "Free Subdomain"
      },
    {
      valid: true,
        content: "Monthly Status Report"
      },
    
  ],
  }]
ReactDOM.createRoot(document.getElementById('root')).render(
    <App data={data} />
)
