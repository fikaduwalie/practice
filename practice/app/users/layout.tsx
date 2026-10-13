import { PropsWithChildren } from "react";
import UsersSidebar from "./_components/UsersSidebar";

function UsersLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-row gap-1">
      <UsersSidebar />
      {children}
    </div>
  );
}

export default UsersLayout;
