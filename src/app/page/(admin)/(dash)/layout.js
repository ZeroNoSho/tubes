import { Provider } from "@/context/admin/store";
export default function adminLayout({ children }) {
  return (
    <Provider>
      <div>{children}</div>
    </Provider>
  );
}
