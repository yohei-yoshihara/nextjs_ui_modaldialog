"use client";

import { useState } from "react";
import ModalDialog from "./ui/modal";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="m-5">
      <div>
        <button
          onClick={() => setIsOpen(true)}
          className="mt-2 px-2 py-1 bg-blue-700 text-white rounded-md"
        >
          Open
        </button>
      </div>
      <div>
        <ModalDialog isOpen={isOpen} className="p-3 bg-zinc-800 rounded-lg">
          <div>
            <h1 className="text-white text-3xl font-bold mb-2">Title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              ab error quaerat facere ea sit suscipit expedita eos quas soluta
              perferendis, repellat reprehenderit aut nesciunt totam minima
              voluptas deserunt quibusdam!
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-2 px-2 py-1 bg-blue-700 text-white rounded-md"
            >
              Close
            </button>
          </div>
        </ModalDialog>
      </div>
    </div>
  );
}
