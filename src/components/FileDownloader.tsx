import { useState } from 'react';
import { Download, Link2, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';

export function FileDownloader() {
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleDownload = async () => {
    if (!url) return;
    
    try {
      setStatus('loading');
      setError('');
      
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch file');
      
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const filename = url.split('/').pop() || 'downloaded-file';
      
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setStatus('success');
      setTimeout(() => setStatus('idle'), 2000);
    } catch (err) {
      setError('Failed to download file. Please check the URL and try again.');
      setStatus('error');
    }
  };

  return (
    <div className=" grow bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4 pt-20 pb-20">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 space-y-8">
        <div className="text-center space-y-3">
          <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
            <Download className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">File Downloader</h2>
          <p className="text-gray-600">Enter a public URL to download your file</p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Link2 className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com/file.pdf"
                className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          <button
            onClick={handleDownload}
            disabled={!url || status === 'loading'}
            className={`w-full py-3 px-4 rounded-lg text-white font-medium flex items-center justify-center space-x-2 transition-all
              ${status === 'loading' 
                ? 'bg-blue-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'}`}
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Downloading...</span>
              </>
            ) : (
              <>
                <Download className="w-5 h-5" />
                <span>Download File</span>
              </>
            )}
          </button>

          {status === 'success' && (
            <div className="flex items-center justify-center space-x-2 text-green-600 animate-fade-in">
              <CheckCircle2 className="w-5 h-5" />
              <span>Download successful!</span>
            </div>
          )}

          {status === 'error' && (
            <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}
        </div>

        <div className="text-center text-sm text-gray-500">
          <p>Make sure the file URL is publicly accessible</p>
        </div>
      </div>
    </div>
  );
}