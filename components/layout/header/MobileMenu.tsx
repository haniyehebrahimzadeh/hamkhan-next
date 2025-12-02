"use client";

export default function MobileMenu({ open, setOpen } : {open:boolean;setOpen:(value:boolean)=>void;}) {
  if (!open) return null;

  return (
    <div className="fixed z-50 top-0 right-0 w-64 h-full bg-white shadow-lg p-6">
      <button
        className="text-2xl mb-6"
        onClick={() => setOpen(false)}
      >
        ✕
      </button>

      <ul className="flex flex-col gap-6 text-lg text-gray-700">
        <li><a href="#features" onClick={() => setOpen(false)}>ویژگی‌ها</a></li>
        <li><a href="#about" onClick={() => setOpen(false)}>درباره ما</a></li>
        <li><a href="#contact" onClick={() => setOpen(false)}>تماس</a></li>
      </ul>
    </div>
  );
}
