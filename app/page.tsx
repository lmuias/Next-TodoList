import TodoList from "@/components/TodoList";
import TodoForms from "@/components/TodoForms";
import Header from "@/components/Header";
import StoreProvider from "@/redux/StoreProvider";

export default async function Home({ searchParams } : { searchParams: Promise<{query?: string}> }) {
  const query = (await searchParams).query;

  return (
      <div className="flex w-full flex-col items-center gap-20">
        <Header />
        <StoreProvider>
          <TodoForms query={query} />
          <TodoList query={query} />
        </StoreProvider>
      </div>
  );
}
