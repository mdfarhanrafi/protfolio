import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Header() {
  return (
    <header className="bg-slate-200 w-full p-4 shadow-sm flex items-center">
      <div className="flex items-center gap-3 border-1 rounded-s-xl">
        {/* User Avatar */}
        <Avatar>
          <AvatarImage src="/avatar.jpg" alt="User Avatar"/>
          <AvatarFallback>MZ</AvatarFallback>
        </Avatar>

        {/* Welcome Text */}
        <p className="text-gray-800 text-lg font-medium">
          Welcome back, <span className="font-semibold">Md Farhan</span>
        </p>
      </div>
    </header>
  );
}
