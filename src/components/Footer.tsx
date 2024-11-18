
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" bg-white shadow-sm border-t-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500">
          <div className="mb-2 sm:mb-0">
            <p>Created with ❤️ by <a className="cursor-pointer underline	" href="jainsubham.vercel.app" target="_blank">Subham Jain</a></p>
          </div>
          <div className="flex items-center space-x-4">
            <p>© {currentYear} WebTools. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}