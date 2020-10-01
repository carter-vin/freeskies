export default function SignUp() {
  return (
    <div className="flex content-center w-full min-h-screen bg-blue-900">
      <div className="m-auto flex flex-col items-center" style={{ width: 410 }}>
        <img src="/logo.png" className="mb-32" style={{ height: 55 }} />
        <input className="w-full text-lg" placeholder="First Name" />
        <input className="w-full text-lg mt-4" placeholder="Last Name" />
      </div>
    </div>
  );
}
