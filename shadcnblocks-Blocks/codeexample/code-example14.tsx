"use client";

import {
  ChevronRight,
  FilePen,
  FilePlus,
  FileX,
  FolderOpen,
} from "lucide-react";
import { useState } from "react";

import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockFilename,
  CodeBlockFiles,
  CodeBlockHeader,
  CodeBlockItem,
} from "@/components/kibo-ui/code-block";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface CodeExample14Props {
  className?: string;
}

const data = [
  {
    title: "Create file",
    icon: FilePlus,
    content: "Upload a new file to your storage with the metadata you specify.",
    code: `import { Storage } from '@cloud/storage';

const storage = new Storage('st_xxxxxxxxx');

// Create a new file
const file = await storage.files.create({
  name: 'document.pdf',
  path: '/documents/',
  size: 1024000,
  type: 'application/pdf',
  // Optional metadata
  metadata: {
    author: 'John Doe',
    tags: ['important', 'archive'],
  },
});

console.log('File created:', file.id);`,
  },
  {
    title: "Update file",
    icon: FilePen,
    content:
      "Modify properties of an existing file, such as the name or metadata.",
    code: `import { Storage } from '@cloud/storage';

const storage = new Storage('st_xxxxxxxxx');

// Update by file id
const updated = await storage.files.update({
  id: '520784e2-887d-4c25-b53c-4ad46ad38100',
  name: 'updated-document.pdf',
  metadata: {
    lastModified: new Date().toISOString(),
  },
});

// Update by file path
await storage.files.update({
  path: '/documents/document.pdf',
  name: 'updated-document.pdf',
  metadata: {
    version: 2,
  },
});

console.log('File updated:', updated.id);`,
  },
  {
    title: "Delete file",
    icon: FileX,
    content: "Remove a file from your storage permanently by id or path.",
    code: `import { Storage } from '@cloud/storage';

const storage = new Storage('st_xxxxxxxxx');

// Delete by file id
await storage.files.remove({
  id: '520784e2-887d-4c25-b53c-4ad46ad38100',
  permanent: true,
});

// Delete by file path
const result = await storage.files.remove({
  path: '/documents/document.pdf',
  permanent: true,
});

if (result.success) {
  console.log('File deleted successfully');
} else {
  console.error('Failed to delete file');
}`,
  },
];

const CodeExample14 = ({ className }: CodeExample14Props) => {
  const [selectedItem, setSelectedItem] = useState(data[0].title);

  const selectedData =
    data.find((item) => item.title === selectedItem) || data[0];

  const codeBlockData = [
    {
      language: "typescript",
      filename: "storage.ts",
      code: selectedData.code.trim(),
    },
  ];

  return (
    <section className={cn("py-32", className)}>
      <div className="relative container py-10">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(var(--muted)_1px,transparent_1px)] mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent_100%)] bg-size-[16px_16px]"></div>
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <div className="flex items-center gap-2">
            <FolderOpen className="size-4.5" />
            <p>File Management</p>
          </div>
          <h2 className="mt-6 text-4xl font-medium text-balance md:text-5xl">
            Manage your files efficiently with code
          </h2>
          <p className="mt-4 text-balance text-muted-foreground md:text-lg">
            Add the logic to create, update, rename, and remove files directly
            into your application.
          </p>
          <div className="mt-8 flex gap-4">
            <Button>
              Documentation
              <ChevronRight />
            </Button>
            <Button variant="outline">
              Pricing
              <ChevronRight />
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-16 flex max-w-5xl flex-col gap-9 lg:flex-row">
          <Accordion
            type="single"
            className="flex shrink-0 flex-col gap-3.5 lg:max-w-96"
            value={selectedItem}
            onValueChange={(value: string) => value && setSelectedItem(value)}
          >
            {data.map((item) => (
              <AccordionItem
                key={item.title}
                value={item.title}
                className="group rounded-lg border bg-background data-[state=open]:border-primary/40"
              >
                <AccordionTrigger className="items-center p-6 px-6">
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-md border border-border bg-background group-data-[state=open]:border-primary/40">
                        <item.icon className="size-4.5" />
                      </span>
                      <p className="text-lg font-medium">{item.title}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <p className="px-6 pb-6 text-sm text-muted-foreground">
                    {item.content}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <CodeBlock
              data={codeBlockData}
              value="typescript"
              className="w-full"
            >
              <CodeBlockHeader>
                <CodeBlockFiles>
                  {(item) => (
                    <CodeBlockFilename
                      key={item.language}
                      value={item.language}
                    >
                      {item.filename}
                    </CodeBlockFilename>
                  )}
                </CodeBlockFiles>
                <CodeBlockCopyButton
                  onCopy={() => console.log("Copied code to clipboard")}
                  onError={() =>
                    console.error("Failed to copy code to clipboard")
                  }
                />
              </CodeBlockHeader>
              <ScrollArea className="w-full">
                <CodeBlockBody>
                  {(item) => (
                    <CodeBlockItem
                      key={item.language}
                      value={item.language}
                      className="max-h-[19.8rem] w-full"
                    >
                      <CodeBlockContent language="typescript">
                        {item.code}
                      </CodeBlockContent>
                    </CodeBlockItem>
                  )}
                </CodeBlockBody>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </CodeBlock>
          </div>
        </div>
      </div>
    </section>
  );
};

export { CodeExample14 };
