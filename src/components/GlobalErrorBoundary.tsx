import { Component } from "react";
import type { ErrorInfo, ReactNode } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class GlobalErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-screen flex flex-col items-center justify-center p-6 bg-gray-50 text-gray-800 font-sans">
          <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-red-50 rounded-full text-red-500">
                <AlertTriangle size={48} />
              </div>
            </div>
            <h1 className="text-2xl font-bold mb-3 text-gray-900">
              오류가 발생했습니다
            </h1>
            <p className="text-gray-600 mb-6 leading-relaxed">
              죄송합니다. 앱을 실행하는 도중 문제가 발생했습니다.<br/>
              잠시 후 다시 시도해 주세요.
            </p>
            {this.state.error && (
              <div className="bg-gray-100 p-4 rounded-lg text-left mb-6 overflow-auto max-h-40 text-xs font-mono text-gray-700">
                {this.state.error.toString()}
              </div>
            )}
            <button
              onClick={() => window.location.reload()}
              className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-all active:scale-95"
            >
              <RefreshCw size={18} />
              새로고침
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
