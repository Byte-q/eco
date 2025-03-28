export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-full mt-2">
      <div className="w-10 h-10 border-4 border-blue-500 border-solid border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
