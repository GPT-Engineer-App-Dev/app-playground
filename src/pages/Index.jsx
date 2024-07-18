import React from 'react';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow text-center">
        <h1 className="text-3xl mt-8">Your Blank Canvas</h1>
        <p className="mt-4">Chat with the agent to start making edits.</p>
      </main>
      <footer className="bg-gray-100 py-4 text-center">
        <p className="text-sm text-gray-600">© 2023 Your Company Name. All rights reserved.</p>
        <Button variant="link" className="mt-2">
          Contact Us
        </Button>
      </footer>
    </div>
  );
};

export default Index;