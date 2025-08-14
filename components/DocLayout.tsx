
import React from 'react';

export const DocTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h1 className="text-4xl font-bold dark:text-white text-gray-900 mb-4 pb-2 border-b dark:border-gray-700 border-gray-300">{children}</h1>
);

export const DocSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="my-8">
    <h2 className="text-2xl font-semibold dark:text-white text-gray-900 mb-4 border-l-4 border-brand-blue pl-4">{title}</h2>
    <div className="prose dark:prose-invert prose-gray max-w-none dark:text-gray-300 text-gray-700">{children}</div>
  </section>
);

export const DocParagraph: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="mb-4 leading-relaxed">{children}</p>
);

export const DocList: React.FC<{ items: React.ReactNode[] }> = ({ items }) => (
  <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

export const DocNote: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="dark:bg-blue-900/30 bg-blue-50 border dark:border-blue-500/50 border-blue-200 rounded-lg p-4 my-6 dark:text-blue-200 text-blue-800">
        <p className="font-bold mb-2">Ghi chú:</p>
        {children}
    </div>
);
