'use client'

import React, { ReactNode } from 'react'
import { AlertTriangle, RefreshCw } from 'lucide-react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
  retries: number
}

const MAX_RETRIES = 2

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, retries: 0 }
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('ErrorBoundary caught:', error, info.componentStack)
  }

  handleRetry = () => {
    if (this.state.retries < MAX_RETRIES) {
      // Reset the boundary state so children re-render
      this.setState(prev => ({ hasError: false, error: undefined, retries: prev.retries + 1 }))
    } else {
      // Hard reload after max retries exhausted
      window.location.reload()
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback

      const isLastRetry = this.state.retries >= MAX_RETRIES

      return (
        <div className="flex items-center justify-center min-h-screen bg-slate-900 px-4">
          <div className="text-center max-w-md">
            <div className="inline-flex p-5 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
              <AlertTriangle className="w-10 h-10 text-red-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">
              {isLastRetry ? 'Something went wrong' : 'Oops! An error occurred'}
            </h2>
            <p className="text-gray-400 mb-2">
              {isLastRetry
                ? 'Multiple retries failed. Please refresh the page.'
                : 'Something went wrong while rendering this section.'}
            </p>
            {this.state.error?.message && (
              <p className="text-xs text-gray-600 bg-white/5 rounded-lg px-3 py-2 mb-6 font-mono break-all">
                {this.state.error.message}
              </p>
            )}
            {!this.state.error?.message && <div className="mb-6" />}
            <button
              onClick={this.handleRetry}
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <RefreshCw className="w-4 h-4" />
              {isLastRetry ? 'Refresh Page' : `Try Again (${this.state.retries}/${MAX_RETRIES})`}
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
