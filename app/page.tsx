'use client';

import { ThemeToggle } from '@/components/theme-toggle';
import { TodoForm } from '@/components/todo-form';
import { TodoList } from '@/components/todo-list';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Todo App</h1>
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <TodoForm />
          <TodoList />
        </div>
      </main>
    </div>
  );
}