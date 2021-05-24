import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { App } from './app'
import * as Contexts from './contexts'
import './index.css'

const {
  AuthProvider,
  ContentProvider,
  EventsProvider,
} = Contexts

const ContextProviders = ({ children }) => {
  return (
    <AuthProvider>
      <ContentProvider>
        <EventsProvider>
          { children }
        </EventsProvider>
      </ContentProvider>
    </AuthProvider>
  )
}

ReactDOM.render(<ContextProviders><App /></ContextProviders>, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
